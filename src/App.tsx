import { About, NavBar, Presentation, Projects } from "./components";

export function App() {
  return (
    <div className="min-w-dvw bg-gradient-to-t from-black to-zinc-950 ">
      <div className="box-border min-h-dvh grid grid-cols-1 place-items-center ">
        <NavBar />
        <Presentation />
        <About />
        <Projects />
      </div>
    </div>
  );
}
