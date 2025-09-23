import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      {/* Container geral */}
      <div className="flex h-screen w-screen flex-col md:flex-row">
        {/* Bloco de texto */}
        <div className="flex h-1/2 md:h-full w-full md:w-1/2 justify-center items-center">
          <div className="flex flex-col items-start text-start max-w-2xl px-6">
            <p className="text-4xl md:text-5xl font-bold text-gray-900">
              OI, MEU NOME É VICTOR!
            </p>
            <p className="mt-2 text-3xl md:text-4xl">
              Eu sou um <span className="text-[#F0944F] font-semibold">desenvolvedor de sistemas</span>
            </p>

            {/* Introdução ao portfólio */}
            <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              Bem-vindo ao meu portfólio. Aqui você encontrará projetos que
              demonstram minhas habilidades e competências como desenvolvedor!
            </p>
          </div>
        </div>

        {/* Bloco da imagem */}
        <div className="flex h-1/2 md:h-full w-full md:w-1/2 justify-center items-center">
          <img
            src="gatoVoando.png"
            alt="Logo do portfólio"
            className="w-2/3 md:w-1/6"
          />
          <img
            src="computador.png"
            alt="Logo do portfólio"
            className="w-2/3 md:w-1/3"
          />
        </div>
      </div>
    </>
  );
}

export default App;
