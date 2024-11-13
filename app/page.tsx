"use client";

import Image from "next/image";
import banner from "@/public/banner8.jpg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser, Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardDois from "./componente/carddois";
import CardTres from "./componente/cardtres";
import Cardquatro from "./componente/cardquatro";
import Link from "next/link";
import logo from "@/public/logo.png";
import Red from "@/public/red.png";
import Carduni from "./componente/carduni";
import Card02 from "./componente/cards/card02";
import Card01 from "./componente/cards/card01";
import Card03 from "./componente/cards/card03";
import Card04 from "./componente/cards/card04";
import Card05 from "./componente/cards/card05";
import Card06 from "./componente/cards/card06";
import Card07 from "./componente/cards/card07";
import Rodape from "@/components/ui/rodape";

const Home = () => {
  return (
    <>
      <div className="m-0 h-full w-full flex-col justify-center p-0">
        {/* MENU COMEÇO */}
        <div>
          <div className="sticky flex h-[60px] bg-black">
            <Menubar className="mt-2 w-full border-transparent bg-transparent">
              <MenubarMenu>
                <Image
                  src={logo}
                  width={150}
                  height={100}
                  alt="imagem do mine"
                />
                <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Destaques
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Catalogo</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Jogos Em Destaque</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Novidades</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Jogos
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Catalogo</MenubarItem>
                  <MenubarSeparator />
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
                <MenubarTrigger className="h-[30px] w-[150px] justify-center text-xl font-bold text-[#F6F7F8]">
                  Fale conosco
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Sobre Nós</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Nos Contate</MenubarItem>
                  <MenubarSeparator />
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
                  <MenubarItem>Cadastre-se</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Login</MenubarItem>
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
        {/* MENU FIM */}

        {/* BANNER COMEÇO */}

        {/* FUNDO BANNER COMEÇO */}

        <div className="absolute w-screen">
          <Image
            src={banner}
            layout="responsive"
            objectFit="cover"
            alt="banner"
          />
        </div>

        {/* FUNDO BANNER FIM */}

        <div className="flex flex-col">
          <div>
            {/* ESCRITAS DO BANNER COMEÇO */}
            <div className="h-auto">
              <div className="sticky h-[800px] w-screen justify-items-center">
                <div className="h-[800px] w-screen content-center">
                  <div className="mx-3">
                    <h1 className="m-4 ms-[150px] text-7xl font-bold text-[#F6F7F8]">
                      Nuvix
                    </h1>
                    <p className="m-4 ms-12 text-2xl text-[#F6F7F8]">
                      O melhor serviço de jogos na nuvem
                    </p>
                    <p className="m-4 mx-4 w-[500px] text-justify text-xl text-[#F6F7F8]">
                      Experimente a revolução dos jogos na nuvem: jogue os
                      títulos mais recentes e de alta qualidade sem precisar de
                      um PC poderoso ou console. Com a tecnologia de nuvem, você
                      acessa seus jogos favoritos de qualquer dispositivo, a
                      qualquer hora e em qualquer lugar, sem longas esperas para
                      downloads ou atualizações. A diversão está ao alcance de
                      um clique!
                    </p>
                    <div className="mx-[140px]">
                      <Link href="/jogo">
                        <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                          Jogue agora
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ESCRITAS DO BANNER FINAL */}
          </div>
        </div>
        {/* BANNER FINAL */}

        {/* FUNDO */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          {/* FUNDO */}

          {/* CATALOGO COMEÇO */}
          <div>
            <div className="mt-[70px] h-[650px]">
              <div className="mt-8 h-[200px] content-center justify-items-center">
                <h1 className="text-6xl font-bold text-[#F6F7F8]">
                  Explorar catalogo
                </h1>
              </div>
              <div className="justify-items-center">
                <div className="w-[1800px]">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card01></Card01>
                      </CarouselItem>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card02></Card02>
                      </CarouselItem>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card03></Card03>
                      </CarouselItem>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card04></Card04>
                      </CarouselItem>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card05></Card05>
                      </CarouselItem>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card06></Card06>
                      </CarouselItem>
                      <CarouselItem className="mx-3 md:basis-1/6">
                        <Card07></Card07>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="my-5 h-[500px]">
              <div className="flex">
                <div className="mx-[70px] h-[450px] w-[1200px] content-center bg-[#000101]">
                  <div className="flex">
                    <Image
                      className="mx-[35px]"
                      src={Red}
                      width={670}
                      height={500}
                      alt="imagem do red"
                    />
                    <div>
                      <h1 className="text-4xl font-bold text-[#F6F7F8]">
                        Red Dead Redemption 2
                      </h1>
                      <p className="my-3 w-[400px] text-left text-xl text-[#F6F7F8]">
                        Red Dead Redemption 2, a épica aventura de mundo aberto
                        da Rockstar Games aclamada pela crítica e o jogo mais
                        bem avaliado desta geração de consoles, agora chega
                        aprimorado para PC com conteúdos inéditos no Modo
                        História, melhorias visuais e muito mais.
                      </p>
                      <button className="mx-[100px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                        Jogue agora
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-[450px] w-[500px] justify-center p-8">
                  <button className="mx-[100px] my-[30px] mt-[250px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                    Semelhantes
                  </button>
                  <button className="mx-[100px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                    Catalogo
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* CATALOGO FINAL */}

          {/* CAROUSEL INICIO */}

          <div className="m-3 text-center text-[45px] font-bold text-[#F6F7F8]">
            <h1>Maximize sua diversão com a Nuvix</h1>
          </div>
          <div className="mt-14 justify-items-center">
            <div className="w-[1300px] justify-center p-6">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
              >
                <CarouselContent className="gap-6">
                  <CarouselItem className="lg:basis-3/6">
                    <Carduni></Carduni>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-3/6">
                    <CardDois></CardDois>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-3/6">
                    <CardTres></CardTres>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-3/6">
                    <Cardquatro></Cardquatro>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* CAROUSEL FIM */}

          {/* PAGAMENTO INICIO */}

          <div className="h-[900px] content-center justify-items-center">
            <Image
              src={logo}
              alt="Logo"
              width={300}
              height={300}
              className="mb-1"
            />

            {/* TEXTO EMBAIXO DO LOGO */}
            <h1 className="mb-4 text-center font-sans text-2xl font-bold text-[#F6F7F8]">
              Escolha seu Plano
            </h1>

            {/* Planos de Assinatura */}
            <div className="mb-6 flex w-full max-w-[600px] justify-center space-x-7">
              {/* Plano Mensal */}
              <div className="mb-4 flex-1 rounded-lg bg-white p-6 shadow">
                <h1 className="text-center text-xl font-bold">
                  Plano Essencial
                </h1>
                <p className="mb-4 text-center font-light">Pagamento Mensal</p>
                <p className="mb-5 text-center text-lg font-semibold">
                  R$ 50,00
                </p>
                <p className="mb-2 text-center">Preferencia Na Fila</p>
                <p className="mb-2 text-center">Benefícios</p>
                <p className="mb-2 text-center">Benefícios</p>
                <Link href="/login">
                  <button className="mt-10 w-full rounded bg-[#019EC2] py-2 text-white hover:bg-[#198097]">
                    Assinar
                  </button>
                </Link>
              </div>

              {/* Plano Anual */}
              <div className="mb-4 flex-1 rounded-lg bg-white p-6 shadow">
                <h1 className="text-center text-xl font-bold">Nuvix Plus</h1>
                <p className="mb-4 text-center font-light">Pagamento Semanal</p>
                <p className="mb-5 text-center text-lg font-semibold">
                  R$ 500,00
                </p>
                <p className="mb-2 text-center">Preferencia Na Fila</p>
                <p className="mb-2 text-center">Benefícios</p>
                <p className="mb-2 text-center">Benefícios</p>
                <Link href="/login">
                  <button className="mt-10 w-full rounded bg-[#019EC2] py-2 text-white hover:bg-[#198097]">
                    Assinar
                  </button>
                </Link>
              </div>
            </div>
            <footer className="w-full py-4 text-white">
              <div className="container mx-auto text-center">
                <p>
                  &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
                  reservados.
                </p>
                <div className="mt-2">
                  <Link
                    href="/politica"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  <Link
                    href="/Termos"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Termos de Uso
                  </Link>
                </div>
              </div>
            </footer>
          </div>
          {/* PAGAMENTO FIM */}
          <div className="mt-9 w-full p-0">
            <Rodape />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
