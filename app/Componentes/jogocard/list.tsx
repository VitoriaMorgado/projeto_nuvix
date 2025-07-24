"use client";

import { IGames } from "@/app/interface/IGames";
import CardGame from "./card";

interface JogosListProps {
  games: IGames[];
}

const JogoList = ({ games }: JogosListProps) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {games.map((jogo) => (
          <CardGame key={jogo.id_game} jogo={jogo} />
        ))}
      </div>
    </div>
  );
};

export default JogoList;
