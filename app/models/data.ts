export interface Jogo {
  id: number;
  nome: string;
  video: string;
  imagens: string[];
  descricao: string;
  capa: string;
}

const jogos: Jogo[] = [
  {
    id: 1,
    nome: "God of War Ragnarök",
    descricao:
      "God of War Ragnarök segue Kratos e seu filho Atreus enquanto se preparam para o iminente fim do mundo, o Ragnarok. Com a ameaça dos deuses e criaturas mitológicas, os dois embarcam em uma jornada por nove reinos para enfrentar seu destino. Kratos lida com seu passado, enquanto Atreus busca entender seu papel como Loki.",
    video: "/videogod.webm",
    imagens: ["/god.jpg", "/god6.jpg", "/god3.jpg", "/god4.jpg", "/god5.jpg"],
    capa: "/god2.jpg",
  },
  {
    id: 2,
    nome: "Ale E Tale",
    descricao:
      "Ale e Tale é um jogo de aventura e exploração, onde os jogadores controlam Ale e Tale, dois personagens com habilidades diferentes, enquanto desvendam mistérios em um mundo mágico.",
    video: "/videotale.webm",
    imagens: [
      "/tale1.jpg",
      "/tale2.jpg",
      "/tale3.jpg",
      "/tale4.jpg",
      "/tale5.jpg",
    ],
    capa: "/tale.jpg",
  },
  {
    id: 3,
    nome: "Resident Evil 4",
    descricao:
      "Resident Evil 4 segue Leon S. Kennedy, enviado para resgatar a filha do presidente sequestrada por um culto na Espanha. Ele enfrenta inimigos possuídos enquanto explora aldeias, resolve quebra-cabeças e combate criaturas ameaçadoras. O jogo é conhecido por sua jogabilidade intensa, com câmera sobre o ombro e foco em ação e survival horror.",
    video: "/videoresi.webm",
    imagens: [
      "/resi1.jpg",
      "/resi2.jpg",
      "/resi3.jpg",
      "/resi4.jpg",
      "/resi5.jpg",
    ],
    capa: "/resi.jpg",
  },
  {
    id: 4,
    nome: "It Takes Two",
    descricao:
      "It Takes Two é um jogo cooperativo onde um casal, Cody e May, é transformado em bonecos e precisa trabalhar juntos para superar desafios em mundos fantásticos. O jogo foca em colaboração, com quebra-cabeças e mecânicas únicas, enquanto explora temas de relacionamento e reconciliação.",
    video: "/videoittwo.webm",
    imagens: [
      "/ittwo1.jpg",
      "/ittwo2.jpg",
      "/ittwo3.jpg",
      "/ittwo4.jpg",
      "/ittwo5.jpg",
    ],
    capa: "/ittwo.jpg",
  },
  {
    id: 5,
    nome: "Buckshot Roulette",
    descricao:
      "Buckshot Roulette é um jogo de ação com elementos de roguelike, onde os jogadores enfrentam desafios imprevisíveis a cada rodada, combinando sorte e estratégia. O objetivo é sobreviver o máximo possível em uma roleta cheia de riscos e inimigos.",
    video: "/videobuck.webm",
    imagens: [
      "/buck1.jpg",
      "/buck2.jpg",
      "/buck3.jpg",
      "/buck4.jpg",
      "/buck5.jpg",
    ],
    capa: "/buck.jpg",
  },
  {
    id: 6,
    nome: "Horizon Zero Dawn",
    descricao:
      "Horizon Zero Dawn é um jogo de ação e aventura ambientado em um mundo pós-apocalíptico, onde a Terra é dominada por máquinas. O jogador controla Aloy, uma caçadora e arqueira, enquanto ela explora o mundo, desvenda mistérios sobre seu passado e enfrenta criaturas robóticas.",
    video: "/videohori.webm",
    imagens: [
      "/hori1.jpg",
      "/hori2.jpg",
      "/hori3.jpg",
      "/hori4.jpg",
      "/hori5.jpg",
    ],
    capa: "/hori.jpg",
  },
];

export default jogos;
