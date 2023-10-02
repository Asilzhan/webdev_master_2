import ky from "ky";

const api = ky.create({ prefixUrl: import.meta.env. });

export default api;