"use client";
import CardGame from "../../jogo/card";
import { IGames } from "@/app/interface/IGames"; // Adjust the import path if needed

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
