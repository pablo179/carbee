import axios from 'axios'

export async function loginRequest(email: string, password: string) {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
    })
    return data
}
