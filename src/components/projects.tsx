import { GetReposUseCase } from "../useCases/getRepos";
import { Card } from "./ui/card";
import { Title } from "./ui/title";

export function Projects() {
  const { repos } = GetReposUseCase();
  console.log("repos = ", repos);

  return (
    <div className="grid gap-y-20 ">
      <Title text="Meus projetos" />
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {repos &&
          repos.length > 0 &&
          repos.map(({ name, description, html_url, id }) => (
            <Card
              key={id.toString()}
              name={name}
              details={description || ""}
              url={html_url}
              id={id}
            />
          ))}
      </div>
    </div>
  );
}
