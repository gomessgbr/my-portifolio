import { GetReposUseCase } from "../useCases/getRepos";
import { Card } from "./ui/card";

export function Projects() {
  const { repos } = GetReposUseCase();

  return (
    <div>
      <h2>Meus projetos</h2>
      <div>
        {repos &&
          repos.length > 0 &&
          repos.map(({ name, description }) => (
            <Card name={name} details={description || ""} />
          ))}
      </div>
    </div>
  );
}
