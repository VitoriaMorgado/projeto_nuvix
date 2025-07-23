"use client";

import React, { useState, useEffect } from "react";
import JogoList from "../Componentes/jogocard/list";
import { getGames } from "../services/game/get";
import { IGames } from "../interface/IGames";

// Componente principal
const Catalogo = () => {
  const [games, setGames] = useState<IGames[]>([]);

  useEffect(() => {
    const loadGames = async () => {
      const fetchedGames = await getGames();
      setGames(fetchedGames);
    };
    loadGames();
  }, []);

  return (
    <div className="mt-[2%] min-h-screen bg-gradient-to-b from-[#000000] to-[#1E293B]">
      {/* Hero Banner */}
      <div className="mb-8 bg-gradient-to-r from-black/80 via-black/50 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-bold text-[#F6F7F8] md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#F6F7F8] to-[#019EC2] bg-clip-text text-transparent">
              Catálogo
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-[#F6F7F8]/90 lg:text-xl">
            Explore nossa coleção de jogos premium para todas as plataformas.
            Descubra novos mundos, aventuras e desafios.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Search and Filters */}
        <div className="mb-8 rounded-lg border border-[#019EC2]/20 bg-black/30 p-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar jogos..."
                className="w-full rounded-lg border border-[#019EC2]/30 bg-[#1E293B] p-2 text-[#F6F7F8] placeholder-[#F6F7F8]/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <select className="rounded-lg border border-[#019EC2]/30 bg-[#1E293B] p-2 text-[#F6F7F8] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#019EC2]">
                <option value="">Todos os Gêneros</option>

                <option></option>
              </select>
              <select className="rounded-lg border border-[#019EC2]/30 bg-[#1E293B] p-2 text-[#F6F7F8] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#019EC2]">
                <option value="">Todas as Classificações</option>

                <option></option>
              </select>
              <select className="rounded-lg border border-[#019EC2]/30 bg-[#1E293B] p-2 text-[#F6F7F8] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#019EC2]">
                <option value="releaseDate">Data de Lançamento</option>
                <option value="price">Preço</option>
                <option value="popularity">Popularidade</option>
              </select>
              <button className="transform rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-4 py-2 font-bold text-[#F6F7F8] transition-all duration-300 hover:scale-105 hover:bg-[#198097] md:col-span-1">
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {/* Games Grid */}
          <JogoList games={games} />
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
