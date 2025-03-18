"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardV from "./cardv/cardv";
import jogoscata from "./models/data";
import { useState } from "react";

const CatalogoNovo = () => {
  const [, setJogoCata] = useState(jogoscata[0]);

  const clicaParaMudar = (cataId: number) => {
    const cata = jogoscata.find((j) => j.id === cataId);
    if (cata) setJogoCata(cata);
  };

  return (
    <>
      <div className="h-full w-full bg-[#0E304A] p-0 text-3xl font-bold text-white shadow-2xl">
        <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
          <h1 className="py-4 pl-4 text-white">Catálogo de Jogos</h1>
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Ação</p>
          </div>
          <div className="ms-[100px] w-[1700px] py-4">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {jogoscata.map((game) => (
                  <CarouselItem
                    key={game.id}
                    onClick={() => clicaParaMudar(game.id)}
                    className="md:basis-1/6"
                  >
                    <CardV game={game} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Simulação</p>
          </div>
          <div className="ms-[100px] w-[1700px] py-4">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {jogoscata.map((game) => (
                  <CarouselItem
                    key={game.id}
                    onClick={() => clicaParaMudar(game.id)}
                    className="md:basis-1/6"
                  >
                    <CardV game={game} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Terror</p>
          </div>
          <div className="ms-[100px] w-[1700px] py-4">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {jogoscata.map((game) => (
                  <CarouselItem
                    key={game.id}
                    onClick={() => clicaParaMudar(game.id)}
                    className="md:basis-1/6"
                  >
                    <CardV game={game} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogoNovo;
