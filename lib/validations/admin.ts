import { z } from 'zod';
import { LeadStatus, DisqualReason } from '@prisma/client';

export const updateLeadStatusSchema = z.object({
    status: z.nativeEnum(LeadStatus),
    disqualReason: z.nativeEnum(DisqualReason).optional().nullable(),
    qualificationReason: z.string().optional().nullable(),
}).refine(data => {
    if (data.status === 'DISQUALIFIED' && !data.disqualReason) {
        return false;
    }
    return true;
}, {
    message: "Disqualification reason is required when status is DISQUALIFIED",
    path: ["disqualReason"],
});

export const createNoteSchema = z.object({
    leadId: z.string().uuid(),
    body: z.string().min(1, "Note cannot be empty"),
});

export const businessHoursSchema = z.record(z.string(), z.object({
    start: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
    end: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
}));

export const updateScheduleConfigSchema = z.object({
    meetingDurationMinutes: z.number().int().positive().optional(),
    timezoneDefault: z.string().optional(),
    businessHoursJson: businessHoursSchema.optional(),
});
