import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-4">
        
        {/* Marca */}
        <p className="text-xl font-semibold text-white">
          Farma<span className="text-green-500">Gen</span> © {year}
        </p>

        {/* Descrição */}
        <p className="text-sm text-gray-400 text-center">
          Sistema de gerenciamento de categorias e produtos farmacêuticos
          com foco em organização, segurança e qualidade.
        </p>

        {/* Redes sociais */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/andrecesar-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <LinkedinLogoIcon size={28} weight="bold" />
          </a>

          <a
            href="https://www.instagram.com/andrecesarh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <InstagramLogoIcon size={28} weight="bold" />
          </a>

          <a
            href="https://www.github.com/andrecesarhdev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <GithubLogoIcon size={28} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;