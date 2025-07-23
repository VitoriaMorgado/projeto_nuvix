"use client";

import { IGames } from "@/app/interface/IGames";
import Link from "next/link";
// import Image from "next/image";

// Defina ou importe a interface IGames antes de usá-la

interface JogosListProps {
  jogo: IGames;
}

// Componente principal
const CardGame = ({ jogo }: JogosListProps) => {
  return (
    <div className="mt-[2%] min-h-screen bg-gradient-to-b from-[#000000] to-[#1E293B]">
      {/* Games Grid */}

      <Link href={`/jogo/${jogo.id_game}`}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            key={jogo.id_game}
            className="overflow-hidden rounded-lg border border-[#019EC2]/20 bg-black/30 shadow-lg transition-transform duration-300 hover:scale-105 hover:transform"
          >
            <div className="relative h-40 bg-[#1E293B]">
              <div className="absolute inset-0 flex text-[#F6F7F8]/60">
                {/* <Image
                  src={`http://localhost:8081/games/imagens/${jogo.imagem}`}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                  alt={jogo.titulo || "Imagem do jogo"}
                /> */}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="mb-1 truncate text-lg font-bold text-[#F6F7F8]">
                  {jogo.titulo}
                </h3>
                <span className="rounded-full border border-[#019EC2]/30 bg-[#1E293B] px-2 py-1 text-xs text-[#F6F7F8]/70">
                  clacificação
                </span>
              </div>
              <p className="mb-2 text-xs text-[#F6F7F8]/70">
                {jogo.desenvolvedora} • {jogo.categoria}
              </p>
              <div className="mb-3 flex flex-wrap gap-1">plataforma</div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {/* {formatPrice(game.price, game.discount)} */}
                </div>
                <Link href={`/jogo/${jogo.id_game}`}>
                  <button className="transform rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-3 py-1 text-sm font-bold text-[#F6F7F8] transition-all duration-300 hover:scale-105 hover:bg-[#198097]">
                    Detalhes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardGame;
