"use client";

//Catalogo com problema

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Card1 from "@/app/componente/cardv/cards01";
import { acao } from "@/app/componente/imagens";

const Card = () => {
  return (
    <>
      <div className="bg-[#0E304A] p-0 text-3xl font-bold text-white shadow-2xl">
        <div className="bg-[#0E304A] p-6 text-5xl font-bold text-white shadow-2xl">
          {/* inicio */}
          <h1 className="py-4 pl-4 text-white">Catálogo de Jogos</h1>
        </div>
        <h2 className="py-2 pl-24 text-4xl text-white">Ação</h2>
        {/* inicio Carrossel  */}
        <div className="ms-[100px] w-[1700px] py-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[0].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[2].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[1].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[3].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[4].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[5].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[6].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[7].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[0].imageUrl}></Card1>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
        {/* fim aventura  */}
        <h2 className="pb-2 pl-24 text-4xl text-white">Aventura</h2>
        {/* inicio Carrossel  */}
        <div className="ms-[100px] w-[1700px] py-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[6].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[7].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[0].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[1].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[3].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[4].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[7].imageUrl}></Card1>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
        <h2 className="pb-2 pl-24 text-4xl text-white">Terror</h2>
        {/* inicio Carrossel  */}
        <div className="ms-[100px] w-[1700px] py-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[3].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[5].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[6].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[7].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[4].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[0].imageUrl}></Card1>
              </CarouselItem>
              <CarouselItem className="mx-3 md:basis-1/6">
                <Card1 posicao={acao[7].imageUrl}></Card1>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
        <div className="h-[100px] w-screen"></div>
      </div>
    </>
  );
};

export default Card;
