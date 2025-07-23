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
    <div className="min-h-screen bg-gradient-to-b mt-[2%] from-[#000000] to-[#1E293B]">
      {/* Hero Banner */}
      <div className="mb-8 bg-gradient-to-r from-black/80 via-black/50 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl md:text-6xl lg:text-7xl font-bold text-[#F6F7F8]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
              Catálogo
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg lg:text-xl text-[#F6F7F8]/90">
            Explore nossa coleção de jogos premium para todas as plataformas.
            Descubra novos mundos, aventuras e desafios.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Search and Filters */}
        <div className="mb-8 rounded-lg bg-black/30 p-4 border border-[#019EC2]/20">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar jogos..."
              
                className="w-full rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] placeholder-[#F6F7F8]/60 focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <select
                
                className="rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              >
                <option value="">Todos os Gêneros</option>
               
                  <option >
                
                  </option>
        
              </select>
              <select
                
                className="rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              >
                <option value="">Todas as Classificações</option>
              
                  <option >
                  
                  </option>
          
              </select>
              <select
               
                className="rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              >
                <option value="releaseDate">Data de Lançamento</option>
                <option value="price">Preço</option>
                <option value="popularity">Popularidade</option>
              </select>
              <button
               
                className="rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-4 py-2 text-[#F6F7F8] font-bold hover:bg-[#198097] transition-all duration-300 transform hover:scale-105 md:col-span-1"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <JogoList games={games} />
      </div>
    </div>
  );
};

export default Catalogo;