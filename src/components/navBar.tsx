export function NavBar() {
  return (
    <header className="grid grid-cols-1 place-items-center font-sans pt-10">
      <nav
        className="w-max flex gap-64 place-items-center px-12 text-white bg-zinc-900 opacity-85 border border-[#2E2F34] rounded-full font-semibold"
        aria-label="Menu principal"
      >
        <h1 className="text-white text-2xl">Gabriel Gomes</h1>

        <ul className="flex gap-12 py-4 text-lg">
          <li>
            <a href="#" className="hover:text-[#688DFD]">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#688DFD]">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#688DFD]">
              Experiências
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#688DFD]">
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#688DFD]">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#688DFD]">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
