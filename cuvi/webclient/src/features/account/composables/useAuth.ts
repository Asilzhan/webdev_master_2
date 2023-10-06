import { useAuth0 } from "@auth0/auth0-vue";

export default function useAuth() {
  const auth0 = useAuth0();

  async function login() {
    auth0.loginWithRedirect();
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

