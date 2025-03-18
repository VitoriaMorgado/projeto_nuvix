export interface Cata {
  id: number;
  nome: string;
  imagens: string;
}

const jogosc: Cata[] = [
  {
    id: 1,
    nome: "Read Dead",
    imagens: "./card.acao.png",
  },
  {
    id: 2,
    nome: "Stardew Valley",
    imagens: "./card.casual.jpg",
  },
  {
    id: 3,
    nome: "Cuphead",
    imagens: "./card.cop.png",
  },
  {
    id: 4,
    nome: "Cyberpunk",
    imagens: "./card.futu.jpg",
  },
  {
    id: 5,
    nome: "Devil May Cry",
    imagens: "./card.luta.jpg",
  },
  {
    id: 6,
    nome: "Honkai Star Rail",
    imagens: "./card.rpg.png",
  },
  {
    id: 7,
    nome: "Resident Evil 4",
    imagens: "./hero_capsule(2).jpg",
  },
  {
    id: 8,
    nome: "The Sims 4",
    imagens: "./hero_capsule(3).jpg",
  },
];

export default jogosc;
