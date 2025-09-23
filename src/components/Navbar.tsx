import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Início", "Projetos"];

  return (
    <nav className="sticky top-0 z-50 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          <div className="text-xl font-bold text-[#F0944F]">{"<Victor />"}</div>

          {/* Desktop */}
          <div className="hidden sm:flex gap-6">
            {menuItems.map(item => (
              <a key={item} href="#" className="font-medium hover:text-[#F0944F]">
                // {item}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-4">
            {menuItems.map(item => (
              <a key={item} href="#" className="font-medium hover:text-[#F0944F]">
                // {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;