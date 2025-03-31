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
    capajogo: "/red-dead.jpg",
    descricao:
      "Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimoradopara PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.",
  },
  {
    id: 2,
    nomejogo: "Stardew Valley",
    capajogo: "/stardew-valley-banner.jpg",
    descricao:
      "Stardew Valley é um RPG sem fim da vida no campo! Você herdou a antiga fazenda de seu avô no Vale do Orvalho. Equipado com ferramentas de segunda mão e algumas moedas, você irá começar sua nova vida. Será que você consegue aprender a viver da terra e transformar esses campos absurdamente vegetados em uma casa próspera?",
  },
  {
    id: 3,
    nomejogo: "Cuphead",
    capajogo: "/cuphead-banner.jpg",
    descricao:
      "Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz.",
  },
];

export default destaque;
