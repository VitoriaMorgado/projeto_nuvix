"use client";

import React, { useState, useEffect } from "react";
import gameCatalog from "./models/jogos";
import Image from "next/image";

import Botaocora from "../catalogo2/botaocora";

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
  platform: string;
  ageRating: string;
  priceRange: [number, number];
  sortBy: "title" | "releaseDate" | "price" | "popularity";
  sortOrder: "asc" | "desc";
}

// Componente principal
const Catalogo = () => {
  // Estado para busca
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Estado para opções de filtro
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    genre: "",
    platform: "",
    ageRating: "",
    priceRange: [0, 500],
    sortBy: "title",
    sortOrder: "asc",
  });

  // Estado para jogos
  const [games] = useState<CatalogoProps[]>(gameCatalog);

  // Estado para jogos em destaque
  const [featuredGames, setFeaturedGames] = useState<CatalogoProps[]>([]);

  // Estado para jogos filtrados
  const [filteredGames, setFilteredGames] = useState<CatalogoProps[]>([]);

  // Extrair valores únicos para as opções de filtro
  const genres = Array.from(new Set(games.map((game) => game.genre)));
  const platforms = Array.from(
    new Set(games.flatMap((game) => game.platforms)),
  );
  const ageRatings = Array.from(new Set(games.map((game) => game.ageRating)));

  // Aplicar filtros e busca
  useEffect(() => {
    // Definir jogos em destaque
    setFeaturedGames(games.filter((game) => game.featured));

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

    // Aplicar filtro de plataforma
    if (filterOptions.platform) {
      result = result.filter((game) =>
        game.platforms.includes(filterOptions.platform),
      );
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
        case "title":
          valueA = a.title;
          valueB = b.title;
          break;
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
          valueA = a.title;
          valueB = b.title;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return filterOptions.sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
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
      | "title"
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
          <span className="mr-2 text-sm text-gray-400 line-through">
            R$ {price.toFixed(2)}
          </span>
          <span className="font-bold text-white">
            R$ {finalPrice.toFixed(2)}
          </span>
          <span className="ml-2 rounded-full bg-green-500 px-2 py-1 text-xs text-white">
            -{(discount * 100).toFixed(0)}%
          </span>
        </div>
      );
    }

    return <span className="font-bold text-white">R$ {price.toFixed(2)}</span>;
  };

return (
 <body>
  
    <div className="min-h-screen bg-gradient-to-b from-[#02030a] to-[#0E304A]">
      {/* Hero Banner */}
      <div className="mb-8 bg-gradient-to-r from-[#0d1a26] to-[#193f60] py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
            Catálogo de Jogos
          </h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-gray-300">
            Explore nossa coleção de jogos premium para todas as plataformas.
            Descubra novos mundos, aventuras e desafios.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Featured Games Carousel */}
        {featuredGames.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold text-white">
              Jogos em Destaque
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredGames.map((game) => (
                <div
                  key={game.id}
                  className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:transform"
                >
                  <div className="relative h-48 bg-gray-700">
                    {/* Placeholder para a imagem de capa do jogo */}
                    <div className="absolute inset-0 flex text-gray-500">
                      <Image
                        src={game.coverImage || "/default-image.jpg"} // Adiciona uma imagem padrão caso esteja indefinido
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                        alt={game.title || "Imagem do jogo"}
                      />
                    </div>
                    {game.discount > 0 && (
                      <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-sm font-bold text-white">
                        -{(game.discount * 100).toFixed(0)}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {game.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-400">
                      {game.publisher} • {game.genre}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        {formatPrice(game.price, game.discount)}
                      </div>
                      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8 rounded-lg bg-gray-800 p-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar jogos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <select
                value={filterOptions.genre}
                onChange={(e) => handleFilterChange("genre", e.target.value)}
                className="rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos os Gêneros</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              <select
                value={filterOptions.platform}
                onChange={(e) => handleFilterChange("platform", e.target.value)}
                className="rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas as Plataformas</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              <select
                value={filterOptions.ageRating}
                onChange={(e) =>
                  handleFilterChange("ageRating", e.target.value)
                }
                className="rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      | "title"
                      | "releaseDate"
                      | "price"
                      | "popularity",
                  )
                }
                className="rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="title">Nome</option>
                <option value="releaseDate">Data de Lançamento</option>
                <option value="price">Preço</option>
                <option value="popularity">Popularidade</option>
              </select>
              <select
                value={filterOptions.sortOrder}
                onChange={(e) =>
                  handleFilterChange(
                    "sortOrder",
                    e.target.value as "asc" | "desc",
                  )
                }
                className="rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
              </select>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterOptions({
                    genre: "",
                    platform: "",
                    ageRating: "",
                    priceRange: [0, 500],
                    sortBy: "title",
                    sortOrder: "asc",
                  });
                }}
                className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
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
                className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:transform"
              >
                <div className="relative h-40 bg-gray-700">
                  {/* Placeholder para a imagem de capa do jogo */}
                  <div className="absolute inset-0 flex text-gray-500">
                    <Image
                      src={game.coverImage || "/default-image.jpg"} // Adiciona uma imagem padrão caso esteja indefinido
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                      alt={game.title || "Imagem do jogo"}
                    />
                  </div>
                  {game.discount > 0 && (
                    <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-sm font-bold text-white">
                      -{(game.discount * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="mb-1 truncate text-lg font-bold text-white">
                      {game.title}
                    </h3>
                    <span className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300">
                      {game.ageRating}
                    </span>
                  </div>
                  <p className="mb-2 text-xs text-gray-400">
                    {game.publisher} • {game.genre}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {game.platforms.map((platform) => (
                      <span
                        key={`${game.id}-${platform}`}
                        className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      {formatPrice(game.price, game.discount)}
                    </div>
                    <button className="rounded-lg bg-blue-500 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-blue-600">
                      Detalhes
                    </button>
                    <Botaocora />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-gray-800 p-10 text-center">
            <p className="text-xl text-gray-300">
              Nenhum jogo encontrado com os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilterOptions({
                  genre: "",
                  platform: "",
                  ageRating: "",
                  priceRange: [0, 500],
                  sortBy: "title",
                  sortOrder: "asc",
                });
              }}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
</body>
  );
};
export default Catalogo;
