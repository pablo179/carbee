"use client";

import { redirect, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import styles from "@/styles/Dashboard.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const { authUser, logout } = useAuth();
  if (!authUser) {
    return redirect("/login");
  }
  return (
    <div className={styles.dashboard}>
      <nav className={styles.dashboard__navbar}>
        <div> Username </div>
        <div className={styles.dashboard__navigation} >
          <button onClick={() => router.push("/dashboard")}>Home</button>
          <button onClick={() => router.push("/dashboard/availability")}>Availability</button>
        </div>
        <button className={styles.logout} onClick={logout} > Log out</button>
      </nav>
        {children}
    </div>
  );
}
