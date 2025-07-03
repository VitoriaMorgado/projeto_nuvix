"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CardsaibaHome from "./cardsaibahome";
import conteudo from "./models/saibahome";
import { useState } from "react";



const SaibamaisHome = () => {

    const [, setConteudo] = useState(conteudo[0]);

  const MudarCard = (conteudoId: number) => {
    const card = conteudo.find((j) => j.id === conteudoId);
    if (card) setConteudo(card);
  };

    return ( 
        <>
        <div className="mt-8 justify-items-center sm:mt-10 md:mt-12 lg:mt-14">
                        <div className="mx-auto w-full justify-center p-4 sm:w-[90%] sm:p-5 md:w-[95%] md:p-6 lg:w-[1300px]">
                            <Carousel
                                opts={{
                                    align: "center",
                                    loop: true,
                                }}
                            >
                                <CarouselContent className="gap-26 sm:basis-2/3 ">
                                {conteudo.map((card) => (
                                    <CarouselItem className="lg:basis-3/6" key={card.id}
                                    onClick={() => MudarCard(card.id)}
                                    >
                                        <div className="transform transition-all hover:scale-105">
                                            <CardsaibaHome
                                            card={card}
                                            />
                                        </div>
                                    </CarouselItem>
                                      ))}
                                </CarouselContent>
                                <CarouselPrevious className="border-none bg-white/10 text-white hover:bg-white/20" />
                                <CarouselNext className="border-none bg-white/10 text-white hover:bg-white/20" />
                            </Carousel>
                        </div>
                    </div>
        </>
     );
}
 
export default SaibamaisHome;