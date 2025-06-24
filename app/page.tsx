"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import CardDois from "./componente/carddois";
import CardDois from  "./componente/carddois";
import CardTres from "./componente/cardtres";
import Cardquatro from "./componente/cardquatro";
import Carduni from "./componente/carduni";
import CardMuda from "./comp/carromuda";
import Image from "next/image";
import CatalogoHome from "./Componentes/index/catalogohome";
import Link from "next/link";

const Home = () => {
    return ( 
        <>
        <div className="bg-gradient-to-b from-[#000000] to-[#1E293B]">
            {/* BANNER PRINCIPAL */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
                {/* Imagem de fundo */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/banner_principal3.png"
                        alt="Nuvix Home Banner"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                {/* Conteúdo do banner */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl lg:max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 lg:mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
                                Nuvix
                            </span>
                        </h1>
                        
                        <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#F6F7F8] mb-6 lg:mb-8">
                            O melhor serviço de jogos na nuvem
                        </p>
                        
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#F6F7F8]/90 mb-8 lg:mb-10 max-w-2xl">
                            Experimente a revolução dos jogos na nuvem: jogue os títulos
                            mais recentes e de alta qualidade sem precisar de um PC
                            poderoso ou console. Com a tecnologia de nuvem, você acessa
                            seus jogos favoritos de qualquer dispositivo, a qualquer hora
                            e em qualquer lugar.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/jogo">
                                <button className="px-8 py-4 lg:px-10 lg:py-5 rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-lg lg:text-2xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[200px]">
                                    Jogue agora
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Indicador de scroll */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* CATALOGO COMEÇO */}
            <CatalogoHome />
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
        </>
     );
}
 
export default Home;