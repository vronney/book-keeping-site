import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { LeadService } from '@/lib/services/lead-service';
import { BookingService } from '@/lib/services/booking-service';
import { UserService } from '@/lib/services/user-service';
import { AuditService } from '@/lib/services/audit-service';
import { prisma } from '@/lib/prisma';
import { LeadStatus, Role, AccSoftware } from '@prisma/client';
import { NotFoundError, ConflictError, ValidationError } from '@/lib/errors';

// Helper to generate unique emails
const uniqueEmail = () => `test-${Date.now()}-${Math.random()}@example.com`;

describe('Service Integration Tests', () => {

    // Clean up handled by transaction rollback or assumptions in seeded db?
    // We'll create fresh data for each test to avoid collisions.

    describe('LeadService', () => {
        it('should create a lead with intake validation', async () => {
            const email = uniqueEmail();
            const lead = await LeadService.createLead({
                fullName: 'Service Test',
                email,
                phone: '555-000-0000',
                businessName: 'Test Biz',
                entityType: 'LLC',
                state: 'CA',
                industry: 'Tech',
                monthlyRevenueAmount: 10000,
                monthlyRevenueRange: '$10k-50k',
                transactionsPerMonth: '50-100',
                accountingSoftware: 'QUICKBOOKS',
                employeesCount: 1,
                contractorsCount: 0,
                bankAccountsCount: 1,
                creditCardsCount: 1,
                catchUpNeeded: false,
                monthsBehind: 0,
                bankStatementsAccess: true,
                priorBooksAvailable: true,
                preferredStartDate: new Date().toISOString(),
                consentContact: true,
                consentTerms: true,
            });

            expect(lead.id).toBeDefined();
            expect(lead.status).toBe(LeadStatus.NEW);
            expect(lead.intake?.email).toBe(email);
        });

        it('should prevent duplicate emails', async () => {
            const email = uniqueEmail();
            const data = {
                fullName: 'Dupe Test',
                email,
                phone: '555-000-0000',
                businessName: 'Test Biz',
                entityType: 'LLC',
                state: 'CA',
                industry: 'Tech',
                monthlyRevenueAmount: 10000,
                monthlyRevenueRange: '$10k-50k',
                transactionsPerMonth: '50-100',
                accountingSoftware: 'QUICKBOOKS' as const,
                employeesCount: 1,
                contractorsCount: 0,
                bankAccountsCount: 1,
                creditCardsCount: 1,
                catchUpNeeded: false,
                monthsBehind: 0,
                bankStatementsAccess: true,
                priorBooksAvailable: true,
                preferredStartDate: new Date().toISOString(),
                consentContact: true,
                consentTerms: true,
            };

            await LeadService.createLead(data);

            // Check for specific error message or type
            await expect(LeadService.createLead(data)).rejects.toThrow(/already exists/i);
        });

        it('should get lead by ID', async () => {
            const email = uniqueEmail();
            const created = await LeadService.createLead({
                fullName: 'Get Test',
                email,
                phone: '555-000-0000',
                businessName: 'Test Biz',
                entityType: 'LLC',
                state: 'CA',
                industry: 'Tech',
                monthlyRevenueAmount: 10000,
                monthlyRevenueRange: '$10k-50k',
                transactionsPerMonth: '50-100',
                accountingSoftware: 'QUICKBOOKS',
                employeesCount: 1,
                contractorsCount: 0,
                bankAccountsCount: 1,
                creditCardsCount: 1,
                catchUpNeeded: false,
                monthsBehind: 0,
                bankStatementsAccess: true,
                priorBooksAvailable: true,
                preferredStartDate: new Date().toISOString(),
                consentContact: true,
                consentTerms: true,
            });

            const fetched = await LeadService.getLeadById(created.id);
            expect(fetched.id).toBe(created.id);
            expect(fetched.intake).toBeDefined();
        });

        it('should throw NotFoundError for non-existent lead', async () => {
            await expect(LeadService.getLeadById('00000000-0000-0000-0000-000000000000')).rejects.toThrow(/not found/i);
        });

        // ... additional LeadService tests can go here
    });

    describe('BookingService', () => {
        it('should create a booking and detect conflicts', async () => {
            // Setup lead
            const lead = await prisma.lead.create({ data: { status: 'QUALIFIED' } });

            const start1 = new Date();
            start1.setSeconds(0, 0); // Normalize
            const end1 = new Date(start1.getTime() + 30 * 60000);

            const booking1 = await BookingService.createBooking(lead.id, start1, end1, 'UTC');
            expect(booking1.id).toBeDefined();

            // Attempt overlapping booking
            const start2 = new Date(start1.getTime() + 15 * 60000); // Starts 15 mins in
            const end2 = new Date(start2.getTime() + 30 * 60000);

            await expect(BookingService.createBooking(lead.id, start2, end2, 'UTC')).rejects.toThrow(/already booked/i);
        });
    });

    describe('UserService', () => {
        it('should create and retrieve a user', async () => {
            const email = uniqueEmail();
            const user = await UserService.createUser(email, 'hash', Role.STAFF);

            expect(user.id).toBeDefined();

            const fetched = await UserService.getUserByEmail(email);
            expect(fetched?.id).toBe(user.id);
        });
    });

    describe('AuditService', () => {
        it('should log actions and retrieve them', async () => {
            const actionType = `TEST_ACTION_${Date.now()}`;
            await AuditService.logAction(null, actionType, 'System', null, { test: true });

            const logs = await AuditService.getAuditLogs({ actionType, limit: 1 });
            expect(logs.items.length).toBeGreaterThan(0);
            expect(logs.items[0].actionType).toBe(actionType);
        });
    });

});
