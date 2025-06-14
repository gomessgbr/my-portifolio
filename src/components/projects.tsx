import { GetReposUseCase } from "../useCases/getRepos";
import { Card } from "./ui/card";

export function Projects() {
  const { repos } = GetReposUseCase();
  console.log("repos = ", repos);

  return (
    <div className="grid gap-y-20 ">
      <h2 className="font-semibold text-5xl">Meus projetos</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {repos &&
          repos.length > 0 &&
          repos.map(({ name, description }, index) => (
            <Card
              key={`${index} + ${name}`}
              name={name}
              details={description || ""}
            />
          ))}
      </div>
    </div>
  );
}
