import logo from "@/public/logo.png";
import Image from "next/image";

const Rodape = () => {
  return (
    <div>
      <footer className="h-flex mt-auto flex flex-col items-center justify-center bg-[#0b1a27] p-2 text-center text-white">
        {/* Contêiner principal */}
        <div className="flex w-full max-w-6xl flex-col items-center">
          {/* Logo e Redes Sociais no mesmo nível (lado a lado) */}
          <div className="mb-6 flex items-center space-x-8">
            {" "}
            {/* Mudado para flex-row com espaçamento */}
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logo}
                width={200}
                height={200}
                alt="Logo"
                className=""
              />
            </div>
          </div>

          {/* Links Adicionais */}
          <div className="mb-4 max-w-xl">
            <div className="prod-link-wrapper-2KJ_Lk">
              <div className="container-sGLK6x prod-links-2W-LIk text-sm">
                <a href="/Termos" rel="noopener noreferrer" className="mr-4">
                  Termos de Serviço
                </a>
                <a
                  href="/" //COLOCAR O NOME DA PASTA DO SOBRE NÓS
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  Sobre Nós
                </a>
                <a
                  href="/" //COLOCAR O NOME DA PASTA DO CONTATE-NOS
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  Contate-nos
                </a>
                <a href="/politica" rel="noopener noreferrer">
                  Politica de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rodape;
