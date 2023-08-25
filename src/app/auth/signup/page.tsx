"use client";

import styles from "@/styles/Login.module.css";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Signup() {
  const [error, setError] = useState<string | null>(null);
  const { authUser, signup } = useAuth();
  if (authUser) {
    return redirect("/dashboard");
  }
  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username: string = event.currentTarget.username.value;
    const password: string = event.currentTarget.password.value;
    const confirmPassword: string = event.currentTarget.confirmPassword.value;
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    const userLogged = await signup(username, password);
    if (userLogged) {
      setError(`Error: ${userLogged}`);
    }
  }
  return (
    <form onSubmit={handleSignup} >
      <div className={styles.field}>
        <label htmlFor="username">Email</label>
        <input type="email" id="username" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" required />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit">Sign up</button>
      <span className={styles.legend}>
        Already have an account? <a href="/auth/login">Sign in</a>
      </span>
    </form>
  );
}
