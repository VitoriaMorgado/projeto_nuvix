"use client";

import Image from "next/image";
import banner from "@/public/banner8.jpg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Search } from "lucide-react";
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

const Home = () => {
  return (
    <>
      <div className="m-0 h-full w-full flex-col justify-center p-0">
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
            {/* MENU COMEÇO */}
            <div className="sticky flex">
              <Menubar className="w-full border-transparent bg-transparent">
                <MenubarMenu>
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="imagem do mine"
                  />
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8]">
                    File
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="flex">
                <Search className="m-2 text-white" />
                <input
                  type="text"
                  className="border-transparent bg-transparent text-white"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* MENU FIM */}

            {/* ESCRITAS DO BANNER COMEÇO */}
            <div className="h-auto">
              <div className="sticky h-[800px] w-screen justify-items-center">
                <div className="h-[800px] w-screen content-center">
                  <div className="mx-3">
                    <p className="m-4 mx-4 text-3xl text-[#F6F7F8]">
                      O melhor serviço de jogos na nuvem
                    </p>
                    <h1 className="m-4 text-7xl font-bold text-[#F6F7F8]">
                      Cloud Game
                    </h1>
                    <p className="m-4 mx-4 w-[500px] text-justify text-xl text-[#F6F7F8]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quam, temporibus. Eos doloribus nisi, atque alias
                      blanditiis recusandae delectus magni aut beatae.
                      Doloribus, quo ad nisi soluta error esse beatae placeat!
                    </p>
                    <div className="mx-[140px]">
                      <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8]">
                        Jogue agora
                      </button>
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
            <div className="h-[650px]">
              <div className="mt-8 h-[200px] content-center justify-items-center">
                <h1 className="text-6xl font-bold text-[#F6F7F8]">
                  Explorar catalogo
                </h1>
              </div>
              <div className="justify-items-center">
                <div className="w-[1800px]">
                  <Carousel>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quo tempore debitis labore et, iure veritatis vel
                        quasi officiis eos. Ullam nam laborum reiciendis tenetur
                        itaque exercitationem, architecto impedit commodi
                        facilis!
                      </p>
                      <button className="mx-[100px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8]">
                        Jogue agora
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-[450px] w-[500px] justify-center p-8">
                  <button className="mx-[100px] my-[30px] mt-[250px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8]">
                    Semelhantes
                  </button>
                  <button className="mx-[100px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8]">
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
          <div className="justify-items-center">
            <div className="w-[1700px] justify-center p-6">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <Carduni></Carduni>
                  </CarouselItem>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <CardDois></CardDois>
                  </CarouselItem>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <CardTres></CardTres>
                  </CarouselItem>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <Cardquatro></Cardquatro>
                  </CarouselItem>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <Cardquatro></Cardquatro>
                  </CarouselItem>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <Cardquatro></Cardquatro>
                  </CarouselItem>
                  <CarouselItem className="md:basis-3/6 lg:basis-3/6">
                    <CardDois></CardDois>
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
                <h1 className="mb-7 text-center text-xl font-bold">Mensal</h1>
                <p className="mb-5 text-center text-lg font-semibold">
                  R$ 00,00
                </p>
                <p className="mb-2 text-center">Benefícios</p>
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
                <h1 className="mb-7 text-center text-xl font-bold">Anual</h1>
                <p className="mb-5 text-center text-lg font-semibold">
                  R$ 00,00
                </p>
                <p className="mb-2 text-center">Benefícios</p>
                <p className="mb-2 text-center">Benefícios</p>
                <p className="mb-2 text-center">Benefícios</p>
                <Link href="/login">
                  <button className="mt-10 w-full rounded bg-[#019EC2] py-2 text-white hover:bg-[#198097]">
                    Assinar
                  </button>
                </Link>
              </div>
            </div>

            {/* Rodapé (política de privacidade etc) */}
            <footer className="w-full py-4 text-white">
              <div className="container mx-auto text-center">
                <p>
                  &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
                  reservados.
                </p>
                <div className="mt-2">
                  <Link
                    href="/privacyterm"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  <Link
                    href="/terms"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Termos de Uso
                  </Link>
                </div>
              </div>
            </footer>
          </div>
          {/* PAGAMENTO FIM */}
        </div>
      </div>
    </>
  );
};

export default Home;
