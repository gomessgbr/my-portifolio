export function Skills() {
  return (
    <div className="bg-zinc-800 p-8">
      <h2>Habilidades</h2>
      <div className="grid grid-cols-6 gap-6">
        {tecSkills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="w-46 h-46" />
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ItecSkills {
  name: string;
  icon: string;
}

const tecSkills: ItecSkills[] = [
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/500px-React-icon.svg.png",
  },
  {
    name: "React Native",
    icon: "https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png",
  },
  {
    name: "Next.js",
    icon: "https://nextjs.org/static/favicon/favicon.ico",
  },
  {
    name: "Expo",
    icon: "https://docs.expo.dev/static/images/expo-logo.svg",
  },
  {
    name: "TypeScript",
    icon: "https://www.typescriptlang.org/assets/images/icons/ts-logo.svg",
  },
  {
    name: "Node.js",
    icon: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "Redux",
    icon: "https://redux.js.org/logo/logo.png",
  },
  {
    name: "NestJS",
    icon: "https://nestjs.com/img/logo-small.svg",
  },
  {
    name: "Zustand",
    icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/logo.png",
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Sass",
    icon: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
  },
  {
    name: "Git",
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "Python",
    icon: "https://www.python.org/community/logos/python-logo-master-v3-TM.png",
  },
  {
    name: "Cypress",
    icon: "https://www.cypress.io/favicon.ico",
  },
  {
    name: "Java",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_logo_and_wordmark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/500px-Postgresql_elephant.svg.png",
  },
  {
    name: "MongoDB",
    icon: "https://www.mongodb.com/assets/images/global/favicon.ico",
  },
  {
    name: "Docker",
    icon: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
];
