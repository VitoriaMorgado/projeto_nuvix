"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Rodape from "@/components/ui/rodape";
import Carsaiba from "./car_saiba";
import Carsaiba2 from "./car_saiba2";
import NavBarp from "../comp/navbar/navbar";

const Saiba = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-black">
        <div>
          {/* Navbar Inicio */}
          <NavBarp />
          {/* Navbar Fim */}

          {/* BANNER */}
          <div className="relative h-[550px] w-full overflow-hidden">
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            {/* DIV TEXTO ABAIXO DO BANNER */}
            <div className="relative z-20 flex h-full w-screen items-center">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/banner_saiBamais.jpg"
                  alt="banner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="container mx-auto px-6">
                <div className="max-w-2xl">
                  <h1 className="mb-4 bg-gradient-to-r from-[#F6F7F8] to-[#019EC2] bg-clip-text text-4xl font-bold text-transparent text-white sm:text-5xl md:text-6xl">
                    Vai jogar? Então vai de Nuvix!
                  </h1>
                  <p className="mb-6 text-xl font-light text-[#F6F7F8]">
                    Apenas um clique e você consegue os melhores jogos com um
                    preço justo.
                  </p>
                  <Link href="/catalogo">
                    <div className="flex items-center text-lg text-[#019EC2] transition-colors hover:text-[#198097]">
                      <span className="underline">Ver Mais</span>
                      <ChevronRight className="ml-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Div com os dois carrosseis lado a lado */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          <div className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
              Os melhores, apenas na{" "}
              <span className="text-[#019EC2]">Nuvix</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Primeiro carrossel */}
              <div className="flex h-[700px] w-full items-center justify-center rounded-lg border border-[#019EC2]/20 bg-black/30 p-6 text-white shadow-lg sm:w-[500px] md:w-[600px] lg:w-[500px] xl:w-[500px]">
                <Link href="/catalogo">
                  <Carsaiba></Carsaiba>
                </Link>
              </div>

              {/* Segundo carrossel */}
              <div className="flex h-[700px] w-full items-center justify-center rounded-lg border border-[#019EC2]/20 bg-black/30 p-6 text-white shadow-lg sm:w-[500px] md:w-[600px] lg:w-[500px] xl:w-[500px]">
                <Link href="/catalogo">
                  <Carsaiba2></Carsaiba2>
                </Link>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link href="/catalogo">
                <div className="inline-flex items-center text-lg text-[#019EC2] transition-colors hover:text-[#198097]">
                  <span className="underline">Ver Catálogo</span>
                  <ChevronRight className="ml-1" />
                </div>
              </Link>
            </div>

            {/* Por que ser Nuvix Ultimate */}
            <div className="py-20">
              <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
                Por que comprar na <span className="text-[#019EC2]">Nuvix</span>
                ?
              </h2>

              <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 sm:flex-row">
                {/* Texto à esquerda */}
                <div className="flex w-full flex-col sm:w-1/2">
                  <p className="mb-8 text-lg leading-relaxed text-[#F6F7F8]/90">
                    Na Nuvix, você encontra chaves de jogos originais com
                    entrega rápida, segura e com os melhores preços do mercado.
                    Somos apaixonados por games e trabalhamos para que você
                    tenha acesso fácil, legal e confiável aos seus títulos
                    favoritos seja no PC, console ou outras plataformas.
                  </p>
                  <div className="mt-2">
                    <Link href="/login">
                      <button className="h-[43px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097]">
                        Comece agora
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Imagem à direita */}
                <div className="w-full transform transition-all hover:scale-105 sm:w-1/2">
                  <div className="overflow-hidden rounded-lg border border-[#019EC2]/20 shadow-lg">
                    <Image
                      src="/saiba_mais_assine.jpg"
                      width={1000}
                      height={500}
                      objectFit="cover"
                      alt="Jogo em destaque"
                      className="transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Sobre Nós */}
        <div className="bg-black/30 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full pr-0 lg:w-1/2 lg:pr-10">
                <h2 className="mb-8 text-4xl font-bold text-white">
                  <span className="text-[#019EC2]">SOBRE</span> NÓS?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Bem-vindo à Nuvix, o seu portal de chaves digitais para jogos!
                  Nossa missão é facilitar o acesso aos seus títulos favoritos,
                  oferecendo entrega instantânea, segurança e praticidade em
                  cada compra..
                </p>

                <h2 className="mb-8 mt-10 text-4xl font-bold text-white">
                  <span className="text-[#019EC2]">QUEM</span> SOMOS?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Na Nuvix, jogar é para todos. Criada por estudantes
                  apaixonados por tecnologia, nossa plataforma nasceu com o
                  objetivo de tornar os jogos mais acessíveis e sem
                  complicações.
                </p>

                <h2 className="mb-8 mt-10 text-4xl font-bold text-white">
                  <span className="text-[#019EC2]">O QUE</span> OFERECEMOS
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  <span className="font-semibold">
                    Biblioteca Diversificada:
                  </span>{" "}
                  Com uma coleção que abrange desde os clássicos atemporais até
                  os lançamentos mais recentes, temos algo para todos os gostos.
                  <br />
                  <br />
                  <span className="font-semibold">
                    Compatibilidade Multiplataforma:
                  </span>{" "}
                  Jogue em Aqui, você encontra chaves digitais originais para os
                  jogos que ama. Na Nuvix, trabalhamos com parceiros oficiais
                  para oferecer licenças legítimas, seguras e com entrega
                  imediata direto no seu e-mail, para qualquer plataforma que
                  você escolher.
                </p>

                <h2 className="mb-8 mt-10 text-4xl font-bold text-white">
                  <span className="text-[#019EC2]">JUNTE-SE</span> A NÓS
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Seja você um jogador casual ou um hardcore gamer, a Nuvix tem
                  algo especial para você. Cadastre-se hoje e descubra um novo
                  mundo de possibilidades no universo dos jogos com preços que
                  cabem no seu bolso
                </p>
              </div>

              <div className="mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
                <div className="relative transform transition-all hover:scale-105">
                  <div className="absolute inset-0 rounded-full bg-[#019EC2]/10 opacity-40 blur-3xl"></div>
                  <Image
                    src="/logo_nuvix.png"
                    width={500}
                    height={500}
                    alt="Logo Nuvix"
                    className="relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Rodape></Rodape>
        </div>
      </div>
    </>
  );
};

export default Saiba;
