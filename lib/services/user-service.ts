import { prisma } from '@/lib/prisma';
import { User, Role } from '@prisma/client';
import { NotFoundError, ConflictError } from '@/lib/errors';

export class UserService {
    static async getUserByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    static async getUserById(id: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { id }
        });
    }

    static async createUser(email: string, passwordHash: string, role: Role = Role.STAFF): Promise<User> {
        const existing = await this.getUserByEmail(email);
        if (existing) {
            throw new ConflictError('User already exists');
        }

        return await prisma.user.create({
            data: {
                email,
                passwordHash,
                role
            }
        });
    }

    static async updateLastLogin(id: string): Promise<User> {
        const user = await this.getUserById(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }

        return await prisma.user.update({
            where: { id },
            data: { lastLoginAt: new Date() }
        });
    }
}
