import { useAuth0 } from "@auth0/auth0-vue";
import authConfig from "@/../auth_config.json";
import ky from "ky";
// import { useRouter } from "vue-router";
const domain = "https://cuvi.eu.auth0.com/authorize";

export default function useAuth() {
  const auth0 = useAuth0();
  // const router = useRouter();

  async function login() {
    const verifier = await generateVerifier();
    const challenge = await generateChallenge(verifier);
    const claims = "sub name email nickname picture phone_number birthdate gender address offline_access";
    const callbackUrl = "http://localhost:5173";

    const url = new URL(domain);
    const params = new URLSearchParams({
      response_type: "code",
      code_challenge: challenge,
      code_challenge_method: "S256",
      client_id: authConfig.clientId,
      redirect_uri: callbackUrl,
      scope: claims,
      audience: authConfig.audience,
      // state: "{state}"  // Uncomment and replace `{state}` with your state value if needed
    });
    url.search = params.toString();

    console.log(url.toString());
    window.location.href = url.toString();
    // router.push(url.toString());

    // auth0.loginWithRedirect();
  }

  async function logout() {
    auth0.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }

  return { ...auth0, login, logout };
}

async function fetchToken() {
  try {
    const url = new URL(domain);

    const searchParams = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: authConfig.clientId,
      code_verifier: "{yourGeneratedCodeVerifier}",
      code: "{yourAuthorizationCode}",
      redirect_uri: "{https://yourApp/callback}",
    });

    const data = await ky
      .post(url, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: searchParams,
      })
      .json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function generateVerifier() {
  const randomData = new Uint8Array(32);
  window.crypto.getRandomValues(randomData);

  let base64 = btoa(String.fromCharCode(...randomData));
  let base64Url = base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");

  return base64Url;
}

async function sha256(input: string): Promise<Uint8Array> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hash = await window.crypto.subtle.digest("SHA-256", data);
  return new Uint8Array(hash);
}

function base64URLEncode(data: Uint8Array): string {
  const base64 = btoa(String.fromCharCode(...data));
  return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
}

async function generateChallenge(verifier: string): Promise<string> {
  const hash = await sha256(verifier);
  return base64URLEncode(hash);
}
