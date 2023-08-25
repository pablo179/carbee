import styles from "@/styles/Login.module.css";
import LoginForm from "./LoginForm";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"] });
export default function Login() {
  return (
    <div className={styles.authContainer}>
      <div className={`brandTitle ${dancing.className}`}>Carbee</div>
      <h2>Welcome!</h2>
      <LoginForm />
    </div>
  );
}
