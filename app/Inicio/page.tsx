"use client";

//========IMPORTE DE COMPONENTES========//
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}  from "@/components/ui/carousel";
import CardDois from "../componente/carddois";
import CardTres from "../componente/cardtres";
import Cardquatro from "../componente/cardquatro";
import Link from "next/link";
import Carduni from "../componente/carduni";
import CardMuda from "../comp/carromuda";
import NavBarp from "../comp/navbar/navbar";
import CataCarro from "../comp/carrosselcatalogo/catacarro";

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
              src="/bannerp.jpg"
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
                  <button className="px-8 py-4 rounded-lg bg-[#019EC2] text-2xl font-bold text-white hover:bg-[#198097] shadow-lg shadow-[#019EC2]/30 flex items-center gap-2">
                    Jogue agora
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
                className="mx-auto mb-6 drop-shadow-xl"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Escolha seu <span className="text-[#019EC2]">Plano</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Selecione a opção que melhor se adapta às suas necessidades de jogo
              </p>
            </div>

              <div className="mx-auto max-w-4xl px-4">
                <div className="flex flex-col justify-center gap-6 md:flex-row">
                  {/* Plano Diário */}
                  <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl">
                    <div className="p-6">
                      <div className="bg-gradient-to-r from-[#019EC2]/20 to-transparent p-4 rounded-lg mb-4">
                        <h2 className="mb-2 text-center text-2xl font-bold">
                          Nuvix Diário
                        </h2>
                        <p className="mb-2 text-center text-gray-600">
                          Pagamento Diário
                        </p>
                      </div>
                      
                      <p className="mb-6 text-center text-3xl font-semibold">
                        R$ 20,00
                      </p>

                      <div className="mb-8 space-y-3">
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Prioridade na fila
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Resolução 1080p
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          4 horas de jogo
                        </p>
                      </div>

                      <div className="text-center">
                        <Link href="/pagamento/diario">
                          <button className="w-full rounded-lg bg-[#019EC2] py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#198097]">
                            Assinar agora
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Plano Mensal */}
                  <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl">
                    <div className="p-6">
                      <div className="bg-gradient-to-r from-[#019EC2]/20 to-transparent p-4 rounded-lg mb-4">
                        <div className="absolute -right-1 -top-1 rounded-bl-lg bg-[#019EC2] px-3 py-1 text-sm font-medium text-white">
                          Popular
                        </div>
                        <h2 className="mb-2 text-center text-2xl font-bold">
                          Nuvix Mensal
                        </h2>
                        <p className="mb-2 text-center text-gray-600">
                          Pagamento Mensal
                        </p>
                      </div>
                      
                      <p className="mb-6 text-center text-3xl font-semibold">
                        R$ 99,90
                      </p>

                      <div className="mb-8 space-y-3">
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Prioridade na fila
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Resolução 4K
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Acesso ilimitado
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Jogos exclusivos
                        </p>
                      </div>

                      <div className="text-center">
                        <Link href="/pagamento/mensal">
                          <button className="w-full rounded-lg bg-[#019EC2] py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#198097]">
                            Assinar agora
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Plano Anual */}
                  <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl">
                    <div className="p-6">
                      <div className="bg-gradient-to-r from-[#019EC2]/20 to-transparent p-4 rounded-lg mb-4">
                        <h2 className="mb-2 text-center text-2xl font-bold">
                          Nuvix Anual
                        </h2>
                        <p className="mb-2 text-center text-gray-600">
                          Pagamento Anual
                        </p>
                      </div>
                      
                      <p className="mb-6 text-center text-3xl font-semibold">
                        R$ 899,90
                      </p>

                      <div className="mb-8 space-y-3">
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Prioridade máxima na fila
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Resolução 4K
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Acesso ilimitado
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Jogos exclusivos
                        </p>
                        <p className="text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#019EC2]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          2 meses grátis
                        </p>
                      </div>

                      <div className="text-center">
                        <Link href="/pagamento/anual">
                          <button className="w-full rounded-lg bg-[#019EC2] py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#198097]">
                            Assinar agora
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center text-white">
                <p className="text-white/70">
                  &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
                  reservados.
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/poiliticadeprivacidade"
                    className="text-[#019EC2] hover:text-[#198097] hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  <Link
                    href="/termosecondicoes"
                    className="text-[#019EC2] hover:text-[#198097] hover:underline"
                  >
                    Termos de Uso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
     
  );
};

export default Home;