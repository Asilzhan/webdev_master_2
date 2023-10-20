import ky from "ky";
import { handleDate } from "./datetime";
import { useAuth0 } from "@auth0/auth0-vue";

function useApiClient() {
  const auth0 = useAuth0();
  const api = ky.create({
    prefixUrl: import.meta.env.VITE_API_URL,
    hooks: {
      beforeRequest: [
        async (request) => {
          const accessToken = await auth0.getAccessTokenSilently();
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        },
      ],
    },
  });
  return api;
}

export default useApiClient;

const fakeApi = ky.create({
  prefixUrl: "https://dummyjson.com",
  parseJson: (text) => JSON.parse(text, (_, value) => handleDate(value)),
});

export { fakeApi };

