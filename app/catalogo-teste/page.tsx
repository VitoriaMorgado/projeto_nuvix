'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define types
interface Game {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  publisher: string;
  ageRating: string;
  description: string;
  coverImage: string;
  price: number;
  discount: number;
  featured: boolean;
  platforms: string[];
  tags: string[];
}

interface FilterOptions {
  genre: string;
  platform: string;
  ageRating: string;
  priceRange: [number, number];
  sortBy: 'title' | 'releaseDate' | 'price' | 'popularity';
  sortOrder: 'asc' | 'desc';
}

const GameCatalog: React.FC = () => {
  // Sample data
  const [games] = useState<Game[]>([
    {
      id: '1',
      title: 'Cyberpunk 2077',
      genre: 'RPG',
      releaseDate: '2020-12-10',
      publisher: 'CD Projekt',
      ageRating: '18+',
      description: 'Um RPG de mundo aberto com uma história imersiva passada em Night City, uma megalópole obcecada por poder, glamour e modificações corporais.',
      coverImage: '/games/cyberpunk.jpg',
      price: 199.90,
      discount: 0.25,
      featured: true,
      platforms: ['PC', 'PlayStation', 'Xbox'],
      tags: ['RPG', 'Futurístico', 'Mundo Aberto', 'Ação']
    },
    {
      id: '2',
      title: 'FIFA 23',
      genre: 'Esportes',
      releaseDate: '2022-09-30',
      publisher: 'EA Sports',
      ageRating: 'L',
      description: 'O jogo de futebol mais popular do mundo, com times reais, jogadores e competições oficiais.',
      coverImage: '/games/fifa23.jpg',
      price: 299.90,
      discount: 0.15,
      featured: true,
      platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'],
      tags: ['Esportes', 'Futebol', 'Multijogador']
    },
    {
      id: '3',
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Aventura',
      releaseDate: '2017-03-03',
      publisher: 'Nintendo',
      ageRating: '10+',
      description: 'Uma aventura épica em um vasto mundo aberto. Explore o reino de Hyrule enquanto descobre mistérios e enfrenta desafios.',
      coverImage: '/games/zelda.jpg',
      price: 299.90,
      discount: 0,
      featured: false,
      platforms: ['Switch'],
      tags: ['Aventura', 'Mundo Aberto', 'Fantasia']
    },
    {
      id: '4',
      title: 'Minecraft',
      genre: 'Sandbox',
      releaseDate: '2011-11-18',
      publisher: 'Mojang',
      ageRating: 'L',
      description: 'Um jogo de construção e aventura que permite aos jogadores criar mundos com blocos e explorar, construir e sobreviver.',
      coverImage: '/games/minecraft.jpg',
      price: 99.90,
      discount: 0,
      featured: false,
      platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'],
      tags: ['Sandbox', 'Construção', 'Multijogador', 'Aventura']
    },
    {
      id: '5',
      title: 'God of War: Ragnarök',
      genre: 'Ação-Aventura',
      releaseDate: '2022-11-09',
      publisher: 'Sony Interactive Entertainment',
      ageRating: '18+',
      description: 'Kratos e Atreus embarcam em uma jornada épica enfrentando deuses nórdicos e explorando os nove reinos.',
      coverImage: '/games/god-of-war.jpg',
      price: 349.90,
      discount: 0.10,
      featured: true,
      platforms: ['PlayStation'],
      tags: ['Ação', 'Aventura', 'Mitologia', 'Narrativo']
    },
    {
      id: '6',
      title: 'Fortnite',
      genre: 'Battle Royale',
      releaseDate: '2017-07-25',
      publisher: 'Epic Games',
      ageRating: '12+',
      description: 'Um jogo de batalha multiplayer online onde 100 jogadores lutam para ser o último sobrevivente.',
      coverImage: '/games/fortnite.jpg',
      price: 0,
      discount: 0,
      featured: false,
      platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'],
      tags: ['Battle Royale', 'Multijogador', 'Construção', 'Free-to-Play']
    },
  ]);

  // State for filter and search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    genre: '',
    platform: '',
    ageRating: '',
    priceRange: [0, 500],
    sortBy: 'title',
    sortOrder: 'asc'
  });
  
  // State for featured games
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  
  // State for filtered games
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  
  // Extract unique values for filter dropdowns
  const genres = Array.from(new Set(games.map(game => game.genre)));
  const platforms = Array.from(new Set(games.flatMap(game => game.platforms)));
  
  // Apply filters and search
  useEffect(() => {
    // Set featured games
    setFeaturedGames(games.filter(game => game.featured));
    
    // Filter games based on search and filter options
    let result = [...games];
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(game => 
        game.title.toLowerCase().includes(query) || 
        game.description.toLowerCase().includes(query) || 
        game.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply genre filter
    if (filterOptions.genre) {
      result = result.filter(game => game.genre === filterOptions.genre);
    }
    
    // Apply platform filter
    if (filterOptions.platform) {
      result = result.filter(game => game.platforms.includes(filterOptions.platform));
    }
    
    // Apply age rating filter
    if (filterOptions.ageRating) {
      result = result.filter(game => game.ageRating === filterOptions.ageRating);
    }
    
    // Apply price range filter
    result = result.filter(game => {
      const finalPrice = game.price * (1 - game.discount);
      return finalPrice >= filterOptions.priceRange[0] && finalPrice <= filterOptions.priceRange[1];
    });
    
    // Apply sorting
    result.sort((a, b) => {
      let valueA, valueB;
      
      switch (filterOptions.sortBy) {
        case 'title':
          valueA = a.title;
          valueB = b.title;
          break;
        case 'releaseDate':
          valueA = new Date(a.releaseDate).getTime();
          valueB = new Date(b.releaseDate).getTime();
          break;
        case 'price':
          valueA = a.price * (1 - a.discount);
          valueB = b.price * (1 - b.discount);
          break;
        case 'popularity':
          // For demonstration, using featured status as a proxy for popularity
          valueA = a.featured ? 1 : 0;
          valueB = b.featured ? 1 : 0;
          break;
        default:
          valueA = a.title;
          valueB = b.title;
      }
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return filterOptions.sortOrder === 'asc' 
          ? valueA.localeCompare(valueB) 
          : valueB.localeCompare(valueA);
      } else {
        return filterOptions.sortOrder === 'asc' 
          ? (valueA as number) - (valueB as number) 
          : (valueB as number) - (valueA as number);
      }
    });
    
    setFilteredGames(result);
  }, [games, searchQuery, filterOptions]);
  
  // Handler for filter changes
  const handleFilterChange = (field: keyof FilterOptions, value: unknown) => {
    setFilterOptions(prev => ({ ...prev, [field]: value }));
  };
  
  // Format price display
  const formatPrice = (price: number, discount: number) => {
    const finalPrice = price * (1 - discount);
    
    if (price === 0) {
      return 'Grátis';
    }
    
    if (discount > 0) {
      return (
        <div>
          <span className="text-gray-400 line-through text-sm mr-2">R$ {price.toFixed(2)}</span>
          <span className="text-white font-bold">R$ {finalPrice.toFixed(2)}</span>
          <span className="ml-2 bg-green-500 text-xs px-2 py-1 rounded-full text-white">-{(discount * 100).toFixed(0)}%</span>
        </div>
      );
    }
    
    return <span className="text-white font-bold">R$ {price.toFixed(2)}</span>;
  };

  return (
    <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-white">Nuvix Gaming</h1>
              <nav className="ml-8 hidden md:flex">
                <Link href="#" className="text-gray-300 hover:text-white px-3 py-2">Início</Link>
                <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 border-b-2 border-blue-500">Jogos</Link>
                <Link href="#" className="text-gray-300 hover:text-white px-3 py-2">Planos</Link>
                <Link href="#" className="text-gray-300 hover:text-white px-3 py-2">Suporte</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Entrar
              </button>
              <button className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0d1a26] to-[#193f60] py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Catálogo de Jogos</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Explore nossa coleção de jogos premium para todas as plataformas.
            Descubra novos mundos, aventuras e desafios.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Featured Games Carousel */}
        {featuredGames.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              Jogos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredGames.map(game => (
                <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="relative h-48 bg-gray-700">
                    {/* Placeholder for game cover image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {game.title} Cover
                    </div>
                    {game.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                        -{(game.discount * 100).toFixed(0)}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{game.publisher} • {game.genre}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        {formatPrice(game.price, game.discount)}
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
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
        <div className="bg-gray-800 rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar jogos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <select
                value={filterOptions.genre}
                onChange={(e) => handleFilterChange('genre', e.target.value)}
                className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos os Gêneros</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              <select
                value={filterOptions.platform}
                onChange={(e) => handleFilterChange('platform', e.target.value)}
                className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas as Plataformas</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
              <select
                value={filterOptions.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value as unknown)}
                className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="title">Nome</option>
                <option value="releaseDate">Data de Lançamento</option>
                <option value="price">Preço</option>
                <option value="popularity">Popularidade</option>
              </select>
              <select
                value={filterOptions.sortOrder}
                onChange={(e) => handleFilterChange('sortOrder', e.target.value as unknown)}
                className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
              </select>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="relative h-40 bg-gray-700">
                  {/* Placeholder for game cover image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {game.title} Cover
                  </div>
                  {game.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      -{(game.discount * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1 truncate">{game.title}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                      {game.ageRating}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{game.publisher} • {game.genre}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {game.platforms.map(platform => (
                      <span key={platform} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                        {platform}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      {formatPrice(game.price, game.discount)}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg transition-colors duration-200">
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 p-10 rounded-lg text-center">
            <p className="text-gray-300 text-xl">Nenhum jogo encontrado com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setFilterOptions({
                  genre: '',
                  platform: '',
                  ageRating: '',
                  priceRange: [0, 500],
                  sortBy: 'title',
                  sortOrder: 'asc'
                });
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Nuvix Gaming</h3>
              <p className="mb-4">A melhor plataforma de jogos online para os gamers mais exigentes.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Início</a></li>
                <li><a href="#" className="hover:text-white">Jogos</a></li>
                <li><a href="#" className="hover:text-white">Planos</a></li>
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Newsletter</h4>
              <p className="mb-4">Inscreva-se para receber novidades e promoções exclusivas.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-200">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p>&copy; 2025 Nuvix Gaming. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameCatalog;