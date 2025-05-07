export interface Cate {
  id: number;
  genre: string;
  jogodestaque: string;
  capacate: string;
}

const jogoscategoria: Cate[] = [
  {
    id: 1,
    genre: "SIMULAÇÃO",
    jogodestaque: "The Sims",
    capacate: "/card.simu.jpg",
  },
  {
    id: 2,
    genre: "TERROR",
    jogodestaque: "Terror",
    capacate: "/card.terror.jpg",
  },
  {
    id: 3,
    genre: "COPERATIVO",
    jogodestaque: "Cuphead",
    capacate: "/card.cop.png",
  },
  {
    id: 4,
    genre: "CASUAL",
    jogodestaque: "Stardew Valley",
    capacate: "/card.casual.jpg",
  },
  {
    id: 5,
    genre: "LUTA",
    jogodestaque: "Devil May Cry 5",
    capacate: "/card.luta.jpg",
  },
  {
    id: 6,
    genre: "FUTURISTA",
    jogodestaque: "Cyberpunk 2077",
    capacate: "/card.futu.jpg",
  },
  {
    id: 7,
    genre: "RPG",
    jogodestaque: "Honkai Star Rail",
    capacate: "/card.rpg.png",
  },
];

export default jogoscategoria;
