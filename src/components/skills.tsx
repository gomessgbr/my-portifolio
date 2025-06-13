export function Skills() {
  return (
    <div className="grid gap-10 p-8">
      <h2 className="w-full text-center text-5xl font-semibold pb-8">
        Habilidades
      </h2>
      <div className="grid grid-cols-6 gap-6">
        {tecSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-6 bg-[#1B1B1B] border-2 border-[#4169E1] rounded-3xl w-44 h-44"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="max-w-20 max-h-20 object-center"
            />
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
    icon: "/icons/icon_react.svg",
  },
  {
    name: "React Native",
    icon: "/icons/icon_rn.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/icon_typescript.svg",
  },
  {
    name: "JavaScript",
    icon: "/icons/icon_javascript.svg",
  },
  {
    name: "Git",
    icon: "/icons/icon_git.svg",
  },

  {
    name: "Zustand",
    icon: "/icons/icon_zustand.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/icon_nextjs.svg",
  },
  {
    name: "Sass",
    icon: "/icons/icon_sass.svg",
  },

  {
    name: "Expo",
    icon: "/icons/icon_expo.svg",
  },
  {
    name: "Node.js",
    icon: "/icons/icon_node.svg",
  },
  {
    name: "Redux",
    icon: "/icons/icon_redux.svg",
  },
  {
    name: "NestJS",
    icon: "/icons/icon_nest.svg",
  },
  {
    name: "Jest",
    icon: "/icons/icon_jest.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/icon_postgresql.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/icon_mongodb.svg",
  },
  {
    name: "Docker",
    icon: "/icons/icon_docker.svg",
  },
  {
    name: "Cypress",
    icon: "/icons/icon_cypress.svg",
  },

  {
    name: "Java",
    icon: "/icons/icon_java.svg",
  },
];
