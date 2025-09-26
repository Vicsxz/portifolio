import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Seção Início */}
        <div
          id="inicio"
          className="min-h-fit pb-1 md:grid md:min-h-screen md:grid-cols-2"
        >
          {/* Text Content */}
          <section className="flex flex-col justify-center p-6 md:p-12">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
                OI, MEU NOME É VICTOR!
              </h1>
              <p className="mt-3 text-xl md:mt-4 md:text-4xl">
                Eu sou um{" "}
                <span className="font-semibold text-[#F0944F]">
                  desenvolvedor de sistemas
                </span>
              </p>
              <p className="mt-4 text-gray-700 md:mt-6 md:text-xl">
                Bem-vindo ao meu portfólio. Aqui você encontrará projetos que
                demonstram minhas habilidades e competências como desenvolvedor!
              </p>

              {/* Mobile Image */}
              <div className="mt-8 flex justify-center md:hidden">
                <img
                  src="imagem teste.jpg"
                  alt="Victor - Desenvolvedor de Sistemas"
                  className="h-30 w-30 rounded-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Desktop Image */}
          <section
            className="hidden bg-cover bg-center md:block"
            style={{ backgroundImage: "url('imagem teste.jpg')" }}
          />
        </div>

        {/* Seção Projetos */}
        <div
          id="projetos"
          className="flex min-h-screen items-center justify-center p-6 md:p-12"
        >
          <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3"
              title="Projeto 1"
              description="Descrição do primeiro projeto"
            />
            <Card
              imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3"
              title="Projeto 2"
              description="Descrição do segundo projeto"
            />
            <Card
              imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3"
              title="Projeto 3"
              description="Descrição do terceiro projeto"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
