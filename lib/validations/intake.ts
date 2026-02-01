import { z } from 'zod';

// Helper for phone validation (simple US format check)
const phoneRegex = /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

export const contactSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(phoneRegex, "Invalid phone number format"),
});

export const businessSchema = z.object({
    businessName: z.string().min(1, "Business name is required"),
    entityType: z.string().min(1, "Entity type is required"),
    state: z.string().length(2, "Use 2-letter state code"),
    industry: z.string().min(1, "Industry is required"),
});

export const operationsSchema = z.object({
    monthlyRevenueAmount: z.coerce.number().positive("Revenue must be positive"),
    monthlyRevenueRange: z.string().min(1, "Revenue range is required"),
    transactionsPerMonth: z.string().min(1, "Transaction volume is required"),
    accountingSoftware: z.enum(['QUICKBOOKS', 'XERO', 'WAVE', 'NONE', 'OTHER']),
    employeesCount: z.coerce.number().int().nonnegative("Must be a non-negative integer"),
    contractorsCount: z.coerce.number().int().nonnegative("Must be a non-negative integer"),
    bankAccountsCount: z.coerce.number().int().nonnegative("Must be a non-negative integer"),
    creditCardsCount: z.coerce.number().int().nonnegative("Must be a non-negative integer"),
});

export const bookkeepingHealthSchema = z.object({
    catchUpNeeded: z.boolean(),
    lastReconciledMonth: z.string().datetime().nullable().optional(), // Expecting ISO date string if present
    monthsBehind: z.coerce.number().int().nonnegative(),
});

export const documentReadinessSchema = z.object({
    bankStatementsAccess: z.boolean(),
    priorBooksAvailable: z.boolean(),
    cpaName: z.string().nullable().optional(),
    cpaEmail: z.string().email().nullable().optional().or(z.literal('')),
    preferredStartDate: z.string().datetime(), // ISO date string
});

export const consentSchema = z.object({
    consentContact: z.boolean().refine(val => val === true, { message: "You must consent to be contacted" }),
    consentTerms: z.boolean().refine(val => val === true, { message: "You must agree to the terms" }),
});

export const intakeFormSchema = contactSchema
    .merge(businessSchema)
    .merge(operationsSchema)
    .merge(bookkeepingHealthSchema)
    .merge(documentReadinessSchema)
    .merge(consentSchema);

export type IntakeFormValues = z.infer<typeof intakeFormSchema>;
