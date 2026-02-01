import { prisma } from '@/lib/prisma';
import { Lead, LeadIntake, LeadStatus, DisqualReason, Prisma } from '@prisma/client';
import { NotFoundError, ConflictError } from '@/lib/errors';
import { IntakeFormValues } from '@/lib/validations/intake';

export class LeadService {
    /**
     * Creates a new lead with intake data in a transaction.
     */
    static async createLead(data: IntakeFormValues): Promise<Lead & { intake: LeadIntake | null }> {
        // Check for existing email to prevent duplicates at the application level
        const existing = await this.checkDuplicateEmail(data.email);
        if (existing) {
            throw new ConflictError(`Lead with email ${data.email} already exists`);
        }

        return await prisma.$transaction(async (tx) => {
            const lead = await tx.lead.create({
                data: {
                    status: LeadStatus.NEW,
                    intake: {
                        create: {
                            fullName: data.fullName,
                            email: data.email,
                            phone: data.phone,
                            businessName: data.businessName,
                            entityType: data.entityType,
                            state: data.state,
                            industry: data.industry,
                            monthlyRevenueAmount: data.monthlyRevenueAmount,
                            monthlyRevenueRange: data.monthlyRevenueRange,
                            transactionsPerMonth: data.transactionsPerMonth,
                            accountingSoftware: data.accountingSoftware,
                            employeesCount: data.employeesCount,
                            contractorsCount: data.contractorsCount,
                            bankAccountsCount: data.bankAccountsCount,
                            creditCardsCount: data.creditCardsCount,
                            catchUpNeeded: data.catchUpNeeded,
                            lastReconciledMonth: data.lastReconciledMonth ? new Date(data.lastReconciledMonth) : null,
                            monthsBehind: data.monthsBehind,
                            bankStatementsAccess: data.bankStatementsAccess,
                            priorBooksAvailable: data.priorBooksAvailable,
                            cpaName: data.cpaName,
                            cpaEmail: data.cpaEmail,
                            preferredStartDate: new Date(data.preferredStartDate),
                            consentContact: data.consentContact,
                            consentTerms: data.consentTerms,
                        }
                    }
                },
                include: {
                    intake: true
                }
            });
            return lead;
        });
    }

    /**
     * Retrieves a lead by ID with intake data.
     */
    static async getLeadById(id: string): Promise<Lead & { intake: LeadIntake | null }> {
        const lead = await prisma.lead.findUnique({
            where: { id },
            include: { intake: true }
        });

        if (!lead) {
            throw new NotFoundError(`Lead with ID ${id} not found`);
        }

        return lead;
    }

    /**
     * Retrieves a paginated list of leads with optional filters.
     */
    static async getLeads(params: {
        page?: number;
        limit?: number;
        status?: LeadStatus;
        search?: string;
        qualified?: boolean;
        archived?: boolean;
    }) {
        const page = params.page || 1;
        const limit = params.limit || 20;
        const skip = (page - 1) * limit;

        const where: Prisma.LeadWhereInput = {
            // Add archived filter - defaults to active leads (archivedAt: null) unless explicitly requested
            ...(params.archived === true ? { archivedAt: { not: null } } : params.archived === false ? { archivedAt: null } : {}),
            ...(params.status ? { status: params.status } : {}),
            ...(params.qualified !== undefined ? { qualified: params.qualified } : {}),
        };

        if (params.search) {
            where.OR = [
                { intake: { fullName: { contains: params.search, mode: 'insensitive' } } },
                { intake: { email: { contains: params.search, mode: 'insensitive' } } },
                { intake: { businessName: { contains: params.search, mode: 'insensitive' } } },
            ];
        }

        const [items, total] = await prisma.$transaction([
            prisma.lead.findMany({
                where,
                include: { intake: true },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' }
            }),
            prisma.lead.count({ where })
        ]);

        return {
            items,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        };
    }

    /**
     * Updates a lead's status and disqualification reason if applicable.
     */
    static async updateLeadStatus(id: string, status: LeadStatus, disqualReason?: DisqualReason | null) {
        // Verify exists
        await this.getLeadById(id);

        return await prisma.lead.update({
            where: { id },
            data: {
                status,
                disqualReason: status === 'DISQUALIFIED' ? disqualReason : null,
                // Auto-archive if disqualified? Or let that be manual? Requirement: Implement archiveLead separate.
            }
        });
    }

    /**
     * Archives a lead by setting archivedAt.
     */
    static async archiveLead(id: string) {
        await this.getLeadById(id);
        return await prisma.lead.update({
            where: { id },
            data: { archivedAt: new Date() }
        });
    }

    /**
     * Hard deletes a lead and all related records.
     */
    static async deleteLead(id: string) {
        await this.getLeadById(id);
        // Cascade delete is configured in schema, but good to be explicit or wrap in check
        return await prisma.lead.delete({
            where: { id }
        });
    }

    /**
     * Checks if an email already exists in lead intakes.
     */
    static async checkDuplicateEmail(email: string): Promise<Lead | null> {
        const intake = await prisma.leadIntake.findFirst({
            where: { email: { equals: email, mode: 'insensitive' } }, // Case insensitive check
            include: { lead: true }
        });
        return intake?.lead || null;
    }
}
