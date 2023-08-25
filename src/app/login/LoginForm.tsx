"use client";

import styles from "@/styles/Login.module.css";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const { authUser, login } = useAuth();
  if (authUser) {
    return redirect("/dashboard");
  }
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username: string = event.currentTarget.username.value;
    const password: string = event.currentTarget.password.value;
    const userLogged = await login(username, password);
    if (userLogged) {
      setError(`Error: ${userLogged}`);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div className={styles.field}>
        <label htmlFor="username">Email</label>
        <input type="email" id="username" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit">Log in</button>
    </form>
  );
}
