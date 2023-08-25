import styles from "@/styles/Login.module.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.authContainer}>
      <div className={`brandTitle ${dancing.className}`}>Carbee</div>
      <h2>Welcome!</h2>
      {children}
    </div>
  );
}
