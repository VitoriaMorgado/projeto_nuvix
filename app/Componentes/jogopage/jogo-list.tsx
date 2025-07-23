"use client";

import { IGames } from "@/app/interface/IGames";
import JogoCard from "./jogo-item";

interface GameItemProps {
  games: IGames[];
}

const GamePageList = ({ games }: GameItemProps) => {
  return (
    <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games.map((games) => (
        <JogoCard key={games.id_game} games={games} />
      ))}
    </div>
  );
};

export default GamePageList;
