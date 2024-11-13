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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/componente/qualquer/carousel";
import Card from "@/app/componente/qualquer/card";
import Card2 from "@/app/componente/qualquer/card2";
import Card4 from "@/app/componente/qualquer/card4";
import Card3 from "@/app/componente/qualquer/card3";
import Card5 from "@/app/componente/qualquer/card5";
import Card6 from "@/app/componente/qualquer/card6";

const Saiba = () => {
  return (
    <>
      <div>
        <div className="m-0 flex h-full w-screen flex-col bg-[#F6F7F8] p-0">
          {/* Rotbar Inicio */}
          <div>
            <div className="sticky flex h-[60px] bg-black">
              <Menubar className="mt-2 w-full border-transparent bg-transparent">
                <MenubarMenu>
                  <Image
                    src="/logo.png"
                    width={150}
                    height={100}
                    alt="imagem do mine"
                  />

                  <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                    Destaques
                  </MenubarTrigger>
                  <MenubarContent>
                    <Link href="/catalogo">
                      <MenubarItem>Catalogo</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link href="/catalogo">
                      <MenubarItem>Jogos Em Destaque</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link href="/catalogo">
                      <MenubarItem>Novidades</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                    Jogos
                  </MenubarTrigger>
                  <MenubarContent>
                    <Link href="/catalogo">
                      <MenubarItem>Catalogo</MenubarItem>
                      <MenubarSeparator />
                    </Link>
                    <MenubarItem>Destaque</MenubarItem>
                    <MenubarSeparator />
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                    Assinatura
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Nuvix Plus</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Pacote Essencial</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[110px] text-xl font-bold text-[#F6F7F8]">
                    <div className="flex">
                      <CircleUser className="me-2 mt-0.5" />
                      <p>Conta</p>
                    </div>
                  </MenubarTrigger>
                  <MenubarContent>
                    <Link href="/login">
                      <MenubarItem>Cadastre-se</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link href="/login">
                      <MenubarItem>Login</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="flex">
                <Search className="mx-2 mt-4 text-white" />
                <input
                  type="text"
                  className="bg-transparent text-xl text-white"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {/* Rotbar Fim */}

          {/* BANNER */}
          <div className="h-full w-full bg-[#F6F7F8]">
            <Image
              src="/banner.saiba.jpg"
              layout="responsive"
              width={1920} // Largura original da imagem (ajuste conforme necessário)
              height={550} // Altura original da imagem (ajuste conforme necessário)
              objectFit="cover"
              alt="Picture of the author"
            />
            {/* DIV TEXTO ABAIXO DO BANNER */}
            <div className="mt-20 flex flex-col items-center justify-center px-4 sm:mt-7">
              <h1 className="text-center text-3xl font-bold text-[#3D4E56] sm:text-5xl">
                Como você vai jogar Hoje?
              </h1>

              {/* DESCRIÇÃO ABAIXO DO */}
              <h2 className="mt-4 max-w-3xl text-center text-lg text-[#2e646d] sm:max-w-5xl sm:text-xl">
                O Cloud Gaming está disponível em PCs, consoles, celulares e
                tablets compatíveis, Smart TVs Samsung selecionadas, com mais
                dispositivos sendo adicionados em breve.
              </h2>

              <div className="mt-6">
                <Link href="/catalogo">
                  <h1 className="flex text-lg text-[#019EC2] underline hover:text-[#2e646d] sm:text-xl">
                    Jogar Agora <ChevronRight />
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          {/* carrosse abaixo do titulo */}
        </div>

        {/* Div com os dois carrosseis lado a lado */}

        <div className="mb-20 mt-10 flex w-full flex-wrap justify-center gap-6 px-4">
          {/* Primeiro carrossel */}

          <div className="flex h-[700px] w-full items-center justify-center bg-gradient-to-b from-[#154B74] to-[#081d2e] p-6 text-white sm:w-[500px] md:w-[600px] lg:w-[500px] xl:w-[500px]">
            <Carousel orientation="vertical">
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <Card2 />
                </CarouselItem>
                <CarouselItem>
                  <Card5 />
                </CarouselItem>
                <CarouselItem>
                  <Card4 />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* Segundo carrossel */}
          <div className="flex h-[700px] w-full items-center justify-center bg-gradient-to-b from-[#154B74] to-[#081d2e] p-6 text-white sm:w-[500px] md:w-[600px] lg:w-[500px] xl:w-[500px]">
            <Carousel orientation="vertical">
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <Card6 />
                </CarouselItem>
                <CarouselItem>
                  <Card />
                </CarouselItem>
                <CarouselItem>
                  <Card3 />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          {/* FIM DO CARROSSEL */}
          <div className="w-screen">
            <h1 className="mt-10 p-2 text-center text-4xl font-bold text-[#3D4E56] sm:text-6xl">
              Por que ser Nuvix Ultimate?
            </h1>
          </div>
          {/* Começo do PQ */}
          <div className="flex w-[1200px] flex-col items-center justify-center gap-8 px-4 sm:flex-row">
            {/* Texto à esquerda */}
            <div className="mt-6 flex w-full flex-col items-center sm:mt-0 sm:w-1/2 sm:items-start sm:text-left">
              <p className="mt-4 max-w-3xl text-lg text-[#2e646d] sm:max-w-5xl sm:text-left sm:text-xl md:text-center">
                Entre no coração da Nuvix com uma comunidade de milhões de
                jogadores prontos e esperando para jogar juntos. Conecte-se e
                jogue com outras pessoas a partir de uma biblioteca
                compartilhada de jogos, estejam eles do outro lado do mundo ou
                sentados ao seu lado.
              </p>
              <div className="mt-3 place-self-center">
                <Link href="/planos">
                  <button className="h-[43px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                    Assine Já
                  </button>
                </Link>
              </div>
            </div>

            {/* Vídeo à direita */}
            <div className="flex w-full justify-center sm:w-1/2">
              <Image
                src="/joguin.jpg"
                width={1000} // Largura original da imagem (ajuste conforme necessário)
                height={500} // Altura original da imagem (ajuste conforme necessário)
                objectFit="cover"
                alt="Picture of the author"
              />
            </div>
          </div>
          {/* Fim do PQ */}

          {/* Negocio preto */}
        </div>
        <div className="flex h-[700px] w-full bg-slate-900">
          <div className="w-[900px] ps-5 pt-[30px]">
            <h1 className="m-7 text-4xl font-bold text-white">SOBRE NÓS</h1>
            <p className="mx-7 my-5 text-left text-2xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              sapiente eaque saepe, reiciendis dignissimos mollitia nobis
              tempore quas inventore quam. Voluptatum libero sequi labore?
              Ratione excepturi ut mollitia nihil. Qui.
            </p>
            <p className="mx-7 my-5 text-left text-2xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              sapiente eaque saepe, reiciendis dignissimos mollitia nobis
              tempore quas inventore quam. Voluptatum libero sequi labore?
              Ratione excepturi ut mollitia nihil. Qui.
            </p>
            <p className="mx-7 my-5 text-left text-2xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              sapiente eaque saepe, reiciendis dignissimos mollitia nobis
              tempore quas inventore quam. Voluptatum libero sequi labore?
              Ratione excepturi ut mollitia nihil. Qui.
            </p>
            <p className="mx-7 my-5 text-left text-2xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              sapiente eaque saepe, reiciendis dignissimos mollitia nobis
              tempore quas inventore quam. Voluptatum libero sequi labore?
              Ratione excepturi ut mollitia nihil. Qui.
            </p>
          </div>
          <div className="mt-20 w-[900px] justify-items-end">
            <Image
              src="/logo.png"
              width={500} // Largura original da imagem (ajuste conforme necessário)
              height={500} // Altura original da imagem (ajuste conforme necessário)
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Saiba;
