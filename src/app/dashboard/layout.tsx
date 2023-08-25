"use client";

import { redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import styles from "@/styles/Dashboard.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authUser, logout } = useAuth();
  if (!authUser) {
    return redirect("/login");
  }
  return (
    <div className={styles.dashboard}>
      <nav className={styles.dashboard__navbar}>
        <div> Username </div>
        <button className={styles.logout} onClick={logout} > Log out</button>
      </nav>
        {children}
    </div>
  );
}
