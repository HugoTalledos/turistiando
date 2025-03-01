import type { ContactinfoProps, ScheduleProps } from '../models/Commons.types'

export interface PostProps {
    categoryId: string
    contactInfo: Array<ContactinfoProps>
    createdAt: string
    description: string
    images: Array<string>
    isDeleted: boolean
    likes: number
    mapLink: string
    order: number
    postId: string
    schedule: Array<ScheduleProps>
    slug: string
    title: string
    place: string
    isOpen: boolean
}

export interface PostRequest {
    limit: number
    lastItem: string
    orderKey: string | 'creationDate'
    order: string | 'desc'
}
