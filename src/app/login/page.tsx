'use client';
import { loginRequest } from '@/api/auth'
import styles from '@/app/Login.module.css'
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ['latin']})
export default function Login() {
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const email = event.currentTarget.email.value
        const password = event.currentTarget.password.value
        const data = await loginRequest(email, password)
        console.log(data)
    }
    return (
        <div className={styles.authContainer}>
        <div className={`brandTitle ${dancing.className}`} >Carbee</div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Log in</button>
                <div className={styles.legend} >
                    Don&apos;t have an account? <a href="/signup">Sign up</a>
                </div>
            </form>
        </div>
    )
}