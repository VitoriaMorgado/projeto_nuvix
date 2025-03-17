export interface Cata {
  id: number;
  nome: string;
  imagens: string[];
}

const jogosc: Cata[] = [
  {
    id: 1,
    nome: "Cuphead",
    imagens: ["/card.cop.png"],
  },
  {
    id: 2,
    nome: "Red Dead",
    imagens: ["/card.acao.png"],
  },
  {
    id: 3,
    nome: "Cyberpunk",
    imagens: ["/card.futu.jpg"],
  },
  {
    id: 4,
    nome: "Resident Evil",
    imagens: ["/hero_capsule(2).jpg"],
  },
];

export default jogosc;
