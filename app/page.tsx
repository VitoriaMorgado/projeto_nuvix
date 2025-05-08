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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
          
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
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
                  Nuvix
                </h1>
                <p className="text-3xl text-[#F6F7F8] mb-6 font-light">
                  O melhor serviço de jogos na nuvem
                </p>
                <p className="text-lg text-[#F6F7F8]/90 mb-8 leading-relaxed">
                  Experimente a revolução dos jogos na nuvem: jogue os
                  títulos mais recentes e de alta qualidade sem precisar de
                  um PC poderoso ou console. Com a tecnologia de nuvem, você
                  acessa seus jogos favoritos de qualquer dispositivo, a
                  qualquer hora e em qualquer lugar.
                </p>
                <Link href="/jogo">
                <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">Jogue agora</button>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Nosso Catálogo <span className="text-[#019EC2]">Premium</span>
              </h2>
              <CataCarro/>
            </div>
          </div>
          {/* CATALOGO FIM */}
          
          {/* JOGO EM DESTAQUE */}
          <div className="py-16 bg-black/30">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                <span className="text-[#019EC2]">Destaque</span> da Semana
              </h2>
              <CardMuda />
            </div>
          </div>

          {/* CAROUSEL INICIO */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Maximize sua <span className="text-[#019EC2]">diversão</span> com a Nuvix
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
                    <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-none text-white" />
                    <CarouselNext className="bg-white/10 hover:bg-white/20 border-none text-white" />
                  </Carousel>
                </div>
              </div>
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
