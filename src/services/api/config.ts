import axios from "axios";
import { GITHUB_BASE_REPOS_URL } from "../../consts/consts";

export const api = axios.create({
  baseURL: GITHUB_BASE_REPOS_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_PERSONAL_TOKEN}`,
  },
});
