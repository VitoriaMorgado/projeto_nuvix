"use client";

import React, { useState, useEffect } from "react";
import gameCatalog from "./models/jogos";
import Image from "next/image";
import Link from "next/link";

interface CatalogoProps {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  publisher: string;
  ageRating: string;
  description: string;
  coverImage?: string;
  price: number;
  discount: number;
  featured: boolean;
  platforms: string[];
  tags: string[];
}

// Interface para as opções de filtro
interface FilterOptions {
  genre: string;
  ageRating: string;
  priceRange: [number, number];
  sortBy: "releaseDate" | "price" | "popularity";
  sortOrder: "asc" | "desc";
}

// Componente principal
const Catalogo = () => {
  // Estado para busca
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Estado para opções de filtro
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    genre: "",
    ageRating: "",
    priceRange: [0, 500],
    sortBy: "price",
    sortOrder: "asc",
  });

  // Estado para jogos
  const [games] = useState<CatalogoProps[]>(gameCatalog);

  // Estado para jogos filtrados
  const [filteredGames, setFilteredGames] = useState<CatalogoProps[]>([]);

  // Extrair valores únicos para as opções de filtro
  const genres = Array.from(new Set(games.map((game) => game.genre)));
  const ageRatings = Array.from(new Set(games.map((game) => game.ageRating)));

  // Aplicar filtros e busca
  useEffect(() => {
    // Filtrar jogos baseado na busca e opções de filtro
    let result = [...games];

    // Aplicar filtro de busca
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(query) ||
          game.description.toLowerCase().includes(query) ||
          game.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Aplicar filtro de gênero
    if (filterOptions.genre) {
      result = result.filter((game) => game.genre === filterOptions.genre);
    }

    // Aplicar filtro de classificação etária
    if (filterOptions.ageRating) {
      result = result.filter(
        (game) => game.ageRating === filterOptions.ageRating,
      );
    }

    // Aplicar filtro de faixa de preço
    result = result.filter((game) => {
      const finalPrice = game.price * (1 - game.discount);
      return (
        finalPrice >= filterOptions.priceRange[0] &&
        finalPrice <= filterOptions.priceRange[1]
      );
    });

    // Aplicar ordenação
    result.sort((a, b) => {
      let valueA, valueB;

      switch (filterOptions.sortBy) {
        case "releaseDate":
          valueA = new Date(a.releaseDate).getTime();
          valueB = new Date(b.releaseDate).getTime();
          break;
        case "price":
          valueA = a.price * (1 - a.discount);
          valueB = b.price * (1 - b.discount);
          break;
        case "popularity":
          // Usando o status "featured" como proxy para popularidade
          valueA = a.featured ? 1 : 0;
          valueB = b.featured ? 1 : 0;
          break;
        default:
          valueA = a.price * (1 - a.discount);
          valueB = b.price * (1 - b.discount);
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return filterOptions.sortOrder === "asc"
          ? (valueA as string).localeCompare(valueB as string)
          : (valueB as string).localeCompare(valueA as string);
      } else {
        return filterOptions.sortOrder === "asc"
          ? (valueA as number) - (valueB as number)
          : (valueB as number) - (valueA as number);
      }
    });

    setFilteredGames(result);
  }, [games, searchQuery, filterOptions]);

  // Manipulador para mudanças nos filtros
  const handleFilterChange = (
    field: keyof FilterOptions,
    value:
      | string
      | number
      | [number, number]
      | "releaseDate"
      | "price"
      | "popularity"
      | "asc"
      | "desc",
  ) => {
    setFilterOptions((prev) => ({ ...prev, [field]: value }));
  };

  // Formatar exibição de preço
  const formatPrice = (price: number, discount: number) => {
    const finalPrice = price * (1 - discount);

    if (price === 0) {
      return "Grátis";
    }

    if (discount > 0) {
      return (
        <div>
          <span className="mr-2 text-sm text-[#F6F7F8]/60 line-through">
            R$ {price.toFixed(2)}
          </span>
          <span className="font-bold text-[#F6F7F8]">
            R$ {finalPrice.toFixed(2)}
          </span>
          <span className="ml-2 rounded-full bg-[#019EC2] px-2 py-1 text-xs text-[#F6F7F8]">
            -{(discount * 100).toFixed(0)}%
          </span>
        </div>
      );
    }

    return <span className="font-bold text-[#F6F7F8]">R$ {price.toFixed(2)}</span>;
  };

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] placeholder-[#F6F7F8]/60 focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <select
                value={filterOptions.genre}
                onChange={(e) => handleFilterChange("genre", e.target.value)}
                className="rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              >
                <option value="">Todos os Gêneros</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              <select
                value={filterOptions.ageRating}
                onChange={(e) =>
                  handleFilterChange("ageRating", e.target.value)
                }
                className="rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              >
                <option value="">Todas as Classificações</option>
                {ageRatings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
              <select
                value={filterOptions.sortBy}
                onChange={(e) =>
                  handleFilterChange(
                    "sortBy",
                    e.target.value as
                      | "releaseDate"
                      | "price"
                      | "popularity",
                  )
                }
                className="rounded-lg bg-[#1E293B] border border-[#019EC2]/30 p-2 text-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#019EC2] focus:border-transparent"
              >
                <option value="releaseDate">Data de Lançamento</option>
                <option value="price">Preço</option>
                <option value="popularity">Popularidade</option>
              </select>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterOptions({
                    genre: "",
                    ageRating: "",
                    priceRange: [0, 500],
                    sortBy: "price",
                    sortOrder: "asc",
                  });
                }}
                className="rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-4 py-2 text-[#F6F7F8] font-bold hover:bg-[#198097] transition-all duration-300 transform hover:scale-105 md:col-span-1"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="overflow-hidden rounded-lg bg-black/30 shadow-lg transition-transform duration-300 hover:scale-105 hover:transform border border-[#019EC2]/20"
              >
                <div className="relative h-40 bg-[#1E293B]">
                  <div className="absolute inset-0 flex text-[#F6F7F8]/60">
                    <Image
                      src={game.coverImage || "/default-image.jpg"}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                      alt={game.title || "Imagem do jogo"}
                    />
                  </div>
                  {game.discount > 0 && (
                    <div className="absolute right-2 top-2 rounded-full bg-[#019EC2] px-2 py-1 text-sm font-bold text-[#F6F7F8]">
                      -{(game.discount * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="mb-1 truncate text-lg font-bold text-[#F6F7F8]">
                      {game.title}
                    </h3>
                    <span className="rounded-full bg-[#1E293B] border border-[#019EC2]/30 px-2 py-1 text-xs text-[#F6F7F8]/70">
                      {game.ageRating}
                    </span>
                  </div>
                  <p className="mb-2 text-xs text-[#F6F7F8]/70">
                    {game.publisher} • {game.genre}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {game.platforms.map((platform) => (
                      <span
                        key={`${game.id}-${platform}`}
                        className="rounded-full bg-[#1E293B] border border-[#019EC2]/30 px-2 py-1 text-xs text-[#F6F7F8]/70"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      {formatPrice(game.price, game.discount)}
                    </div>
                    <Link href="/jogo">
                      <button className="rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-3 py-1 text-sm text-[#F6F7F8] font-bold hover:bg-[#198097] transition-all duration-300 transform hover:scale-105">
                        Detalhes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-black/30 border border-[#019EC2]/20 p-10 text-center">
            <p className="text-xl text-[#F6F7F8]/90">
              Nenhum jogo encontrado com os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilterOptions({
                  genre: "",
                  ageRating: "",
                  priceRange: [0, 500],
                  sortBy: "price",
                  sortOrder: "asc",
                });
              }}
              className="mt-4 rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-4 py-2 text-[#F6F7F8] font-bold hover:bg-[#198097] transition-all duration-300 transform hover:scale-105"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;