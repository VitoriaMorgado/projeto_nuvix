"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import jogoscata from "./models/coisas";
import { useState } from "react";
import CardV from "./cardv/cardv";

const CataUsa = () => {
  const [, setJogoCata] = useState(jogoscata[0]);

  const clicaParaMudar = (cataId: number) => {
    const cata = jogoscata.find((j) => j.id === cataId);
    if (cata) setJogoCata(cata);
  };
  return (
    <>
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
    </>
  );
};

export default CataUsa;
