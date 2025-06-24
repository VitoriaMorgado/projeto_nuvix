"use client";

//========IMPORTE DE COMPONENTES========//
import Image from "next/image";
import Link from "next/link";


const Novidades = () => {
  // Dados mockados para demonstração
const noticiasPrincipais = [
    {
        id: 1,
        titulo: "Cyberpunk 2077: Phantom Liberty chegou à Nuvix",
        descricao: "A expansão mais aguardada do ano está disponível na nossa plataforma com qualidade 4K e 60fps garantidos.",
        imagem: "/cyberpunk_novidades.gif",
        data: "25 Mai 2025",
        categoria: "Lançamento"
    },
    {
  id: 2,
  titulo: "Cult of the Lamb: Unholy Alliance Chega com Estilo",
  descricao: "A nova atualização Unholy Alliance adiciona modo cooperativo local, ataques corrompidos e uma nova forma de liderar seu culto ao lado de um aliado profano.",
  imagem: "/cotl_novidades_banner.gif",
  data: "24 Mai 2025",
  categoria: "Atualização"
}

];

  const outrasNoticias = [
{
  id: 3,
  titulo: "Stardew Valley – Pacote Jardim Encantado",
  descricao: "Adicione novas plantações, animais mágicos e atividades relaxantes para tornar sua fazenda ainda mais especial.",
  imagem: "/Stardew Valley_novidades.jpg",
  data: "23 Mai 2025",
  categoria: "DLC"
},
{
  id: 4,
  titulo: "Resident Evil 4: Sobrevivência Reimaginada",
  descricao: "O clássico retorna com visuais modernos, combates refinados e atmosfera ainda mais aterradora.",
  imagem: "/Resident Evil 4_novidades.jpg",
  data: "21 Mai 2025",
  categoria: "Remake"
},
{
  id: 5,
  titulo: "It Takes Two: Aventura Cooperativa Premiada",
  descricao: "Junte-se a Cody e May em uma jornada mágica repleta de desafios criativos e momentos emocionantes — agora com melhorias e suporte adicional.",
  imagem: "/It Takes Two_novidades.png",
  data: "20 Mai 2025",
  categoria: "Atualização"
},
{
  id: 6,
  titulo: "Buckshot Roulette: Terror com um Gatilho",
  descricao: "Enfrente o caos em uma roleta russa sangrenta onde cada rodada é uma aposta entre a vida e a insanidade.",
  imagem: "/Buckshot Roulette_novidades.jpg",
  data: "19 Mai 2025",
  categoria: "Indie"
}


  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Lançamento":
        return "bg-[#019EC2]";
      case "Atualização":
        return "bg-green-600";
      case "DLC":
        return "bg-purple-600";
      case "Anúncio":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* NAVBAR */}
      

      <div className="flex-grow">
        {/* BANNER DE NOVIDADES */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          
          <div className="absolute inset-0 w-full h-full">
            <video
              className="object-cover w-full h-full"
              src="/video_promo_ittaketwo.webm"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="relative z-20 flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
                  Novidades <span className="text-[#019EC2]">Nuvix</span> 
                </h1>
                <p className="text-3xl font-bold text-[#F6F7F8]">Conheça <span className="text-[#019EC2]">It takes Two</span></p>
                <p className="mb-8 text-2xl font-light text-[#F6F7F8]">
                 Uma aventura cooperativa premiada de Cody e May, um casal em crise, é transformado em bonecos criados por sua filha e precisa enfrentar juntos um mundo mágico repleto de desafios criativos, uma jornada para redescobrir o valor da parceria e do amor.
                </p>
                  <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-2xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                    Ir para o Catalogo
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          
          {/* NOTÍCIAS PRINCIPAIS */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
                <span className="text-[#019EC2]">Principais</span> Novidades
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {noticiasPrincipais.map((noticia) => (
                  <div
                    key={noticia.id}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={noticia.imagem}
                        width={600}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        alt={noticia.titulo}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${getCategoriaColor(noticia.categoria)}`}>
                          {noticia.categoria}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-2 text-sm text-[#019EC2]">
                        {noticia.data}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-[#019EC2] transition-colors">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {noticia.descricao}
                      </p>
                      <div className="mt-4">
                        <Link href="/catalogo">
                          <button className="text-[#019EC2] hover:text-white font-semibold transition-colors">
                            Ir para o Catálogo →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OUTRAS NOTÍCIAS */}
          <div className="bg-black/30 py-16">
            <div className="container mx-auto px-6">
              <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
                Mais <span className="text-[#019EC2]">Novidades</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {outrasNoticias.map((noticia) => (
                  <div
                    key={noticia.id}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-sm hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={noticia.imagem}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        alt={noticia.titulo}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getCategoriaColor(noticia.categoria)}`}>
                          {noticia.categoria}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-2 text-xs text-[#019EC2]">
                        {noticia.data}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#019EC2] transition-colors line-clamp-2">
                        {noticia.titulo}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-3">
                        {noticia.descricao}
                      </p>
                      <div className="mt-3">
                        <Link href="/catalogo">
                          <button className="text-sm text-[#019EC2] hover:text-white font-semibold transition-colors">
                            Ver no catalogo →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                  Não perca nenhuma <span className="text-[#019EC2]">novidade</span>
                </h2>
                <Link href="/cadastro">
                    <button className="h-[50px] w-[180px] rounded-br-2xl rounded-tl-2xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                        Cadastrar-me
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novidades;