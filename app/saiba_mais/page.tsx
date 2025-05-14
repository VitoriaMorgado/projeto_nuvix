"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  //MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronRight, CircleUser, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Rodape from "@/components/ui/rodape";
import Carsaiba from "./car_saiba";
import Carsaiba2 from "./car_saiba2";


const Saiba = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-black">
        <div>
          {/* Navbar Inicio */}
          <div>
            <div className="sticky flex h-[60px] bg-black">
              <Menubar className="mt-2 w-full border-transparent bg-transparent">
                <MenubarMenu>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      width={150}
                      height={100}
                      alt="Logo Nuvix"
                      className="hover:opacity-90 transition-opacity"
                    />
                  </Link>

                  <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    Destaques
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Catalogo</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Jogos Em Destaque</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Novidades</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    Jogos
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/catalogo">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Catalogo</MenubarItem>
                      <MenubarSeparator className="bg-[#019EC2]/30" />
                    </Link>
                    <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Destaque</MenubarItem>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    Assinatura
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/planos">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Nuvix Plus</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/planos">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Pacote Essencial</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[110px] text-xl font-bold text-[#F6F7F8] hover:text-[#019EC2] transition-colors">
                    <div className="flex">
                      <CircleUser className="me-2 mt-0.5 text-[#019EC2]" />
                      <p>Conta</p>
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className="bg-[#02030a] border border-[#019EC2]/20">
                    <Link href="/cadastro2">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Cadastre-se</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                    <Link href="/login2">
                      <MenubarItem className="hover:bg-[#0E304A] text-[#F6F7F8]">Login</MenubarItem>
                    </Link>
                    <MenubarSeparator className="bg-[#019EC2]/30" />
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="flex bg-[#0E304A]/40 rounded-l-full px-3 mr-2 my-2">
                <Search className="mx-2 mt-4 text-[#019EC2]" />
                <input
                  type="text"
                  className="bg-transparent text-xl text-[#F6F7F8] placeholder-[#F6F7F8]/70 focus:outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {/* Navbar Fim */}

          {/* BANNER */}
          <div className="relative h-[550px] w-full overflow-hidden">
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            
            
            {/* DIV TEXTO ABAIXO DO BANNER */}
            <div className="relative z-20 flex w-screen h-full items-center">
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
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
                    Vai jogar? Então vai de Nuvix!
                  </h1>
                  <p className="mb-6 text-xl font-light text-[#F6F7F8]">
                    Apenas um clique e você consegue os melhores jogos com um preço justo.
                  </p>
                  <Link href="/catalogo">
                    <div className="flex items-center text-lg text-[#019EC2] hover:text-[#198097] transition-colors">
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
          <div className="container mx-auto py-20 px-6">
            <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
                Os melhores, apenas na <span className="text-[#019EC2]">Nuvix</span>
              </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Primeiro carrossel */}
              <div className="flex h-[700px] w-full sm:w-[500px] md:w-[600px] lg:w-[500px] xl:w-[500px] items-center justify-center bg-black/30 p-6 text-white rounded-lg shadow-lg border border-[#019EC2]/20">
                <Link href="/catalogo">
                <Carsaiba></Carsaiba>
                </Link>
              </div>

              {/* Segundo carrossel */}
              <div className="flex h-[700px] w-full sm:w-[500px] md:w-[600px] lg:w-[500px] xl:w-[500px] items-center justify-center bg-black/30 p-6 text-white rounded-lg shadow-lg border border-[#019EC2]/20">
               <Link href="/catalogo">
                <Carsaiba2></Carsaiba2>
                </Link>
              </div>
            </div>
            <div className="text-center mt-10">
            <Link href="/catalogo">
            <div className="inline-flex items-center text-lg text-[#019EC2] hover:text-[#198097] transition-colors">
            <span className="underline">Ver Catálogo</span> 
            <ChevronRight className="ml-1" />
          </div>
          </Link>
            </div>

            

            {/* Por que ser Nuvix Ultimate */}
            <div className="py-20">
              <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
                Por que comprar na <span className="text-[#019EC2]">Nuvix</span>?
              </h2>

              <div className="flex flex-col items-center justify-center gap-10 sm:flex-row max-w-6xl mx-auto">
                {/* Texto à esquerda */}
                <div className="flex w-full flex-col sm:w-1/2">
                  <p className="text-lg leading-relaxed text-[#F6F7F8]/90 mb-8">
                   Na Nuvix, você encontra chaves de jogos originais com entrega rápida, segura e com os melhores preços do mercado. Somos apaixonados por games e trabalhamos para que você tenha acesso fácil, legal e confiável aos seus títulos favoritos seja no PC, console ou outras plataformas.
                  </p>
                  <div className="mt-2">
                    <Link href="/login">
                      <button className="h-[43px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                        Comece agora
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Imagem à direita */}
                <div className="w-full sm:w-1/2 transform transition-all hover:scale-105">
                  <div className="overflow-hidden rounded-lg shadow-lg border border-[#019EC2]/20">
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
              <div className="w-full lg:w-1/2 pr-0 lg:pr-10">
                <h2 className="text-4xl font-bold text-white mb-8">
                  <span className="text-[#019EC2]">SOBRE</span> NÓS?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Bem-vindo à Nuvix, o seu portal de chaves digitais para jogos! Nossa missão é facilitar o acesso aos seus títulos favoritos, oferecendo entrega instantânea, segurança e praticidade em cada compra..
                </p>
                
                <h2 className="text-4xl font-bold text-white mt-10 mb-8">
                  <span className="text-[#019EC2]">QUEM</span> SOMOS?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Na Nuvix, jogar é para todos.
                Criada por estudantes apaixonados por tecnologia, nossa plataforma nasceu com o objetivo de tornar os jogos mais acessíveis e sem complicações.
                </p>
                
                <h2 className="text-4xl font-bold text-white mt-10 mb-8">
                  <span className="text-[#019EC2]">O QUE</span> OFERECEMOS
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  <span className="font-semibold">Biblioteca Diversificada:</span> Com uma coleção que abrange desde os
                  clássicos atemporais até os lançamentos mais recentes, temos algo
                  para todos os gostos.<br/><br/>
                  <span className="font-semibold">Compatibilidade Multiplataforma:</span> Jogue em
                  Aqui, você encontra chaves digitais originais para os jogos que ama.
                Na Nuvix, trabalhamos com parceiros oficiais para oferecer licenças legítimas, seguras e com entrega imediata direto no seu e-mail, para qualquer plataforma que você escolher.
                </p>
                
                <h2 className="text-4xl font-bold text-white mt-10 mb-8">
                  <span className="text-[#019EC2]">JUNTE-SE</span> A NÓS
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Seja você um jogador casual ou um hardcore gamer, a Nuvix tem algo
                  especial para você. Cadastre-se hoje e descubra um novo mundo de
                  possibilidades no universo dos jogos com preços que cabem no seu bolso
                </p>
                
              </div>
              
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
                <div className="relative transform transition-all hover:scale-105">
                  <div className="absolute inset-0 bg-[#019EC2]/10 rounded-full blur-3xl opacity-40"></div>
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