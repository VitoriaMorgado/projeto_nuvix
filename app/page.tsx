"use client";

//========IMPORTE DE COMPONENTES========//
import Image from "next/image";
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
import Carduni from "./componente/carduni";
import Card02 from "./componente/cards/card02";
import Card01 from "./componente/cards/card01";
import Card03 from "./componente/cards/card03";
import Card04 from "./componente/cards/card04";
import Card05 from "./componente/cards/card05";
import Card06 from "./componente/cards/card06";
import Card07 from "./componente/cards/card07";
import Rodape from "@/components/ui/rodape";
import CardMuda from "./comp/carromuda";

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    //========INDICE MENU========//
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* //========NAVBAR========// */}
      <div className="sticky top-0 z-50 w-full">
        <div className="flex h-[60px] items-center bg-black">
          <Menubar className="w-full border-transparent bg-transparent">
            <MenubarMenu>
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={150}
                  height={100}
                  alt="imagem do mine"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </Link>
              <MenubarTrigger className="hidden h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] md:flex">
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
              <MenubarTrigger className="hidden h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8] md:flex">
                Jogos
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/catalogo">
                  <MenubarItem>Catalogo</MenubarItem>
                  <MenubarSeparator />
                </Link>
                <Link href="/catalogo">
                  <MenubarItem>Destaque</MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                Assinatura
              </MenubarTrigger>
              <MenubarContent>
                <button onClick={() => scrollToSection("plano")}>
                  <MenubarItem>Nuvix Plus</MenubarItem>
                </button>
                <MenubarSeparator />
                <button onClick={() => scrollToSection("plano")}>
                  <MenubarItem>Plano Essencial</MenubarItem>
                </button>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[150px] justify-center text-xl font-bold text-[#F6F7F8]">
                Fale conosco
              </MenubarTrigger>
              <MenubarContent>
                <Link href="cadastro">
                  <MenubarItem>Sobre Nós</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="login2">
                  <MenubarItem>Nos Contate</MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[110px] text-xl font-bold text-[#F6F7F8]">
                <div className="flex items-center">
                  <CircleUser className="mr-2" />
                  <p>Conta</p>
                </div>
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/cadastro2">
                  <MenubarItem>Cadastre-se</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/login2">
                  <MenubarItem>Login</MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="mr-4 flex items-center">
            <Search className="mr-2 text-white" />
            <input
              type="text"
              className="w-24 bg-transparent text-white md:w-auto"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      {/* MENU FIM */}

      <main className="flex-grow">
        {/* BANNER COMEÇO */}

        {/* FUNDO BANNER COMEÇO */}

        <div className="absolute w-screen">
          <Image
            src="/bannerp.jpg"
            width={3000}
            height={500}
            objectFit="cover"
            alt="banner"
          />
        </div>

        {/* FUNDO BANNER FIM */}

        <div className="flex h-[850px] flex-col">
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
                      xperimente a revolução dos jogos na nuvem: jogue os
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
          {/* CATALOGO COMEÇO */}
          <div className="py-12 sm:py-16 md:py-20">
            <div className="mb-10 md:mb-12">
              <h1 className="text-center text-3xl font-bold text-[#F6F7F8] sm:text-4xl md:text-5xl lg:text-6xl">
                Explorar catálogo
              </h1>
            </div>

            <div className="mx-auto max-w-[1800px] px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card01></Card01>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card02></Card02>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card03></Card03>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card04></Card04>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card05></Card05>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card06></Card06>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card07></Card07>
                    </Link>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
          </div>

          {/* JOGO EM DESTAQUE */}
          <CardMuda />

          {/* CAROUSEL INICIO */}

          <div className="m-3 text-center text-2xl font-bold text-[#F6F7F8] sm:text-3xl md:text-4xl lg:text-[45px]">
            <h1>Maximize sua diversão com a Nuvix</h1>
          </div>
          <div className="mt-8 justify-items-center sm:mt-10 md:mt-12 lg:mt-14">
            <div className="mx-auto w-full justify-center p-4 sm:w-[90%] sm:p-5 md:w-[95%] md:p-6 lg:w-[1300px]">
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

          {/* PLANOS */}
          <div id="plano" className="py-16 sm:py-20">
            <div className="mb-10 text-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
              <h1 className="mb-8 text-2xl font-bold text-[#F6F7F8] sm:text-3xl">
                Escolha seu Plano
              </h1>
            </div>

            <div className="mx-auto max-w-4xl px-4">
              <div className="flex flex-col justify-center gap-6 md:flex-row">
                {/* Plano Diário */}
                <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-6">
                    <h2 className="mb-2 text-center text-2xl font-bold">
                      Nuvix Diário
                    </h2>
                    <p className="mb-4 text-center text-gray-600">
                      Pagamento Diário
                    </p>
                    <p className="mb-6 text-center text-3xl font-semibold">
                      R$ 20,00
                    </p>

                    <div className="mb-8 space-y-3">
                      <p className="text-center">✓ Prioridade na fila</p>
                      <p className="text-center">✓ 24 horas de jogo</p>
                      <p className="h-6 text-center"></p>
                    </div>

                    <Link href="/pagamento">
                      <button className="w-full rounded-md bg-[#019EC2] py-3 font-bold text-white transition-colors hover:bg-[#198097]">
                        Assinar
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Plano Mensal */}
                <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-6">
                    <h2 className="mb-2 text-center text-2xl font-bold">
                      Nuvix Plus
                    </h2>
                    <p className="mb-4 text-center text-gray-600">
                      Pagamento Mensal
                    </p>
                    <p className="mb-6 text-center text-3xl font-semibold">
                      R$ 60,00
                    </p>

                    <div className="mb-8 space-y-3">
                      <p className="text-center">✓ 730 horas de jogo</p>
                      <p className="text-center">✓ Sem fila</p>
                      <p className="text-center">✓ Sem anúncios</p>
                    </div>

                    <Link href="/pagamento">
                      <button className="w-full rounded-md bg-[#019EC2] py-3 font-bold text-white transition-colors hover:bg-[#198097]">
                        Assinar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center text-white">
              <p>
                &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
                reservados.
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-4">
                <Link
                  href="/poiliticadeprivacidade"
                  className="text-blue-400 hover:underline"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/termosecondicoes"
                  className="text-blue-400 hover:underline"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RODAPÉ */}
      <div className="mt-0 w-full">
        <Rodape />
      </div>
    </div>
  );
};

export default Home;
