import { Github, Mail, Linkedin } from "lucide-react";
import { ReactElement } from "react";
import { Title } from "./ui/title";
export function Footer() {
  return (
    <footer className="w-full min-h-36 grid place-items-center gap-10 p-10">
      <Title text="Contato" />
      <div className="flex gap-4">
        {infoValues.map((infos, index) => (
          <a
            href={
              infos.name !== "E-mail"
                ? `${infos.value}`
                : `mailto:${infos.value}`
            }
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="grid place-items-center gap-2 p-8"
          >
            <span>{infos.icon}</span>
            <span>{infos.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

interface IInfos {
  icon: ReactElement;
  name: string;
  value: string;
}

const infoValues: IInfos[] = [
  {
    icon: <Mail />,
    name: "E-mail",
    value: "gabrielgomes98@gmail.com",
  },
  {
    icon: <Github />,
    name: "GitHub",
    value: "https://github.com/gomessgbr",
  },
  {
    icon: <Linkedin />,
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/gabrigomes/",
  },
];
