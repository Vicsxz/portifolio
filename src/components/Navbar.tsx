import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones de menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo ou nome */}
          <div className="text-xl font-bold text-[#F0944F] tracking-wide">
            {"<Victor />"}
          </div>

          {/* Links (desktop) */}
          <div className="hidden sm:flex items-center gap-6">
            <button className="rounded-sm px-4 py-2 transition hover:text-[#F0944F]">
              <span className="flex items-center font-semibold">
                <span className="mr-2">//</span>
                <span className="tracking-wider">Início</span>
              </span>
            </button>
            <button className="rounded-sm px-4 py-2 transition hover:text-[#F0944F]">
              <span className="flex items-center font-semibold">
                <span className="mr-2">//</span>
                <span className="tracking-wider">Projetos</span>
              </span>
            </button>
          </div>

          {/* Botão hambúrguer (mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu dropdown (mobile) */}
      {isOpen && (
        <div className="sm:hidden bg-gray-50">
          <div className="flex flex-col items-center gap-4 py-4">
            <button className="rounded-sm px-4 py-2 transition hover:text-[#F0944F]">
              <span className="flex items-center font-semibold">
                <span className="mr-2">//</span>
                <span className="tracking-wider">Início</span>
              </span>
            </button>
            <button className="rounded-sm px-4 py-2 transition hover:text-[#F0944F]">
              <span className="flex items-center font-semibold">
                <span className="mr-2">//</span>
                <span className="tracking-wider">Projetos</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
