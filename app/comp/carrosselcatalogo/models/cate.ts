export interface Cate {
  id: number;
  genre: string;
  jogodestaque: string;
}

const jogoscategoria: Cate[] = [
  {
    id: 1,
    genre: "SIMULAÇÃO",
    jogodestaque: "The Sims",
  },
  {
    id: 2,
    genre: "TERROR",
    jogodestaque: "Terror",
  },
  {
    id: 3,
    genre: "COPERATIVO",
    jogodestaque: "Cuphead",
  },
  {
    id: 4,
    genre: "CASUAL",
    jogodestaque: "Stardew Valley",
  },
  {
    id: 5,
    genre: "LUTA",
    jogodestaque: "Devil May Cry 5",
  },
  {
    id: 6,
    genre: "FUTURISTA",
    jogodestaque: "Cyberpunk 2077",
  },
  {
    id: 7,
    genre: "RPG",
    jogodestaque: "Honkai Star Rail",
  },
];

export default jogoscategoria;
