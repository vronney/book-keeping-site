import {
    User,
    Lead,
    LeadIntake,
    Note,
    Booking,
    ScheduleConfig,
    AuditLog,
    LeadStatus,
    BookingStatus,
    Role,
    MeetingType
} from '@prisma/client';

// Re-export Prisma types for convenience
export type {
    User,
    Lead,
    LeadIntake,
    Note,
    Booking,
    ScheduleConfig,
    AuditLog
};

export {
    LeadStatus,
    BookingStatus,
    Role,
    MeetingType
};

// API Response Types
export type ApiResponse<T = any> = {
    success: boolean;
    data?: T;
    error?: string;
    errors?: Record<string, string[]>; // Field-specific errors
    timestamp: string;
}

export type PaginatedResponse<T> = ApiResponse<{
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>

// Form State Types
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormState<T = any> {
    status: FormStatus;
    data?: T;
    error?: string;
    errors?: Record<string, string[]>;
}

// Scheduler Types
export interface TimeSlot {
    start: string; // ISO string
    end: string;   // ISO string
    available: boolean;
}

export interface DayAvailability {
    date: string; // YYYY-MM-DD
    slots: TimeSlot[];
}

// Qualification Result
export interface QualificationResult {
    qualified: boolean;
    reason?: string;
    autoDisqualified: boolean;
    requiresManualReview: boolean;
}

// User Context (for Auth)
export interface UserSession {
    id: string;
    email: string;
    role: Role;
    name?: string;
}
