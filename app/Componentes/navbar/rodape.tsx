"use client";

import Image from "next/image";

const Rodape = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1a27] to-[#081520] text-white">
      {/* Linha decorativa superior */}
      <div className="h-1 w-full bg-gradient-to-r from-black via-blue-700 to-cyan-800"></div>

      {/* Contêiner principal */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Coluna 1: Logo e descrição */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 transition-transform hover:scale-105">
              <Image
                src="/logo_nuvix.png"
                width={180}
                height={60}
                alt="Logo"
                className="w-40 md:w-48"
                priority
              />
            </div>
            <p className="mt-2 max-w-md text-center text-sm text-gray-400 md:text-left">
              Sua plataforma de jogos online com os melhores títulos e
              experiências incríveis para todos os gamers.
            </p>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-bold text-blue-400">
              Links Rápidos
            </h3>
            <ul className="flex flex-col space-y-2 text-center md:text-left">
              <li>
                <a
                  href="/catalogo"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Catálogo de Jogos
                </a>
              </li>
              <li>
                <a
                  href="/novidades"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Jogos em Destaque
                </a>
              </li>
              <li>
                <a
                  href="/saiba_mais"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Saiba Mais
                </a>
              </li>
              <li>
                <a
                  href="/suporte"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes sociais */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-bold text-blue-400">Siga-nos</h3>
            <div className="flex space-x-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/projeto.nuvix/"
                className="group rounded-full bg-gray-800 p-2 transition-transform hover:scale-110 hover:bg-purple-600"
              >
                <svg
                  className="h-5 w-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            
            {/* Email */}
                <a
                  href="mailto:projetonuvix@gmail.com?subject=Olá&body=Olá"
                  className="group rounded-full bg-gray-800 p-2 transition-transform hover:scale-110 hover:bg-red-600"
                  aria-label="Email"
                >
                  <svg
                  className="h-5 w-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  >
                  <path
                    fillRule="evenodd"
                    d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.72-.28a.75.75 0 0 0-.72.78v.08l8.25 5.5 8.25-5.5v-.08a.75.75 0 0 0-.72-.78h-15zm16.03 2.56-7.28 4.85a.75.75 0 0 1-.82 0l-7.28-4.85V17.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V9.03z"
                    clipRule="evenodd"
                  />
                  </svg>
                </a>
            </div>
          </div>
        </div>

        {/* Linha de separação */}
        <div className="my-8 h-px bg-gray-700"></div>

        {/* Links legais e copyright */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/termosecondicoes"
              className="transition-colors hover:text-blue-400"
            >
              Termos de Serviço
            </a>
            <a
              href="/sobrenos"
              className="transition-colors hover:text-blue-400"
            >
              Sobre Nós
            </a>
            <a
              href="/suporte"
              className="transition-colors hover:text-blue-400"
            >
              Contate-nos
            </a>
            <a
              href="/poiliticadeprivacidade"
              className="transition-colors hover:text-blue-400"
            >
              Política de Privacidade
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
