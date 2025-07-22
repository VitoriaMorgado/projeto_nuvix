"use client";

import CardMuda from "./Componentes/index/destaqueHome/carromuda";
import Image from "next/image";
import CatalogoHome from "./Componentes/index/catalogohome";
import Link from "next/link";
import SaibamaisHome from "./Componentes/index/saibamaisHome/saibamaishome";

const Home = () => {
  return (
    <>
      <div className="mt-10 bg-gradient-to-b from-[#000000] to-[#1E293B]">
        {/* BANNER PRINCIPAL */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-[70vh] lg:min-h-[80vh]">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 z-0 mt-2">
            <Image
              src="/banner_principal.jpg"
              alt="Nuvix Home Banner"
              fill
              className="sm:h-500 sm:w-500 object-cover object-center"
              priority
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>

          {/* Conteúdo do banner */}
          <div className="container relative z-10 mx-auto mb-2 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold text-white sm:text-4xl md:text-6xl lg:mb-6 lg:text-7xl xl:text-8xl">
                <span className="mt-10 bg-gradient-to-r from-[#F6F7F8] to-[#019EC2] bg-clip-text text-transparent md:mt-20">
                  Nuvix
                </span>
              </h1>

              <p className="mb-6 text-lg font-light text-[#F6F7F8] sm:text-base lg:mb-8 lg:text-3xl">
                O melhor lugar para jogar seus jogos favoritos
              </p>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#F6F7F8]/90 sm:text-xl lg:mb-10 lg:text-xl">
                Experimente uma nova era de jogos online com a Nuvix. Junte-se a
                nós e descubra um mundo de diversão e aventura, onde você pode
                jogar seus títulos favoritos com amigos e familiares, tudo em um
                só lugar.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/jogo">
                  <button className="min-w-[200px] transform rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-8 py-4 text-lg font-bold text-[#F6F7F8] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#198097] lg:px-10 lg:py-5 lg:text-2xl">
                    Jogue agora
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
              <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50"></div>
            </div>
          </div>
        </section>

        {/* CATALOGO COMEÇO */}
        <CatalogoHome />
        {/* CATALOGO FIM */}

        {/* JOGO EM DESTAQUE */}
        <div className="bg-black/30 py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
              <span className="text-[#019EC2]">Destaque</span> da Nuvix
            </h2>
            <CardMuda />
          </div>
        </div>

        {/* CAROUSEL INICIO */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
              Maximize sua <span className="text-[#019EC2]">diversão</span> com
              a Nuvix
            </h2>
            {/* CARROSSEL COMPONENT */}
            <SaibamaisHome />
          </div>
        </div>
        {/* CAROUSEL FIM */}
      </div>
    </>
  );
};

export default Home;
