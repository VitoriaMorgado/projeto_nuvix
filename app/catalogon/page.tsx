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
import Image from "next/image";

const CatalogoNovo = () => {
  const [JogoCatalogo, setJogoCatalogo] = useState(jogosc[0]);

  const mudarCatalogo = (jogoId: number) => {
    const Cata = jogosc.find((j) => j.id === jogoId);
    if (Cata) setJogoCatalogo(Cata);
  };

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
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselContent>
                  {jogosc.map((Cata) => (
                    <CarouselItem
                      key={Cata.id}
                      onClick={() => mudarCatalogo(Cata.id)}
                      className="cursor-pointer md:basis-2/5"
                    >
                      {/* NOVO CARD */}
                      <div className="m-2 h-[340px] w-[550px] justify-center rounded-xl bg-[#000101] shadow-xl">
                        <Image
                          src={Cata.imagens}
                          width={550}
                          height={500}
                          alt={`Capa do jogo ${Cata.nome}`}
                          className="rounded-t-xl"
                        />
                        <div className="h-[60px] w-full content-center justify-items-center">
                          <p className="mt-2 text-center font-mono text-5xl text-[#F6F7F8]">
                            {Cata.nome}
                          </p>
                        </div>
                      </div>
                      {/* NOVO CARD FIM */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
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
