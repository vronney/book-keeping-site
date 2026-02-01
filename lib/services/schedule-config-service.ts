import { prisma } from '@/lib/prisma';
import { ScheduleConfig, Prisma } from '@prisma/client';

export class ScheduleConfigService {
    /**
     * Retrieves the current schedule config. Creates default if missing.
     */
    static async getScheduleConfig(): Promise<ScheduleConfig> {
        const config = await prisma.scheduleConfig.findFirst();

        if (config) return config;

        // Fallback default creation if seed didn't run or DB was cleared
        return await prisma.scheduleConfig.create({
            data: {
                meetingDurationMinutes: 30,
                timezoneDefault: 'UTC',
                businessHoursJson: JSON.stringify({
                    monday: { start: '09:00', end: '17:00' },
                    tuesday: { start: '09:00', end: '17:00' },
                    wednesday: { start: '09:00', end: '17:00' },
                    thursday: { start: '09:00', end: '17:00' },
                    friday: { start: '09:00', end: '17:00' },
                })
            }
        });
    }

    /**
     * Updates the schedule configuration.
     */
    static async updateScheduleConfig(
        data: Partial<Omit<ScheduleConfig, 'id' | 'updatedAt' | 'updatedByUserId'>>,
        userId: string
    ): Promise<ScheduleConfig> {
        const current = await this.getScheduleConfig();

        const { businessHoursJson, ...rest } = data;

        return await prisma.scheduleConfig.update({
            where: { id: current.id },
            data: {
                ...rest,
                businessHoursJson: businessHoursJson as Prisma.InputJsonValue | undefined,
                updatedByUserId: userId
            }
        });
    }
}
