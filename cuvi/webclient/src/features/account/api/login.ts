import api from "@/module/api";

export async function login(email: string, password: string) {
  try {
    const token = await api.post("auth/login", { json: { email, password } }).json<any>();
    localStorage.setItem("auth_token", JSON.stringify(token));
    return true;
  }
  catch {
    return false;
  }
}
