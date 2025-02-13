export interface Page {
    limit: number
    lastItem?: string
    orderKey?: string
    order?: string
}

export interface ContactinfoProps {
    key: string
    value: string
}

export interface ScheduleProps {
    day: string
    schedule: string
}