import { About, NavBar, Presentation, Projects, Skills } from "./components";
import "./style.css";

export function App() {
  return (
    <div className=" bg-gradient-to-t from-black to-zinc-950 overflow-x-hidden">
      <div className="box-border min-h-dvh grid grid-cols-1 place-items-center ">
        <NavBar />
        <Presentation />
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
