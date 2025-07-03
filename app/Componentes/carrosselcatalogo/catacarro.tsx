"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import CardCataa from "./cardcata";
import jogoscategoria from "./models/cate";
import { useState } from "react";
import * as React from "react";

const CataCarro = () => {
  const [, setJogoCate] = useState(jogoscategoria[0]);
  const clicaParaMudar = (cateId: number) => {
    const cate = jogoscategoria.find((j) => j.id === cateId);
    if (cate) setJogoCate(cate);
  };

  return (
    <>
      <div className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto  max-w-7xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full "
          >
            <CarouselContent>
              {jogoscategoria.map((cat) => (
                <CarouselItem
                  key={cat.id}
                  onClick={() => clicaParaMudar(cat.id)}
                  className="pl-4 sm:mx-4 md:mx-14 lg:mx-2 md:basis-1/6 sm:basis-1/3 lg:basis-1/6 basis-1/2 8 flex-shrink-0"
                >
                  <Link href="/catalogo">
                    <CardCataa cat={cat} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CataCarro;
