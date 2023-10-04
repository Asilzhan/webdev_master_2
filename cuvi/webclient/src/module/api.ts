import ky from "ky";
import { handleDate } from "./datetime";

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_URL });

export default api;

const fakeApi = ky.create({
  prefixUrl: "https://dummyjson.com",
  parseJson: (text) => JSON.parse(text, (_, value) => handleDate(value)),
});

export { fakeApi };
