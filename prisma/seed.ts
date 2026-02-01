import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Create Admin User
    const adminEmail = 'admin@test.com'
    const adminUser = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            passwordHash: 'hashed_password_placeholder', // In a real app, hash this properly
            role: Role.ADMIN,
        },
    })
    console.log({ adminUser })

    // Create Staff User
    const staffEmail = 'staff@test.com'
    const staffUser = await prisma.user.upsert({
        where: { email: staffEmail },
        update: {},
        create: {
            email: staffEmail,
            passwordHash: 'hashed_password_placeholder',
            role: Role.STAFF,
        },
    })
    console.log({ staffUser })

    // Create Default ScheduleConfig
    // Using findFirst to simulate singleton behavior since we don't have a fixed ID
    const existingConfig = await prisma.scheduleConfig.findFirst()
    if (!existingConfig) {
        const config = await prisma.scheduleConfig.create({
            data: {
                meetingDurationMinutes: 30,
                timezoneDefault: 'America/New_York', // Example default
                businessHoursJson: JSON.stringify({
                    monday: { start: '09:00', end: '17:00' },
                    tuesday: { start: '09:00', end: '17:00' },
                    wednesday: { start: '09:00', end: '17:00' },
                    thursday: { start: '09:00', end: '17:00' },
                    friday: { start: '09:00', end: '17:00' },
                }),
            },
        })
        console.log({ scheduleConfig: config })
    } else {
        console.log('ScheduleConfig already exists')
    }

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
