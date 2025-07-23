"use client";
import {
  Play,
  Star,
  Download,
  Calendar,
  Users,
  Zap,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { IGames } from "@/app/interface/IGames";

interface GameItemProps {
  games: IGames;
}

const JogoCard = ({ games }: GameItemProps) => {
  return (
    <>
      <div className="mt-[2%] min-h-screen bg-gradient-to-br from-[#02030a] to-[#0E304A] text-white">
        {/* Particles Background Effect */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse rounded-full bg-cyan-400 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#02030a] to-[#0E304A]"></div>

          {/* Navigation */}

          {/* Game Title Section */}
          <div className="relative z-10 px-6 py-12">
            <div className="mx-auto max-w-7xl">
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(games.rating) ? "fill-current text-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="font-semibold text-yellow-400">
                    {games.rating}
                  </span>
                </div>
                <div className="rounded-full from-[#02030a] to-[#0E304A] px-3 py-1 text-sm font-semibold">
                  {/* {jogoSelecionado.genre} */}
                </div>
              </div>

              <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-6xl font-black leading-tight text-transparent">
                {games.nome}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-cyan-400" />
                  {/* <span>{jogoSelecionado.players}</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  {/* <span>{jogoSelecionado.releaseDate}</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-cyan-400" />
                  {/* <span>{jogoSelecionado.size}</span> */}
                </div>
              </div>
              <div className="mt-5"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Media Section */}
              <div className="space-y-6 lg:col-span-2">
                {/* Main Video/Image Display */}
                <div className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#02030a] to-cyan-500 opacity-20 blur transition-opacity duration-300 group-hover:opacity-40"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                    <video
                      src={games.video}
                      className="aspect-video w-full object-cover"
                      controls
                      autoPlay
                    />
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="relative">
                  <Carousel opts={{ align: "start", loop: true }}>
                    <CarouselContent>
                      {games.imagens.map((imgSrc, index) => (
                        <CarouselItem key={index} className="md:basis-1/4">
                          <Image
                            src={imgSrc}
                            width={220}
                            height={140}
                            alt={`Imagem ${index + 1} do jogo`}
                            className="rounded-md border border-[#232B3F]"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-2 text-black" />
                    <CarouselNext className="mr-2 text-black" />
                  </Carousel>
                </div>
              </div>

              {/* Game Info Sidebar */}
              <div className="space-y-6">
                {/* Game Cover */}
                <div className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#02030a] to-cyan-500 opacity-20 blur transition-opacity duration-300 group-hover:opacity-40"></div>
                  <div className="relative">
                    <Image
                      src={games.capa}
                      width={500}
                      height={300}
                      alt="Game Cover"
                      className="w-full rounded-2xl border border-white/10 shadow-2xl"
                    />
                  </div>
                </div>

                {/* Game Description */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-cyan-400">
                    Sobre o Jogo
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    {games.descricao}
                  </p>

                  {/* Game Features */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm">Ação em tempo real</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Sistema de progressão</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-purple-400" />
                      <span className="text-sm">Conquistas desbloqueáveis</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <Link
                    href="/resgate_chave"
                    className="flex items-center space-x-2"
                  >
                    <button className="w-full transform rounded-xl bg-cyan-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center space-x-2">
                        <Play className="h-5 w-5" fill="currentColor" />

                        <span>Jogar Agora</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Games Section */}
      </div>
    </>
  );
};

export default JogoCard;
