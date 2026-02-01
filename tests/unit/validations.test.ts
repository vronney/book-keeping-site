import { describe, it, expect } from 'vitest';
import {
    contactSchema,
    businessSchema,
    operationsSchema,
    consentSchema
} from '../../lib/validations/intake';
import { bookingSchema } from '../../lib/validations/booking';
import { updateLeadStatusSchema } from '../../lib/validations/admin';

describe('Intake Validation Schemas', () => {

    it('contactSchema should validate correct input', () => {
        const result = contactSchema.safeParse({
            fullName: 'John Doe',
            email: 'john@example.com',
            phone: '555-123-4567'
        });
        expect(result.success).toBe(true);
    });

    it('contactSchema should reject invalid email', () => {
        const result = contactSchema.safeParse({
            fullName: 'John Doe',
            email: 'not-an-email',
            phone: '555-123-4567'
        });
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0].message).toContain("Invalid email");
        }
    });

    it('operationsSchema should reject negative revenue', () => {
        const result = operationsSchema.safeParse({
            monthlyRevenueAmount: -100,
            monthlyRevenueRange: '0-50k',
            transactionsPerMonth: '10',
            accountingSoftware: 'NONE',
            employeesCount: 1,
            contractorsCount: 0,
            bankAccountsCount: 1,
            creditCardsCount: 0
        });
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0].message).toContain("positive");
        }
    });

    it('consentSchema should require both checkboxes', () => {
        const result = consentSchema.safeParse({
            consentContact: true,
            consentTerms: false
        });
        expect(result.success).toBe(false);
    });
});

describe('Booking Validation Schema', () => {
    it('should validate valid booking request', () => {
        const result = bookingSchema.safeParse({
            leadId: '123e4567-e89b-12d3-a456-426614174000', // valid uuid
            startAtUtc: new Date().toISOString(),
            timezone: 'America/New_York'
        });
        expect(result.success).toBe(true);
    });

    it('should reject invalid timezone', () => {
        const result = bookingSchema.safeParse({
            leadId: '123e4567-e89b-12d3-a456-426614174000',
            startAtUtc: new Date().toISOString(),
            timezone: 'Invalid/Timezone'
        });
        expect(result.success).toBe(false);
    });
});

describe('Admin Validation Schema', () => {
    it('should require disqualReason when status is DISQUALIFIED', () => {
        const result = updateLeadStatusSchema.safeParse({
            status: 'DISQUALIFIED'
            // Missing reason
        });
        expect(result.success).toBe(false);
    });

    it('should validate valid status update', () => {
        const result = updateLeadStatusSchema.safeParse({
            status: 'NEW'
        });
        expect(result.success).toBe(true);
    });
});
