import axios from "axios";

const userToken = localStorage.getItem("userToken");
export const api = axios.create({
  baseURL: `URL BASE`,
  headers: { Authorization: `Bearer ${userToken}` },
});
