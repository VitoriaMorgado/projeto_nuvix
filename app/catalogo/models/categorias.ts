interface Jogoo {
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

const jogoss: Jogoo[] = [
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
]
 
export default jogoss;