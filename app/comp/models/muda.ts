export interface Muda {
  id: number;
  nomejogo: string;
  capajogo: string;
  descricao: string;
}

const destaque: Muda[] = [
  {
    id: 1,
    nomejogo: "Read Dead",
    capajogo: "/card.acao.png",
    descricao:
      "Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimoradopara PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.",
  },
  {
    id: 2,
    nomejogo: "Stardew Valley",
    capajogo: "/card.casual.jpg",
    descricao: "Stardew Valley é um jogo de simulação de fazenda",
  },
  {
    id: 3,
    nomejogo: "Cuphead",
    capajogo: "/card.cop.png",
    descricao:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default destaque;
