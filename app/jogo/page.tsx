"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Cardin from "../componente/ccard";
import BotaoFav from "../componente/botaofav";
import Card1 from "../componente/card1";
import Card2 from "../componente/card2";
import Card3 from "../componente/card3";
import Card4 from "../componente/card4";

const JogoPage = () => {
  return (
    <>
      <div className="m-0 h-screen w-screen flex-col justify-center bg-gradient-to-b from-[#0a2235] to-[#154B74] p-0">
        {/* NAVBAR INCIO */}
        <div className="flex bg-black">
          <Image
            className="mx-4"
            src={logo}
            width={300}
            height={500}
            alt="logo"
          />
          <div className="flex">
            <button className="mx-5 content-center text-3xl font-bold text-[#F6F7F8]">
              LOJA
            </button>
            <button className="mx-5 content-center text-3xl font-bold text-[#F6F7F8]">
              COMUNIDADE
            </button>
            <button className="mx-5 content-center text-3xl font-bold text-[#F6F7F8]">
              SOBRE
            </button>
            <button className="mx-5 content-center text-3xl font-bold text-[#F6F7F8]">
              SUPORTE
            </button>
          </div>
          <div className="w-screen justify-items-end">
            <div className="flex">
              <button className="mx-5 h-[35px] w-[180px] bg-[#019EC2] text-center text-2xl text-white">
                instale o nuvix
              </button>
              <div className="h-[40px] w-[4px] bg-white"></div>
              <button className="mx-5 text-2xl text-white">
                Iniciar sessão
              </button>
              <div className="h-[40px] w-[4px] bg-white"></div>
              <button className="mx-5 text-2xl text-white">idioma</button>
            </div>
          </div>
        </div>

        {/* NAVBAR FIM */}

        {/* COISA DE JOGO INICIO */}

        <div className="m-9 flex">
          <h1 className="ml-[50px] font-mono text-5xl text-white">
            God of War Ragnarök
          </h1>
          <div className="w-[1235px] content-center">
            <div className="justify-self-end">
              <BotaoFav />
            </div>
          </div>
        </div>
        <div className="m-8 h-[700px] w-[1740px] justify-self-center rounded-md bg-[#000101a8]">
          <div className="flex">
            <div className="p-8">
              <div className="mb-2">
                <video
                  src="/videogod.webm"
                  className="w-[900px]"
                  controls
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="h-[140px] w-[900px] justify-items-center">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="mt-3 md:basis-1/4">
                      <Image
                        src="/god.jpg"
                        width={250}
                        height={500}
                        alt="imagem de controle"
                      />
                    </CarouselItem>
                    <CarouselItem className="mt-3 md:basis-1/4">
                      <Image
                        src="/god4.jpg"
                        width={250}
                        height={500}
                        alt="imagem de controle"
                      />
                    </CarouselItem>
                    <CarouselItem className="mt-3 md:basis-1/4">
                      <Image
                        src="/god5.jpg"
                        width={250}
                        height={500}
                        alt="imagem de controle"
                      />
                    </CarouselItem>
                    <CarouselItem className="mt-3 md:basis-1/4">
                      <Image
                        src="/god6.jpg"
                        width={250}
                        height={500}
                        alt="imagem de controle"
                      />
                    </CarouselItem>
                    <CarouselItem className="mt-3 md:basis-1/4">
                      <Image
                        src="/god3.jpg"
                        width={250}
                        height={500}
                        alt="imagem de controle"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="ml-8" />
                  <CarouselNext className="mr-8" />
                </Carousel>
              </div>
            </div>
            <div className="p-8">
              <Image
                src="/god2.jpg"
                width={700}
                height={500}
                alt="imagem de controle"
              />
              <p className="mt-5 w-[700px] font-mono text-2xl text-[#F6F7F8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                non ratione placeat aliquam exercitationem cum natus architecto
                alias deserunt eligendi vel ad omnis facilis consequuntur, odio
                repellat modi? Est, nisi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <div className="justify-self-center">
                <button className="m-4 mx-[100px] h-[55px] w-[230px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8]">
                  Jogue agora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* COISA DE JOGO FIM */}

        <div className="justify-self-center">
          <div className="h-[510px] w-[1740px] rounded-md bg-[#000101a8]">
            <div className="w-[1580px] justify-self-center py-[75px]">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="md:basis-2/5">
                    <Cardin></Cardin>
                  </CarouselItem>
                  <CarouselItem className="md:basis-2/5">
                    <Card1></Card1>
                  </CarouselItem>
                  <CarouselItem className="md:basis-2/5">
                    <Card2></Card2>
                  </CarouselItem>
                  <CarouselItem className="md:basis-2/5">
                    <Card3></Card3>
                  </CarouselItem>
                  <CarouselItem className="md:basis-2/5">
                    <Card4></Card4>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JogoPage;
