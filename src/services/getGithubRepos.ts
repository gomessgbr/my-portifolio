import { USER_GIT_HUB } from "../consts/consts";

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

export async function getUserRepositories(): Promise<GitHubRepository[]> {
  const response = await fetch(
    `https://api.github.com/users/${USER_GIT_HUB}/repos?sort=pushed&direction=desc
`
  );
  if (!response.ok) {
    throw new Error(`Erro ao buscar os repositórios de ${USER_GIT_HUB}`);
  }

  const data: GitHubRepository[] = await response.json();

  // Filtra apenas repositórios públicos e não forkados, e o id desse projeto aqui
  return data.filter(({ fork, id }) => !fork && id !== 963553902);
}
