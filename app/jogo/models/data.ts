export interface Jogo {
  id: number;
  nome: string;
  video: string;
  imagens: string[];
  descricao: string;
  capa: string;
  rating: number;
}

const jogos: Jogo[] = [
  {
    id: 1,
    nome: "God of War Ragnarök",
    descricao:
      "God of War Ragnarök segue Kratos e seu filho Atreus enquanto se preparam para o iminente fim do mundo, o Ragnarok. Com a ameaça dos deuses e criaturas mitológicas, os dois embarcam em uma jornada por nove reinos para enfrentar seu destino. Kratos lida com seu passado, enquanto Atreus busca entender seu papel como Loki.",
    video: "/video_promo_godofwar.webm",
    imagens: [
      "/demo_1_godofwar.jpg",
      "/demo_2_godofwar.jpg",
      "/demo_3_godofwar.jpg",
      "/demo_4_godofwar.jpg",
      "/demo_5_godofwar.jpg",
    ],
    capa: "/capa_jogo_godofwar.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    nome: "Ale E Tale",
    descricao:
      "Ale e Tale é um jogo de aventura e exploração, onde os jogadores controlam Ale e Tale, dois personagens com habilidades diferentes, enquanto desvendam mistérios em um mundo mágico.",
    video: "/videoaletaletavern.webm",
    imagens: [
      "/demo_1_aleetaletavern.jpg",
      "/demo_2_aleetaletavern.jpg",
      "/demo_3_aleetaletavern.jpg",
      "/demo_4_aleetaletavern.jpg",
      "/demo_5_aleetaletavern.jpg",
    ],
    capa: "/capa_jogo_aleetaletavern.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    nome: "Resident Evil 4",
    descricao:
      "Resident Evil 4 segue Leon S. Kennedy, enviado para resgatar a filha do presidente sequestrada por um culto na Espanha. Ele enfrenta inimigos possuídos enquanto explora aldeias, resolve quebra-cabeças e combate criaturas ameaçadoras. O jogo é conhecido por sua jogabilidade intensa, com câmera sobre o ombro e foco em ação e survival horror.",
    video: "/video_promo_residentevil4.webm",
    imagens: [
      "/demo_1_residentevil4.jpg",
      "/demo_2_residentevil4.jpg",
      "/demo_3_residentevil4.jpg",
      "/demo_4_residentevil4.jpg",
      "/demo_5_residentevil4.jpg",
    ],
    capa: "/capa_jogo_residentevil4.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    nome: "It Takes Two",
    descricao:
      "It Takes Two é um jogo cooperativo onde um casal, Cody e May, é transformado em bonecos e precisa trabalhar juntos para superar desafios em mundos fantásticos. O jogo foca em colaboração, com quebra-cabeças e mecânicas únicas, enquanto explora temas de relacionamento e reconciliação.",
    video: "/video_promo_ittaketwo.webm",
    imagens: [
      "/demo_1_ittakestwo.jpg",
      "/demo_2_ittakestwo.jpg",
      "/demo_3_ittakestwo.jpg",
      "/demo_4_ittakestwo.jpg",
      "/demo_5_ittakestwo.jpg",
    ],
    capa: "/capa_jogo_Ittakestwo.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    nome: "Buckshot Roulette",
    descricao:
      "Buckshot Roulette é um jogo de ação com elementos de roguelike, onde os jogadores enfrentam desafios imprevisíveis a cada rodada, combinando sorte e estratégia. O objetivo é sobreviver o máximo possível em uma roleta cheia de riscos e inimigos.",
    video: "/video_promo_buckshot.webm",
    imagens: [
      "/demo_1_buckshot.jpg",
      "/demo_2_buckshot.jpg",
      "/demo_3_buckshot.jpg",
      "/demo_4_buckshot.jpg",
      "/demo_5_buckshot.jpg",
    ],
    capa: "/capa_jogo_buckshot.jpg",
    rating: 4.8,
  },
  {
    id: 6,
    nome: "Horizon Zero Dawn",
    descricao:
      "Horizon Zero Dawn é um jogo de ação e aventura ambientado em um mundo pós-apocalíptico, onde a Terra é dominada por máquinas. O jogador controla Aloy, uma caçadora e arqueira, enquanto ela explora o mundo, desvenda mistérios sobre seu passado e enfrenta criaturas robóticas.",
    video: "/video_promo_horizonzerodawn.webm",
    imagens: [
      "/demo_1_horizonzerodawn.jpg",
      "/demo_2_horizonzerodawn.jpg",
      "/demo_3_horizonzerodawn.jpg",
      "/demo_4_horizonzerodawn.jpg",
      "/demo_5_horizonzerodawn.jpg",
    ],
    capa: "/capa_jogo_horizonzerodawn.jpg",
    rating: 4.8,
  },
];

export default jogos;
