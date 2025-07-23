"use client";

import { useEffect, useState } from "react";
import GamePageList from "../Componentes/jogopage/jogo-list";
import MoreGames from "./more";
import { IGames } from "../interface/IGames";
import { getGames } from "../services/game/get";

const GameShowcasePage = () => {
  const [jogos, setJogos] = useState<IGames[]>([]);

  useEffect(() => {
    const loadGames = async () => {
      const fetchedGames = await getGames();
      setJogos(fetchedGames);
    };
    loadGames();
  }, []);
  return (
    <>
      <div className="mt-[2%] min-h-screen bg-gradient-to-br from-[#02030a] to-[#0E304A] text-white">
        {/* Particles Background Effect */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse rounded-full bg-cyan-400 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#02030a] to-[#0E304A]"></div>

          {/* Navigation */}

          {/* Game Title Section */}
          <GamePageList games={jogos} />

          {/* More Games Section */}

          <MoreGames />
        </div>
      </div>
    </>
  );
};

export default GameShowcasePage;
