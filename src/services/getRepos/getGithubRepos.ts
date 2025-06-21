// import { USER_GIT_HUB } from "../../consts/consts";
import { api } from "../api/config";

export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
}

const emptyRepositoryResponse: GitHubRepository[] = [
  {
    id: 0,
    name: "",
    html_url: "",
    description: null,
    fork: false,
    language: null,
    created_at: "",
    updated_at: "",
    stargazers_count: 0,
  },
];
export async function getUserRepositories(): Promise<GitHubRepository[]> {
  try {
    const { data } = await api.get<GitHubRepository[]>("");

    return data.filter(
      ({ id }) =>
        id !== 963553902 &&
        id !== 703742232 &&
        id !== 652455687 &&
        id !== 902590978 &&
        id !== 853412029
    );
  } catch {
    // throw new Error(`Erro ao buscar os repositórios de ${USER_GIT_HUB}`);
    return emptyRepositoryResponse;
  }
}

interface IReposPreviews {
  id: number;
  preview: string;
}

export const reposPreviews: IReposPreviews[] = [
  {
    id: 901834169,
    preview: "/projects/list-paises.png",
  },
  {
    id: 913619156,
    preview: "/projects/calendario.png",
  },
  {
    id: 911754677,
    preview: "/projects/lista-compras.png",
  },
  {
    id: 902323760,
    preview: "/projects/toggle-dark-mode.png",
  },
  {
    id: 893170026,
    preview: "/projects/tattoo-page.png",
  },
  {
    id: 902590978,
    preview: "/projects/",
  },
];
