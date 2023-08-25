import { useState } from "react";
import { loginRequest } from "../api/auth";

export default function useAuth() {
  const [authUser, setAuthUser] = useState<string | null>(
    localStorage.getItem("authUser")
  );
  const login = async (
    username: string,
    password: string
  ): Promise<null | string> => {
    const data = await loginRequest(username, password);
    if (data.error) {
      return data.error;
    }
    localStorage.setItem("authUser", data.token);
    setAuthUser(data.token);
    return null;
  };
  const logout = () => {
    localStorage.removeItem("authUser");
    setAuthUser(null);
  };
  return { authUser, login, logout };
}
