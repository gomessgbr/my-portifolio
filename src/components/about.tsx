export function About() {
  return (
    <div className=" grid grid-cols-[minmax(300px,650px)_400px] gap-x-28 p-4 ">
      <section className="text-white text-left gap-7 ">
        <a
          href="#"
          className="inline-block mb-4 bg-[#4169E1] text-white py-2 px-4 rounded"
        >
          ⚡ Sobre mim
        </a>
        <h3 className="text-2xl font-bold mb-10">Quem sou eu</h3>
        <p className="mb-2">
          Minha jornada na área de tecnologia começou por minha fascinação por
          computadores e pelo que eles podem realizar. Esta paixão me levou a
          explorar profundamente o desenvolvimento front-end, onde encontrei
          minha verdadeira vocação.
        </p>
        <p>
          Me especializei em transformar conceitos de design em código, criando
          experiências digitais que não apenas parecem boas, mas também
          proporcionam uma interação intuitiva para os usuários.
        </p>
      </section>
      <section className="flex justify-center items-center ">
        <img
          src="myProfile.svg"
          alt="Meu perfil"
          className="w-86 h-86 object-cover"
        />
      </section>
    </div>
  );
}
