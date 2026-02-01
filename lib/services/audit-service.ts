import { prisma } from '@/lib/prisma';
import { AuditLog } from '@prisma/client';

export class AuditService {
    static async logAction(
        actorUserId: string | null,
        actionType: string,
        targetType: string,
        targetId: string | null,
        metadata: Record<string, any> = {}
    ): Promise<AuditLog> {
        return await prisma.auditLog.create({
            data: {
                actorUserId,
                actionType,
                targetType,
                targetId,
                metadataJson: metadata
            }
        });
    }

    static async getAuditLogs(params: {
        page?: number;
        limit?: number;
        actorUserId?: string;
        actionType?: string;
        startDate?: Date;
        endDate?: Date;
    }) {
        const page = params.page || 1;
        const limit = params.limit || 50;
        const skip = (page - 1) * limit;

        const where: any = {};
        if (params.actorUserId) where.actorUserId = params.actorUserId;
        if (params.actionType) where.actionType = params.actionType;
        if (params.startDate || params.endDate) {
            where.createdAt = {};
            if (params.startDate) where.createdAt.gte = params.startDate;
            if (params.endDate) where.createdAt.lte = params.endDate;
        }

        const [items, total] = await prisma.$transaction([
            prisma.auditLog.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: { actor: { select: { email: true } } } // Include actor email helper
            }),
            prisma.auditLog.count({ where })
        ]);

        return {
            items,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        };
    }
}
