"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBarp from "../Componentes/navbar/navbar";
import Rodape from "../Componentes/navbar/rodape";
import { Heart, X, PlayCircle } from "lucide-react";
import favoriteGames from "../catalogo/models/jogos";
import Botaocora from "../catalogo2/botaocora";

// Definição do tipo dos jogos favoritos
interface FavoritoProps {
  id: number;
  title: string;
  coverImage: string;
  genre: string;
  description: string;
}

const Favoritos = () => {
  const [favorites, setFavorites] = useState<FavoritoProps[]>([]);

  useEffect(() => {
    // Inicializa os favoritos com os jogos do mock (ou localStorage se preferir)
    setFavorites(
      favoriteGames.map((game) => ({
        ...game,
        id: Number(game.id),
      })),
    );
  }, []);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((game) => game.id !== id));
  };

  const getRecommendedGames = () => {
    const favoriteIds = favorites.map((game) => game.id);
    return favoriteGames.filter(
      (game) => !favoriteIds.includes(Number(game.id)),
    );
  };

  const recommendedGames = getRecommendedGames();

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <NavBarp />

      <div className="flex-grow">
        <div className="relative h-64 w-full overflow-hidden">
          <div className="relative z-20 flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl">
                <h1 className="mb-2 bg-gradient-to-r from-[#F6F7F8] to-[#198097] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                  Meus Favoritos
                </h1>
                <div className="mt-2 h-[3px] w-[1000px] self-center bg-gradient-to-r from-[#c8d3f5] to-[#01070c]"></div>
                <p className="text-lg text-[#F6F7F8]/90">
                  Acesse rapidamente seus jogos favoritos na Nuvix
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] py-12">
          <div className="container mx-auto px-6">
            {favorites.length > 0 ? (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-white">
                    Seus <span className="text-[#019EC2]">Jogos</span> Favoritos
                  </h2>
                  <span className="text-sm text-[#F6F7F8]/70">
                    {favorites.length}{" "}
                    {favorites.length === 1 ? "jogo" : "jogos"}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {favorites.map((game) => (
                    <div
                      key={game.id}
                      className="group relative overflow-hidden rounded-lg bg-[#010B13] shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={game.coverImage}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          alt={game.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      </div>

                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="rounded-full bg-[#019EC2]/20 px-3 py-1 text-xs font-medium text-[#019EC2]">
                            {game.genre}
                          </span>
                          <button
                            onClick={() => removeFromFavorites(game.id)}
                            className="text-[#F6F7F8]/70 transition-colors hover:text-red-500"
                            aria-label="Remover dos favoritos"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {game.title}
                        </h3>
                        <p className="mb-4 text-sm text-[#F6F7F8]/70">
                          {game.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <Link href={`/jogo/${game.id}`}>
                            <button className="flex items-center rounded-br-xl rounded-tl-xl bg-[#019EC2] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#198097]">
                              <PlayCircle size={16} className="mr-2" />
                              Jogar agora
                            </button>
                          </Link>
                          <Botaocora />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 rounded-full bg-[#019EC2]/10 p-6">
                  <Heart size={64} className="text-[#019EC2]/50" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-white">
                  Nenhum favorito encontrado
                </h2>
                <p className="mb-8 max-w-md text-[#F6F7F8]/70">
                  Explore nosso catálogo e adicione jogos aos seus favoritos
                  para acessá-los rapidamente.
                </p>
                <Link href="/catalogo">
                  <button className="h-[45px] w-[200px] rounded-br-2xl rounded-tl-2xl bg-[#019EC2] text-lg font-bold text-[#F6F7F8] hover:bg-[#198097]">
                    Explorar catálogo
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {favorites.length > 0 && recommendedGames.length > 0 && (
          <div className="bg-black/30 py-12">
            <div className="container mx-auto px-6">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                <span className="text-[#019EC2]">Recomendados</span> para você
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recommendedGames.map((game) => (
                  <div
                    key={game.id}
                    className="group relative overflow-hidden rounded-lg bg-[#010B13] shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={game.coverImage}
                        width={400}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={game.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <span className="mb-2 inline-block rounded-full bg-[#019EC2]/20 px-3 py-1 text-xs font-medium text-[#019EC2]">
                        {game.genre}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {game.title}
                      </h3>
                      <div className="mt-3 flex items-center justify-between">
                        <Link href={`/jogo/${game.id}`}>
                          <button className="flex items-center rounded-br-xl rounded-tl-xl bg-[#019EC2]/20 px-3 py-1 text-sm font-medium text-white transition-all hover:bg-[#019EC2]/40">
                            Ver detalhes
                          </button>
                        </Link>
                        <Botaocora />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-0 w-full">
        <Rodape />
      </div>
    </div>
  );
};

export default Favoritos;
