import Image from "next/image";

const Rodape = () => {
  return (
    <div>
      <footer className="mt-auto flex flex-col items-center justify-center bg-[#0b1a27] p-4 text-center text-white">
        {/* Contêiner principal */}
        <div className="flex w-full max-w-6xl flex-col items-center px-4">
          {/* Logo e Redes Sociais */}
          <div className="mb-6 flex flex-col items-center md:flex-row md:space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0 my-4 md:my-6 mb-4 md:mb-0">
  <Image
    src="/logo.png"
    width={200}
    height={200}
    alt="Logo"
    className="w-40 md:w-auto"
  />
</div>
          </div>

          {/* Links Adicionais */}
          <div className="mb-4 w-full max-w-xl">
            <div className="prod-link-wrapper-2KJ_Lk">
              <div className="container-sGLK6x prod-links-2W-LIk text-sm flex flex-wrap justify-center gap-4">
                <a href="/termosecondicoes" rel="noopener noreferrer">
                  Termos de Serviço
                </a>
                <a
                  href="/sobrenos"
                  rel="noopener noreferrer"
                >
                  Sobre Nós
                </a>
                <a
                  href="/"
                  rel="noopener noreferrer"
                >
                  Contate-nos
                </a>
                <a href="/poiliticadeprivacidade" rel="noopener noreferrer">
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