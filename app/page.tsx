"use client";

//========IMPORTE DE COMPONENTES========//
import Image from "next/image";
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
import Rodape from "@/components/ui/rodape";
import CardMuda from "./comp/carromuda";
import NavBarp from "./comp/navbar/navbar";
import CataCarro from "./comp/carrosselcatalogo/catacarro";

const Home = () => {
  return (
    //========INDICE MENU========//
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* //========NAVBAR========// */}
      <NavBarp />
      {/* //========NAVBAR========// */}

      <div className="flex-grow">
        {/* Content inside main */}

        {/* BANNER COMEÇO */}
        <div className="relative h-screen w-full overflow-hidden">
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          <div className="absolute w-screen">
            <Image
              src="/banner_principal.jpg"
              width={3000}
              height={500}
              className="object-cover"
              alt="banner"
            />
          </div>

          {/* ESCRITAS DO BANNER */}
          <div className="relative z-20 flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl">

                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#198097]">
                  Nuvix
                </h1>
                <p className="mb-6 text-3xl font-light text-[#F6F7F8]">
                  O melhor serviço de jogos na nuvem
                </p>
                <p className="mb-8 text-lg leading-relaxed text-[#F6F7F8]/90">
                  Experimente a revolução dos jogos na nuvem: jogue os títulos
                  mais recentes e de alta qualidade sem precisar de um PC
                  poderoso ou console. Com a tecnologia de nuvem, você acessa
                  seus jogos favoritos de qualquer dispositivo, a qualquer hora
                  e em qualquer lugar.
                </p>
                <Link href="/jogo">
                  <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                    Jogue agora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* BANNER FINAL */}

        {/* FUNDO */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          {/* CATALOGO COMEÇO */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="mb-12 text-center text-5xl font-bold text-white md:text-6xl">
                Explorar <span className="text-[#019EC2]">Catálogo</span>
              </h2>
              <CataCarro />
            </div>
          </div>
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
                Maximize sua <span className="text-[#019EC2]">diversão</span>{" "}
                com a Nuvix
              </h2>

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
                        <div className="transform transition-all hover:scale-105">
                          <Carduni />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="lg:basis-3/6">
                        <div className="transform transition-all hover:scale-105">
                          <CardDois />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="lg:basis-3/6">
                        <div className="transform transition-all hover:scale-105">
                          <CardTres />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="lg:basis-3/6">
                        <div className="transform transition-all hover:scale-105">
                          <Cardquatro />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="border-none bg-white/10 text-white hover:bg-white/20" />
                    <CarouselNext className="border-none bg-white/10 text-white hover:bg-white/20" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          {/* CAROUSEL FIM */}
        </div>
      </div>

      {/* FUNDO */}

      {/* RODAPÉ */}
      <div className="mt-0 w-full">
        <Rodape />
      </div>
    </div>
  );
};

export default Home;
