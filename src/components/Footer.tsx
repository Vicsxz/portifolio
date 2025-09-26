import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Texto "Contate-me" */}
          <p className="text-lg font-medium text-gray-700">Contate-me</p>

          {/* Ícones do LinkedIn e GitHub */}
          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-[#F0944F]"
            >
              <Linkedin size={28} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-[#F0944F]"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
