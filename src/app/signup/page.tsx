'use client';
import styles from '@/app/Login.module.css'
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ['latin']})
export default function Signup() {
    return(
        <div className={styles.authContainer} >
        <div className={`brandTitle ${dancing.className}`} >Carbee</div>
            <h2>Welcome!</h2>
            <form>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" required />
                </div>
                <button type="submit">Sign up</button>
                <span className={styles.legend}>
                    Already have an account? <a href="/login">Sign in</a>
                </span>
            </form>
        </div>
    )
}