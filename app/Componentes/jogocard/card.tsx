"use client";

import { IGames } from "@/app/interface/IGames";
import Link from "next/link";
import Image from "next/image";

interface JogosListProps {
  jogo: IGames;
}

const CardGame = ({ jogo }: JogosListProps) => {
  return (
    <Link href={`/jogo/${jogo.id_game}`} className="block">
      <div className="h-full w-80">
        <div className="mx-4 h-full overflow-hidden rounded-xl border border-[#019EC2]/20 bg-black/40 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#019EC2]/40 hover:shadow-2xl">
          <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#1E293B] to-[#0F172A]">
            <Image
              src={`http://localhost:8081/games/imagens/${
                jogo?.imagem || "default.jpg"
              }`}
              width={500}
              height={300}
              alt="Game Cover"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div className="space-y-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="line-clamp-2 flex-1 text-lg font-bold leading-tight text-[#F6F7F8]">
                {jogo.titulo}
              </h3>
              <span className="shrink-0 rounded-full border border-[#019EC2]/30 bg-[#019EC2]/10 px-3 py-1 text-xs font-medium text-[#019EC2] backdrop-blur-sm">
                classificação
              </span>
            </div>

            <p className="text-sm font-medium text-[#F6F7F8]/70">
              {jogo.desenvolvedora} •{" "}
              <span className="text-[#019EC2]">{jogo.categoria}</span>
            </p>

            <div className="flex min-h-[24px] flex-wrap gap-1">
              <span className="text-xs text-[#F6F7F8]/60">plataforma</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-sm font-semibold text-[#019EC2]">
                {/* {formatPrice(game.price, game.discount)} */}
                <span className="text-[#F6F7F8]/40">Preço em breve</span>
              </div>
              <button className="transform rounded-lg bg-gradient-to-r from-[#019EC2] to-[#0284c7] px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
                Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardGame;
