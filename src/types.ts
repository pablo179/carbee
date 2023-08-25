enum AppointmentStatus {
    SCHEDULED,
    PAID,
    COMPLETE,
    IN_PROGRESS
}
export interface AppointmentDto {
    id: string;
    duration: number;
    scheduledTime: string;
    status: AppointmentStatus;
    workOrder: {
        service: string;
    }
}
export interface pageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    previousCursor: string;
    nextCursor: string;
}