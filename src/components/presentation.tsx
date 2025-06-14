export function Presentation() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 text-white ">
      <div className="text-center space-y-4">
        <p className="text-3xl font-medium">
          Olá, meu nome é{" "}
          <strong className="text-[#688DFD] font-medium">Gabriel Gomes</strong>{" "}
          e sou
        </p>
        <h1 className="text-5xl font-semibold">Desenvolvedor Front-end</h1>
      </div>

      <div className="max-w-xl px-2">
        <p className="text-center text-pretty text-lg leading-relaxed  p-4 rounded-md">
          Desenvolvedor de software front-end apaixonado com 3 anos de
          experiência no setor. Formei-me em Ciência da Computação e, desde
          então, tenho me dedicado a criar e otimizar interfaces de usuário
          interativas e amigáveis.
        </p>
      </div>

      <a
        href="#"
        className="bg-[#4169E1] hover:bg-[#3558b8] transition-colors px-8 py-3.5 rounded-lg text-xl font-medium"
      >
        Acessar meu LinkedIn
      </a>
    </section>
  );
}
