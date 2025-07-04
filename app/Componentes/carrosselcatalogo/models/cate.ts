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
    capacate: "/card_principal_simulacao.jpg",
  },
  {
    id: 2,
    genre: "TERROR",
    jogodestaque: "Resident Evil 4",
    capacate: "/card_principal_terror.jpg",
  },
  {
    id: 3,
    genre: "COPERATIVO",
    jogodestaque: "Cuphead",
    capacate: "/card_principal_coperativo.png",
  },
  {
    id: 4,
    genre: "CASUAL",
    jogodestaque: "Stardew Valley",
    capacate: "/card_principal_casual.jpg",
  },
  {
    id: 5,
    genre: "LUTA",
    jogodestaque: "Devil May Cry 5",
    capacate: "/card_principal_luta.jpg",
  },
  {
    id: 6,
    genre: "FUTURISTA",
    jogodestaque: "Cyberpunk 2077",
    capacate: "/card_principal_futurista.jpg",
  },
  {
    id: 7,
    genre: "RPG",
    jogodestaque: "Honkai Star Rail",
    capacate: "/card_principal_rpg.png",
  },
];

export default jogoscategoria;
