import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      {/* Container geral */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        
        {/* Bloco de texto */}
        <div className="flex justify-center items-center p-6 md:p-12">
          <div className="flex flex-col items-start text-start max-w-2xl">
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
              OI, MEU NOME É VICTOR!
            </p>
            <p className="mt-2 text-xl sm:text-2xl md:text-4xl">
              Eu sou um{" "}
              <span className="text-[#F0944F] font-semibold">
                desenvolvedor de sistemas
              </span>
            </p>

            {/* Introdução ao portfólio */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Bem-vindo ao meu portfólio. Aqui você encontrará projetos que
              demonstram minhas habilidades e competências como desenvolvedor!
            </p>
          </div>
        </div>

        {/* Bloco da imagem */}
        <div className="flex justify-center items-center gap-6 p-6 md:p-12">
          <img
            src="gatoVoando.png"
            alt="Logo gato voando"
            className="w-1/2 sm:w-1/3 md:w-1/5 object-contain"
          />
          <img
            src="computador.png"
            alt="Logo computador"
            className="w-2/3 sm:w-1/2 md:w-2/5 object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default App;
