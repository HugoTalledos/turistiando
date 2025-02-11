
import SenderRequest from '../SenderRequest';
import type { PostProps, PostRequest } from './PostProps.types';

export default class PostRepository {
    static async getPostByCategory(request: PostRequest): Promise<PostProps[] | null> {
      try {
        const apiResponse = await SenderRequest.post<PostProps[]>({
            path: "/post",
            body: request
        });

        return apiResponse.data;
      } catch (e) {
        return null;
      }
    }

    static async getPostBySlug(slug: string): Promise<PostProps | null> {
        try {
            const apiResponse = await SenderRequest.get<PostProps>({ path: `/post/${slug}`});
            if (!apiResponse.status) return null;
            return apiResponse.data;
        } catch (e) {
            return null;
        }
    }
  }