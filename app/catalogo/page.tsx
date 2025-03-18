"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import jogosc from "./models/data";
import { useState } from "react";
import CardV from "./cardv/cardv";

const CatalogoNovo = () => {
  const [, setJogoSelecionado] = useState(jogosc[0].id);

  return (
    <>
      <div className="h-screen w-screen bg-[#0E304A] p-0 text-3xl font-bold text-white shadow-2xl">
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
                {jogosc.map((Cata) => (
                  <CarouselItem
                    key={Cata.id}
                    onClick={() => setJogoSelecionado(Cata.id)}
                    className="cursor-pointer md:basis-2/5"
                  >
                    <CardV jogoId={Cata.id} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Simulação</p>
          </div>
          <div className="ms-[100px] w-[1700px] py-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
            <p className="text-4xl text-white">Terror</p>
          </div>
          <div className="ms-[100px] w-[1700px] py-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogoNovo;
