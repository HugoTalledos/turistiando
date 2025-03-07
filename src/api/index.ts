import axios, { type AxiosResponse } from 'axios'
import type { APIResponse } from './SenderRequest.types'

export const api = axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: { 'Content-Type': 'application/json' },
})

export const getApiURL = () => 'http://localhost:8081/api'
export function getResponseData<R>(response: AxiosResponse<APIResponse<R>>): APIResponse<R> {
    return response.data // Retorna solo la parte útil de la respuesta
}

export function escalateError(error: any): never {
    if (error.response) {
        // Si el error proviene de una respuesta HTTP con error (ej: 400, 500)
        console.error('API Error:', error.response.data)
        throw new Error(error.response.data.message || 'Error en la API')
    }
    else if (error.request) {
        // Si la solicitud fue enviada pero no hubo respuesta del servidor
        console.error('No response from API:', error.request)
        throw new Error('No se recibió respuesta del servidor')
    }
    else {
        // Error al configurar la solicitud
        console.error('Request Error:', error.message)
        throw new Error('Error al procesar la solicitud')
    }
}
export default api
