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
import Card from "./componente/card";
import CardDois from "./componente/carddois";
import CardTres from "./componente/cardtres";
import Cardquatro from "./componente/cardquatro";
import Link from "next/link";
import logo from "@/public/logo.png";

const Home = () => {
  return (
    <>
      <div className="flex-column m-0 h-full w-screen justify-center bg-gradient-to-b from-blue-900 to-blue-950 p-0">
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

        <div>
          <div>
            {/* MENU COMEÇO */}
            <div className="sticky flex">
              <Menubar className="border-transparent bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
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
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
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
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
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
                  <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-sky-100">
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
            <div className="h-[860px]">
              <div className="sticky h-[800px] w-screen justify-items-center">
                <div className="h-[800px] w-screen content-center">
                  <div className="mx-3">
                    <p className="m-4 mx-4 text-3xl text-sky-100">
                      O melhor serviço de jogos na nuvem
                    </p>
                    <h1 className="m-4 text-7xl font-bold text-sky-100">
                      Cloud Game
                    </h1>
                    <p className="m-4 mx-4 w-[500px] text-justify text-xl text-sky-100">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quam, temporibus. Eos doloribus nisi, atque alias
                      blanditiis recusandae delectus magni aut beatae.
                      Doloribus, quo ad nisi soluta error esse beatae placeat!
                    </p>
                    <div className="mx-[140px]">
                      <button className="h-[55px] w-[230px] rounded-full bg-blue-700 text-3xl text-sky-100">
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

        {/* CATALOGO COMEÇO */}
        <div>
          <div className="h-[1000px]">
            <div className="h-[160px] content-center justify-items-center">
              <h1 className="text-6xl font-bold text-sky-100">
                Explorar catalogo
              </h1>
            </div>
          </div>
        </div>
        {/* CATALOGO FINAL */}

        {/* CAROUSEL INICIO */}

        <div className="m-3 text-center text-[45px] font-bold text-sky-100">
          <h1>Maximize sua diversão com a Nuvix</h1>
        </div>
        <div className="justify-items-center">
          <div className="w-[900px] p-6">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <Card></Card>
                </CarouselItem>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <CardDois></CardDois>
                </CarouselItem>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <CardTres></CardTres>
                </CarouselItem>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
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
          <h1 className="mb-4 text-center font-sans text-2xl font-bold text-white">
            Escolha seu Plano
          </h1>

          {/* Planos de Assinatura */}
          <div className="mb-6 flex w-full max-w-[600px] justify-center space-x-7">
            {/* Plano Mensal */}
            <div className="mb-4 flex-1 rounded-lg bg-white p-6 shadow">
              <h1 className="mb-7 text-center text-xl font-bold">Mensal</h1>
              <p className="mb-5 text-center text-lg font-semibold">R$ 00,00</p>
              <p className="mb-2 text-center">Benefícios</p>
              <p className="mb-2 text-center">Benefícios</p>
              <p className="mb-2 text-center">Benefícios</p>
              <Link href="/login">
                <button className="mt-10 w-full rounded bg-blue-800 py-2 text-white hover:bg-blue-900">
                  Assinar
                </button>
              </Link>
            </div>

            {/* Plano Anual */}
            <div className="mb-4 flex-1 rounded-lg bg-white p-6 shadow">
              <h1 className="mb-7 text-center text-xl font-bold">Anual</h1>
              <p className="mb-5 text-center text-lg font-semibold">R$ 00,00</p>
              <p className="mb-2 text-center">Benefícios</p>
              <p className="mb-2 text-center">Benefícios</p>
              <p className="mb-2 text-center">Benefícios</p>
              <Link href="/login">
                <button className="mt-10 w-full rounded bg-blue-800 py-2 text-white hover:bg-blue-900">
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
    </>
  );
};

export default Home;
