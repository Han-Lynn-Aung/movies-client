import axios from "axios";

const api = axios.create({
  baseURL: "https://d2f3-103-42-216-138.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});

export default api;
