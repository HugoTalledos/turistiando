import SenderRequest from '../SenderRequest'
import type { CategoryProps } from './CategoryProps.types'

export default class CategoryRepository {
    static async getAllCategories(): Promise<CategoryProps[] | null> {
        try {
            const apiResponse = await SenderRequest.get<CategoryProps[]>({ path: '/category' })
            return apiResponse.data
        }
        catch (e) {
            return null
        }
    }
}
