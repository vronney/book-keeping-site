import { prisma } from '@/lib/prisma';
import { Booking, BookingStatus, MeetingType } from '@prisma/client';
import { ConflictError, NotFoundError, ValidationError } from '@/lib/errors';

export class BookingService {
    /**
     * Creates a new booking with conflict detection.
     */
    static async createBooking(
        leadId: string,
        startAtUtc: Date | string,
        endAtUtc: Date | string,
        timezone: string
    ): Promise<Booking> {
        const start = typeof startAtUtc === 'string' ? new Date(startAtUtc) : startAtUtc;
        const end = typeof endAtUtc === 'string' ? new Date(endAtUtc) : endAtUtc;

        if (start >= end) {
            throw new ValidationError('Start time must be before end time');
        }

        // Check for conflicts
        const conflict = await prisma.booking.findFirst({
            where: {
                status: { not: BookingStatus.CANCELED },
                OR: [
                    {
                        startAtUtc: { lt: end },
                        endAtUtc: { gt: start }
                    }
                ]
            }
        });

        if (conflict) {
            throw new ConflictError('Time slot is already booked');
        }

        // Verify lead exists
        const lead = await prisma.lead.findUnique({ where: { id: leadId } });
        if (!lead) {
            throw new NotFoundError('Lead not found');
        }

        return await prisma.booking.create({
            data: {
                leadId,
                startAtUtc: start,
                endAtUtc: end,
                timezone,
                meetingType: MeetingType.DISCOVERY,
                status: BookingStatus.BOOKED
            }
        });
    }

    /**
     * Retrieves bookings for a date range (for availability).
     */
    static async getBookingsByDateRange(startDate: Date, endDate: Date): Promise<Booking[]> {
        return await prisma.booking.findMany({
            where: {
                status: { not: BookingStatus.CANCELED },
                startAtUtc: {
                    gte: startDate,
                    lt: endDate
                }
            },
            orderBy: { startAtUtc: 'asc' }
        });
    }

    /**
     * Retrieves the discovery booking for a specific lead.
     */
    static async getBookingByLeadId(leadId: string): Promise<Booking | null> {
        return await prisma.booking.findFirst({
            where: {
                leadId,
                status: { not: BookingStatus.CANCELED },
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    /**
     * Cancels a booking.
     */
    static async cancelBooking(id: string): Promise<Booking> {
        const booking = await prisma.booking.findUnique({ where: { id } });
        if (!booking) {
            throw new NotFoundError('Booking not found');
        }

        return await prisma.booking.update({
            where: { id },
            data: { status: BookingStatus.CANCELED }
        });
    }
}
