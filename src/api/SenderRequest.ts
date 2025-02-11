import { api, getResponseData, escalateError } from './index';
import type { APIResponse, GetProps, PostProps } from './SenderRequest.types';

export default class SenderRequest {
    static post<T>({ path, body, config }: PostProps): Promise<APIResponse<T>> {
      return api.post<APIResponse<T>>(path, body, config)
        .then(getResponseData)
        .catch(escalateError);
    }

    static get<T>({ path, config}: GetProps): Promise<APIResponse<T>> {
      return api.get<APIResponse<T>>(path, config)
        .then(getResponseData)
        .catch(escalateError);
    }
  }