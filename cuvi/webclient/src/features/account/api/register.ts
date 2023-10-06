import api from "@/module/api";

export async function register(email: string, password: string) {
  api.post("auth/register", { json: { email, password }, searchParams: { useCookies: true } });
}
