"use client";
import {
  Play,
  Download,
  Calendar,
  Users,
  // Zap,
  // Target,
  // Award,
  Star,
  // Clock,
  // GamepadIcon,
  Volume2,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import Link from "next/link";
import { IGames } from "@/app/interface/IGames";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getGames } from "@/app/services/game/get";

const JogoCard = () => {
  const params = useParams();
  const { id } = params || {};
  const [games, setGames] = useState<IGames | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] =
    useState<string>("/notfound(3).png");

  useEffect(() => {
    const loadGame = async () => {
      try {
        const jogos = await getGames();
        const foundGames = jogos.find((g) => Number(g.id_game) === Number(id));
        setGames(foundGames || null);
      } catch (err) {
        setError("Erro ao carregar o produto.");
        console.error(err);
      }
    };
    loadGame();
  }, [id]);

  const gameImages = [
    "/notfound(3).png",
    "/notfound(2).png",
    "/notfound(1).png",
    "/notfound(4).jpg",
    "/notfound.jpeg",
  ];

  return (
    <div className="min-h-screen bg-[#0B1426] pb-12 text-white">
      {/* Header com rating */}
      <div className="container mx-auto px-6 pt-8">
        <div className="mb-4 flex items-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
          ))}
          <Star className="h-5 w-5 text-gray-600" />
          <span className="ml-2 font-semibold text-yellow-400">4.8</span>
        </div>

        {/* Título Principal */}
        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {games?.titulo || "God of War Ragnarök"}
        </h1>

        {/* Ícones de informações */}
        <div className="mb-12 flex items-center space-x-4 text-gray-400">
          <Users className="h-5 w-5" />
          <Calendar className="h-5 w-5" />
          <Download className="h-5 w-5" />
          <span className="text-sm">•••</span>
        </div>
      </div>

      {/* Layout Principal */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Coluna Principal - Player e Thumbnails */}
          <div className="space-y-6 lg:col-span-2">
            {/* Player Principal */}
            <div className="group relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-gray-700 bg-black md:h-[500px]">
                <Image
                  src={selectedImage}
                  alt="Game Screenshot"
                  fill
                  className="object-cover"
                />

                {/* Overlay do Player */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                      <Play className="h-8 w-8 fill-current text-white" />
                    </button>
                  </div>
                </div>

                {/* Texto overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                      A HALLMARK OF EXCELLENCE
                    </h2>
                    <p className="text-lg text-gray-300">DESTRUCTOID</p>
                  </div>
                </div>

                {/* Controles do Player */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center space-x-4">
                    <button>
                      <Play className="h-5 w-5" />
                    </button>
                    <span className="text-sm">0:00 / 0:30</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button>
                      <Volume2 className="h-5 w-5" />
                    </button>
                    <button>
                      <Maximize className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails Gallery */}
            <div className="relative">
              <div className="flex items-center space-x-4">
                <button className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-gray-700">
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex flex-1 space-x-4 overflow-hidden">
                  {gameImages.map((src, index) => (
                    <div
                      key={index}
                      className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 ${
                        selectedImage === src ? "ring-2 ring-[#019EC2]" : ""
                      }`}
                      onClick={() => setSelectedImage(src)}
                    >
                      <Image
                        src={src}
                        width={120}
                        height={80}
                        alt={`Thumbnail ${index + 1}`}
                        className={`rounded-lg object-cover transition-all duration-300 ${
                          selectedImage === src
                            ? "scale-105 opacity-100"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <button className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-gray-700">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Informações do Jogo */}
          <div className="space-y-6">
            {/* Game Cover */}
            <div className="relative">
              <Image
                src={`http://localhost:8081/games/imagens/${
                  games?.imagem || "default.jpg"
                }`}
                width={400}
                height={240}
                alt="Game Cover"
                className="h-60 w-full rounded-2xl object-cover"
              />
            </div>

            {/* Sobre o Jogo */}
            <div className="rounded-2xl border border-gray-700 bg-[#1A2332] p-6">
              <h3 className="mb-4 text-xl font-bold text-[#019EC2]">
                Sobre o Jogo
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                {games?.descricao ||
                  "God of War Ragnarök segue Kratos e seu filho Atreus enquanto se preparam para o iminente Ragnarök. Juntos, pai e filho devem aventurar-se pelos Nove Reinos em busca de respostas enquanto as forças Asgard se preparam para a batalha profetizada que encerrará o mundo. Ao longo da jornada, eles vão explorar paisagens míticas deslumbrantes, enfrentar seus destinos, enquanto Atreus busca entender seu papel como Loki."}
              </p>

              {/* Características */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">Ação em tempo real</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">Sistema de progressão</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  <span className="text-gray-300">
                    Conquistas desbloqueáveis
                  </span>
                </div>
              </div>

              {/* Botão Jogar */}
              <Link href="/resgate_chave">
                <button className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#019EC2] px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-[#017A9B]">
                  <Play className="h-5 w-5 fill-current" />
                  <span>Jogar Agora</span>
                </button>
              </Link>
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/20 p-4">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JogoCard;
