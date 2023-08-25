import axios from "axios";
export async function loginRequest(
  username: string,
  password: string
): Promise<{ token: string; error?: string }> {
  try {
    const response = await axios.post("/auth", { username, password });
    return response.data;
  } catch (error: any) {
    return { error: error.response.data.message, token: "" };
  }
}

export async function signupRequest(
  username: string,
  password: string
): Promise<{ token: string; error?: string }> {
  try {
    // const response = await axios.post("/signup", { username, password });
    // return response.data;
    return { error: 'not implemented yet' , token: ""}
  } catch (error: any) {
    return { error: error.response.data.message, token: "" };
  }
}
