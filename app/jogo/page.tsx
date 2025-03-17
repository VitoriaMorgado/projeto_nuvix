"use client";

import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BotaoFav from "../componente/botaofav";
import Link from "next/link";
import { useState } from "react";
import jogos from "@/app/models/data";

const JogoPage = () => {
  const [jogoSelecionado, setJogoSelecionado] = useState(jogos[0]);

  const handleCardClick = (jogoId: number) => {
    const jogo = jogos.find((j) => j.id === jogoId);
    if (jogo) setJogoSelecionado(jogo);
  };

  return (
    <>
      <div className="m-0 h-full w-screen flex-col justify-center bg-gradient-to-b from-[#0a2235] to-[#154B74] p-0">
        {/* NAVBAR INÍCIO */}
        <div className="flex bg-black">
          <Image
            className="mx-4"
            src="/logo.png"
            width={150}
            height={500}
            alt="logo"
          />
          <div className="flex">
            <Link
              href="/"
              className="mx-5 content-center text-2xl font-bold text-[#F6F7F8]"
            >
              <button>HOME</button>
            </Link>

            <button className="mx-5 content-center text-2xl font-bold text-[#F6F7F8]">
              FAVORITOS
            </button>

            <button className="mx-5 content-center text-2xl font-bold text-[#F6F7F8]">
              ASSINATURA
            </button>
            <button className="w-[210px] content-center text-2xl font-bold text-[#F6F7F8]">
              FALE CONOSCO
            </button>
          </div>
          <div className="w-screen justify-items-end">
            <div className="flex">
              <button className="mx-5 h-[35px] w-[180px] bg-[#019EC2] text-center text-2xl text-white">
                Assine o nuvix
              </button>
              <div className="h-[40px] w-[4px] bg-white"></div>
              <button className="mx-5 text-2xl text-white">
                Iniciar sessão
              </button>
              <div className="h-[40px] w-[4px] bg-white"></div>
              <Menubar className="border-transparent bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="mx-5 bg-transparent text-2xl text-white">
                    Idioma
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="bg-transparent">Inglês</MenubarItem>
                    <MenubarItem>Português</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
        {/* NAVBAR FIM */}

        {/* CONTEÚDO DO JOGO */}
        <div className="justify-self-center">
          <div className="my-9 flex">
            <h1 className="font-mono text-5xl text-white">
              {jogoSelecionado.nome}
            </h1>
            <div className="w-[1235px] content-center">
              <div className="justify-self-end">
                <BotaoFav />
              </div>
            </div>
          </div>
        </div>
        <div className="m-8 h-[700px] w-[1740px] justify-self-center rounded-md bg-[#000101a8]">
          <div className="flex">
            <div className="p-8">
              <div className="mb-2">
                <video
                  src={jogoSelecionado.video}
                  className="w-[900px]"
                  controls
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="h-[140px] w-[900px] justify-items-center">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {jogoSelecionado.imagens.map((imgSrc, index) => (
                      <CarouselItem key={index} className="mt-3 md:basis-1/4">
                        <Image
                          src={imgSrc}
                          width={250}
                          height={500}
                          alt={`Imagem ${index + 1} do jogo`}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-8" />
                  <CarouselNext className="mr-8" />
                </Carousel>
              </div>
            </div>
            <div className="p-8">
              {/* CAPA DO JOGO INICIO */}
              <Image
                src={jogoSelecionado.capa} // Alterado para usar o campo 'capa'
                width={700}
                height={500}
                alt="Capa do jogo"
              />
              {/* CAPA DO JOGO FIM */}
              <p className="mt-5 w-[700px] font-mono text-2xl text-[#F6F7F8]">
                {jogoSelecionado.descricao}
              </p>
              <div className="justify-self-center">
                <Link href="login">
                  <button className="m-4 mx-[100px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8]">
                    Jogue agora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* SEÇÃO DE JOGOS */}
        {/* SEÇÃO DE JOGOS */}
        <div className="justify-self-center">
          <div className="h-[510px] w-[1740px] rounded-md bg-[#000101a8]">
            <div className="w-[1580px] justify-self-center py-[75px]">
              <Carousel opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {jogos.map((jogo) => (
                    <CarouselItem
                      key={jogo.id}
                      onClick={() => handleCardClick(jogo.id)}
                      className="cursor-pointer md:basis-2/5"
                    >
                      {/* NOVO CARD */}
                      <div className="m-2 h-[340px] w-[550px] justify-center rounded-xl bg-[#000101] shadow-xl">
                        <Image
                          src={jogo.capa}
                          width={550}
                          height={500}
                          alt={`Capa do jogo ${jogo.nome}`}
                          className="rounded-t-xl"
                        />
                        <div className="h-[60px] w-full content-center justify-items-center">
                          <p className="mt-2 text-center font-mono text-5xl text-[#F6F7F8]">
                            {jogo.nome}
                          </p>
                        </div>
                      </div>
                      {/* NOVO CARD FIM */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="h-[100px] w-screen"></div>
      </div>
    </>
  );
};

export default JogoPage;
