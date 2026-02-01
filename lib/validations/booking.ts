import { z } from 'zod';

export const bookingSchema = z.object({
    leadId: z.string().uuid("Invalid Lead ID"),
    startAtUtc: z.string().datetime("Invalid start time format"),
    endAtUtc: z.string().datetime("Invalid end time format").optional(), // Optional on input if calculated by duration
    timezone: z.string().min(1, "Timezone is required").refine((val) => {
        try {
            Intl.DateTimeFormat(undefined, { timeZone: val });
            return true;
        } catch (e) {
            return false;
        }
    }, { message: "Invalid timezone" }),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
