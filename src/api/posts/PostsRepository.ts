import type { Page } from '../models/Commons.types'
import SenderRequest from '../SenderRequest'
import type { PostProps } from './PostProps.types'

export default class PostRepository {
    static async getPostByCategory(categoryId: string, page: Page | object): Promise<PostProps[] | null> {
        try {
            const apiResponse = await SenderRequest.post<PostProps[]>({
                path: `/post/category/${categoryId}`,
                body: page,
            })
            return apiResponse.data
        }
        catch (e) {
            return null
        }
    }

    static async getPostBySlug(slug: string): Promise<PostProps | null> {
        try {
            const apiResponse = await SenderRequest.get<PostProps>({ path: `/post/${slug}` })
            if (!apiResponse.status) {
                return null
            }
            return apiResponse.data
        }
        catch (e) {
            return null
        }
    }
}
