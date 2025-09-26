import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuItems: MenuItem[] = [
    { id: "inicio", label: "Início" },
    { id: "projetos", label: "Projetos" }
  ];

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar as seções reais
    const inicioSection = document.getElementById("inicio");
    const projetosSection = document.getElementById("projetos");

    if (inicioSection) observer.observe(inicioSection);
    if (projetosSection) observer.observe(projetosSection);

    return () => {
      if (inicioSection) observer.unobserve(inicioSection);
      if (projetosSection) observer.unobserve(projetosSection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Rola para a seção com offset para considerar a navbar fixa
      const navbarHeight = 64;
      const sectionTop = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          <div className="text-xl font-bold text-[#F0944F]">{"<Victor />"}</div>

          {/* Desktop */}
          <div className="hidden sm:flex gap-6">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium hover:text-[#F0944F] transition-colors ${
                  activeSection === item.id ? "text-[#F0944F]" : "text-gray-700"
                }`}
              >
                // {item.label}
              </button>
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
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium hover:text-[#F0944F] transition-colors text-left ${
                  activeSection === item.id ? "text-[#F0944F]" : "text-gray-700"
                }`}
              >
                // {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;