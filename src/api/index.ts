import { API_URL } from '../config/constants'

export async function api<T>(value: string): Promise<T> {
    const response = await fetch(`${API_URL}=${value}`)
    return response.json()
}
