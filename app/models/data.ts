import imgod1 from "@/public/god.jpg";
import imgod2 from "@/public/god6.jpg";
import imgod3 from "@/public/god3.jpg";
import imgod4 from "@/public/god4.jpg";
import imgod5 from "@/public/god5.jpg";
import imgtale1 from "@/public/tale1.jpg";
import imgtale2 from "@/public/tale2.jpg";
import imgtale3 from "@/public/tale3.jpg";
import imgtale4 from "@/public/tale4.jpg";
import imgtale5 from "@/public/tale5.jpg";
import imgresi1 from "@/public/resi1.jpg";
import imgresi2 from "@/public/resi2.jpg";
import imgresi3 from "@/public/resi3.jpg";
import imgresi4 from "@/public/resi4.jpg";
import imgresi5 from "@/public/resi5.jpg";
import imgittwo1 from "@/public/ittwo1.jpg";
import imgittwo2 from "@/public/ittwo2.jpg";
import imgittwo3 from "@/public/ittwo3.jpg";
import imgittwo4 from "@/public/ittwo4.jpg";
import imgittwo5 from "@/public/ittwo5.jpg";
import imgbuck1 from "@/public/buck1.jpg";
import imgbuck2 from "@/public/buck2.jpg";
import imgbuck3 from "@/public/buck3.jpg";
import imgbuck4 from "@/public/buck4.jpg";
import imgbuck5 from "@/public/buck5.jpg";
import imghori1 from "@/public/hori1.jpg";
import imghori2 from "@/public/hori2.jpg";
import imghori3 from "@/public/hori3.jpg";
import imghori4 from "@/public/hori4.jpg";
import imghori5 from "@/public/hori5.jpg";
import capagod from "@/public/god2.jpg";
import capatale from "@/public/tale.jpg";
import caparesident from "@/public/resi.jpg";
import capaittwo from "@/public/ittwo.jpg";
import capabuck from "@/public/buck.jpg";
import capahorizon from "@/public/hori.jpg";

export interface Jogo {
  id: number;
  nome: string;
  video: string;
  imagens: string[];
  descricao: string;
  capa: string; // Adicionado campo para a imagem de capa
}

const jogos: Jogo[] = [
  {
    id: 1,
    nome: "God of War Ragnarök",
    descricao:
      "God of War Ragnarök segue Kratos e seu filho Atreus enquanto se preparam para o iminente fim do mundo, o Ragnarok. Com a ameaça dos deuses e criaturas mitológicas, os dois embarcam em uma jornada por nove reinos para enfrentar seu destino. Kratos lida com seu passado, enquanto Atreus busca entender seu papel como Loki.",
    video: "/videogod.webm",
    imagens: [imgod1.src, imgod2.src, imgod3.src, imgod4.src, imgod5.src],
    capa: capagod.src,
  },
  {
    id: 2,
    nome: "Ale E Tale",
    descricao:
      "Ale e Tale é um jogo de aventura e exploração, onde os jogadores controlam Ale e Tale, dois personagens com habilidades diferentes, enquanto desvendam mistérios em um mundo mágico.",
    video: "/videotale.webm",
    imagens: [
      imgtale1.src,
      imgtale2.src,
      imgtale3.src,
      imgtale4.src,
      imgtale5.src,
    ],
    capa: capatale.src,
  },
  {
    id: 3,
    nome: "Resident Evil 4",
    descricao:
      "Resident Evil 4 segue Leon S. Kennedy, enviado para resgatar a filha do presidente sequestrada por um culto na Espanha. Ele enfrenta inimigos possuídos enquanto explora aldeias, resolve quebra-cabeças e combate criaturas ameaçadoras. O jogo é conhecido por sua jogabilidade intensa, com câmera sobre o ombro e foco em ação e survival horror.",
    video: "/videoresi.webm",
    imagens: [
      imgresi1.src,
      imgresi2.src,
      imgresi3.src,
      imgresi4.src,
      imgresi5.src,
    ],
    capa: caparesident.src,
  },
  {
    id: 4,
    nome: "It Takes Two",
    descricao:
      "It Takes Two é um jogo cooperativo onde um casal, Cody e May, é transformado em bonecos e precisa trabalhar juntos para superar desafios em mundos fantásticos. O jogo foca em colaboração, com quebra-cabeças e mecânicas únicas, enquanto explora temas de relacionamento e reconciliação.",
    video: "/videoittwo.webm",
    imagens: [
      imgittwo1.src,
      imgittwo2.src,
      imgittwo3.src,
      imgittwo4.src,
      imgittwo5.src,
    ],
    capa: capaittwo.src,
  },
  {
    id: 5,
    nome: "Buckshot Roulette",
    descricao:
      "Buckshot Roulette é um jogo de ação com elementos de roguelike, onde os jogadores enfrentam desafios imprevisíveis a cada rodada, combinando sorte e estratégia. O objetivo é sobreviver o máximo possível em uma roleta cheia de riscos e inimigos.",
    video: "/videobuck.webm",
    imagens: [
      imgbuck1.src,
      imgbuck2.src,
      imgbuck3.src,
      imgbuck4.src,
      imgbuck5.src,
    ],
    capa: capabuck.src,
  },
  {
    id: 6,
    nome: "Horizon Zero Dawn",
    descricao:
      "Horizon Zero Dawn é um jogo de ação e aventura ambientado em um mundo pós-apocalíptico, onde a Terra é dominada por máquinas. O jogador controla Aloy, uma caçadora e arqueira, enquanto ela explora o mundo, desvenda mistérios sobre seu passado e enfrenta criaturas robóticas.",
    video: "/videohori.webm",
    imagens: [
      imghori1.src,
      imghori2.src,
      imghori3.src,
      imghori4.src,
      imghori5.src,
    ],
    capa: capahorizon.src,
  },
];

export default jogos;
