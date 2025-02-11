import type { AxiosRequestConfig } from "axios";

interface ApiProps {
    path: string,
    config?: AxiosRequestConfig<any> | undefined
}

export interface PostProps extends ApiProps {
    body: object
}

export interface GetProps extends ApiProps{}

export interface APIResponse<T> {
    status: boolean,
    code: string,
    data: T
}