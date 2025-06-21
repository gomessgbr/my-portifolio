import { useEffect, useState } from "react";
import { getUserRepositories, GitHubRepository } from "../services";

export function GetReposUseCase() {
  const [repos, setRepos] = useState<GitHubRepository[] | null>(null);

  const fetchRepos = async () => {
    const fetchedRepos = await getUserRepositories();
    setRepos(fetchedRepos);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return {
    repos,
  };
}
