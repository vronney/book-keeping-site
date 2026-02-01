/**
 * @vitest-environment node
 */
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { prisma } from '../../lib/prisma'
import { Role, LeadStatus, AccSoftware, DisqualReason } from '@prisma/client'

describe('Prisma Schema Integration Tests', () => {
    // Clean up any potential data collisions (though separate test DB is better practice, we'll try to keep it isolated)
    // For this environment, we assume a fresh-ish DB or unique IDs.

    it('should create a user', async () => {
        const email = `test-user-${Date.now()}@example.com`
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash: 'hashed_secret',
                role: Role.STAFF,
            },
        })

        expect(user).toHaveProperty('id')
        expect(user.email).toBe(email)
        expect(user.role).toBe(Role.STAFF)
        expect(user.createdAt).toBeDefined()
    })

    it('should create a lead with intake (1:1 relation)', async () => {
        const lead = await prisma.lead.create({
            data: {
                status: LeadStatus.NEW,
                intake: {
                    create: {
                        fullName: 'John Doe',
                        email: `lead-${Date.now()}@business.com`,
                        phone: '555-0199',
                        businessName: 'Doe Corp',
                        entityType: 'LLC',
                        state: 'NV',
                        industry: 'Tech',
                        monthlyRevenueAmount: 50000.00,
                        monthlyRevenueRange: '$50k-$100k',
                        transactionsPerMonth: '100-200',
                        accountingSoftware: AccSoftware.QUICKBOOKS,
                        employeesCount: 5,
                        contractorsCount: 2,
                        bankAccountsCount: 2,
                        creditCardsCount: 3,
                        catchUpNeeded: false,
                        monthsBehind: 0,
                        bankStatementsAccess: true,
                        priorBooksAvailable: true,
                        preferredStartDate: new Date(),
                        consentContact: true,
                        consentTerms: true,
                    }
                }
            },
            include: {
                intake: true
            }
        })

        expect(lead).toHaveProperty('id')
        expect(lead.status).toBe(LeadStatus.NEW)
        expect(lead.intake).toBeDefined()
        expect(lead.intake?.businessName).toBe('Doe Corp')
        expect(lead.intake?.leadId).toBe(lead.id)
    })

    it('should enforce enum constraints (via type checking primarily, but DB runtime check)', async () => {
        // This test ensures that we can use the enums correctly.
        // Invalid enum values would cause TS errors before runtime, 
        // but we can verify that the underlying DB accepts valid ones.

        const lead = await prisma.lead.create({
            data: {
                status: LeadStatus.DISQUALIFIED,
                disqualReason: DisqualReason.BELOW_REVENUE,
            },
        })

        expect(lead.status).toBe('DISQUALIFIED')
        expect(lead.disqualReason).toBe('BELOW_REVENUE')
    })

    it('should create a note with relations', async () => {
        // Create user and lead first (or reuse if we had setup, but creating fresh is safer for isolation if no cleanup)
        const user = await prisma.user.create({
            data: {
                email: `note-author-${Date.now()}@test.com`,
                passwordHash: 'hash',
                role: Role.STAFF,
            }
        })

        const lead = await prisma.lead.create({
            data: { status: LeadStatus.NEW }
        })

        const note = await prisma.note.create({
            data: {
                leadId: lead.id,
                authorUserId: user.id,
                body: 'This is a test note.',
            },
            include: {
                lead: true,
                author: true,
            }
        })

        expect(note).toHaveProperty('id')
        expect(note.body).toBe('This is a test note.')
        expect(note.lead.id).toBe(lead.id)
        expect(note.author.id).toBe(user.id)
    })

    it('should create a booking with relations', async () => {
        const lead = await prisma.lead.create({
            data: { status: LeadStatus.QUALIFIED }
        })

        const start = new Date()
        const end = new Date(start.getTime() + 30 * 60000) // 30 mins later

        const booking = await prisma.booking.create({
            data: {
                leadId: lead.id,
                startAtUtc: start,
                endAtUtc: end,
                timezone: 'America/New_York',
            }
        })

        expect(booking).toHaveProperty('id')
        expect(booking.leadId).toBe(lead.id)
        expect(booking.meetingType).toBe('DISCOVERY') // Default
        expect(booking.status).toBe('BOOKED') // Default
    })

    it('should enforce foreign key constraints', async () => {
        // Attempt to create a note for a non-existent lead
        await expect(prisma.note.create({
            data: {
                leadId: 'non-existent-uuid',
                authorUserId: 'non-existent-user',
                body: 'Should fail',
            }
        })).rejects.toThrow()
    })

    it('should create an audit log', async () => {
        const log = await prisma.auditLog.create({
            data: {
                actionType: 'CREATE',
                targetType: 'User',
                metadataJson: { foo: 'bar' },
            }
        })

        expect(log).toHaveProperty('id')
        expect(log.metadataJson).toEqual({ foo: 'bar' })
    })
})
