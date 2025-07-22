import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import jogos from "@/app/jogo/models/data";
import { useState } from "react";

const MoreGames = () => {
  const [, setJogoSelecionado] = useState(jogos[0]);

  const handleCardClick = (jogoId: number) => {
    const jogo = jogos.find((j) => j.id === jogoId);
    if (jogo) setJogoSelecionado(jogo);
  };
  return (
    <>
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent">
              Mais Jogos
            </h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {jogos.map((jogo) => (
                <CarouselItem
                  key={jogo.id}
                  onClick={() => handleCardClick(jogo.id)}
                  className="cursor-pointer md:basis-1/3"
                >
                  <div className="m-2 flex h-[220px] w-[300px] flex-col items-center rounded-lg bg-[#141A26] shadow transition hover:ring-2 hover:ring-[#576CBC]">
                    <Image
                      src={jogo.capa}
                      width={280}
                      height={140}
                      alt={`Capa do jogo ${jogo.nome}`}
                      className="h-[140px] w-full rounded-t-lg object-cover"
                    />
                    <p className="mt-2 text-center font-mono text-xl text-[#E4E9F7]">
                      {jogo.nome}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:bg-white/20" />
            <CarouselNext className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default MoreGames;
