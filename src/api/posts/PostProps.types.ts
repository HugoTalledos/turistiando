interface ContactinfoProps {
    key: string,
    value: string
}

export interface PostProps {
    id: string,
    slug: string,
    title: string,
    description: string,
    images: Array<string>
    order: number,
    creationDate: string,
    contactInfo: Array<ContactinfoProps>
}

export interface PostRequest {
    limit: number,
    lastItem: string,
    orderKey: string | 'creationDate',
    order: string | 'desc',
}