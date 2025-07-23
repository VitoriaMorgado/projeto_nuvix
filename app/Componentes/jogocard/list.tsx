"use client";

import { IGames } from "@/app/interface/IGames"; // Adjust the import path if needed
import CardGame from "./card";

interface JogosListProps {
  games: IGames[];
}

const JogoList = ({ games }: JogosListProps) => {
  return (
    <div className="">
      {games.map((jogo) => (
        <CardGame key={jogo.id_game} jogo={jogo} />
      ))}
    </div>
  );
};

export default JogoList;
