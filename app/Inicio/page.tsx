"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleUser, Search } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Inicio = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dados dos jogos em destaque
  const featuredGames = [
    { id: 1, title: "Cyberpunk 2077", image: "/api/placeholder/300/400", category: "RPG" },
    { id: 2, title: "Assassin's Creed Valhalla", image: "/api/placeholder/300/400", category: "Ação" },
    { id: 3, title: "FIFA 2025", image: "/api/placeholder/300/400", category: "Esporte" },
    { id: 4, title: "Call of Duty", image: "/api/placeholder/300/400", category: "FPS" },
    { id: 5, title: "The Witcher 3", image: "/api/placeholder/300/400", category: "RPG" },
    { id: 6, title: "GTA VI", image: "/api/placeholder/300/400", category: "Ação" },
    { id: 7, title: "Red Dead Redemption 2", image: "/api/placeholder/300/400", category: "Ação" },
  ];

  // Benefícios do serviço
  const benefits = [
    {
      id: 1,
      title: "Jogue em Qualquer Dispositivo",
      description: "Acesse nossos jogos de smartphones, tablets, PCs ou Smart TVs.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Sem Downloads",
      description: "Jogue instantaneamente sem precisar baixar arquivos pesados.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Catálogo Premium",
      description: "Acesso a centenas de jogos AAA e indies em constante atualização.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Alta Performance",
      description: "Jogue em 4K com 60fps, independente do seu hardware.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <div className="flex h-[60px] items-center bg-black">
          <Menubar className="w-full border-transparent bg-transparent">
            <MenubarMenu>
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={150}
                  height={100}
                  alt="Logo Nuvix"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </Link>
              <MenubarTrigger className="hidden h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] md:flex">
                Destaques
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/catalogo">
                  <MenubarItem>Catálogo</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/destaque">
                  <MenubarItem>Jogos Em Destaque</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/novidades">
                  <MenubarItem>Novidades</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="hidden h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8] md:flex">
                Jogos
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/catalogo">
                  <MenubarItem>Catálogo</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/generos">
                  <MenubarItem>Gêneros</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/lancamentos">
                  <MenubarItem>Lançamentos</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                Assinatura
              </MenubarTrigger>
              <MenubarContent>
                <button onClick={() => scrollToSection("planos")}>
                  <MenubarItem>GameCloud Pro</MenubarItem>
                </button>
                <MenubarSeparator />
                <button onClick={() => scrollToSection("planos")}>
                  <MenubarItem>Plano Básico</MenubarItem>
                </button>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[150px] justify-center text-xl font-bold text-[#F6F7F8]">
                Fale conosco
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/sobre">
                  <MenubarItem>Sobre Nós</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/contato">
                  <MenubarItem>Nos Contate</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/suporte">
                  <MenubarItem>Suporte</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[110px] text-xl font-bold text-[#F6F7F8]">
                <div className="flex items-center">
                  <CircleUser className="mr-2" />
                  <p>Conta</p>
                </div>
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/cadastro">
                  <MenubarItem>Cadastre-se</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/login">
                  <MenubarItem>Login</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/perfil">
                  <MenubarItem>Meu Perfil</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="mr-4 flex items-center">
            <Search className="mr-2 text-white" />
            <input
              type="text"
              className="w-24 bg-transparent text-white md:w-auto"
              placeholder="Buscar jogos..."
            />
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Banner */}
        <div className="relative h-[850px]">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-full relative">
              <Image
                src="/bannerp.jpg"
                alt="Banner principal"
                layout="fill"
                objectFit="cover"
                className="brightness-50"
              />
            </div>
          </div>

          {/* Conteúdo do banner */}
          <div className="relative h-full z-10">
            <div className="flex flex-col justify-center h-full max-w-screen-xl mx-auto px-4">
              <div className="max-w-lg">
                <h1 className="text-6xl md:text-7xl font-bold text-[#F6F7F8] mb-4">
                  GameCloud
                </h1>
                <p className="text-xl md:text-2xl text-[#F6F7F8] mb-4">
                  A revolução dos jogos na nuvem
                </p>
                <p className="text-lg text-[#F6F7F8] mb-8 max-w-[500px]">
                  Experimente a nova era dos jogos: acesse centenas de títulos AAA sem precisar de hardware potente. 
                  Jogue em qualquer dispositivo, a qualquer hora, em qualquer lugar. 
                  Esqueça downloads e atualizações - comece a jogar instantaneamente!
                </p>
                <Link href="/jogo">
                  <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                    Jogue agora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Corpo do site */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          {/* Catalogo */}
          <div className="py-12 sm:py-16 md:py-20">
            <div className="mb-10 md:mb-12">
              <h1 className="text-center text-3xl font-bold text-[#F6F7F8] sm:text-4xl md:text-5xl lg:text-6xl">
                Explorar catálogo
              </h1>
            </div>

            <div className="mx-auto max-w-[1800px] px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {featuredGames.map((game) => (
                    <CarouselItem key={game.id} className="mx-2 basis-1/2 sm:mx-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                      <Link href={`/jogo/${game.id}`}>
                        <div className="overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-all hover:scale-105">
                          <div className="relative h-[230px] w-full">
                            <Image
                              src={game.image}
                              alt={game.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="p-3">
                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#019EC2] text-white rounded-md mb-2">
                              {game.category}
                            </span>
                            <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
          </div>

          {/* Jogo em destaque */}
          <div className="py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden">
                <div className="md:w-1/2">
                  <div className="relative h-[300px] md:h-full">
                    <Image
                      src="/red-dead.jpg"
                      alt="Jogo em destaque"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-[#019EC2] text-white text-sm font-semibold rounded-md mb-4">
                    Em destaque
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Red Dead Redemption 2
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Explore a nova expansão do aclamado RPG de ação. Novas áreas, chefes desafiadores 
                    e uma história cativante esperam por você neste incrivel jogo.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="./catalogo-teste">
                    <button className="px-6 py-3 bg-[#019EC2] text-white font-bold rounded-md hover:bg-[#198097] transition-colors">
                      Jogar agora
                    </button>
                    </Link>
                    <Link href="./saibamais">
                    <button className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors">
                      Saber mais
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vantagens */}
          <div className="py-16">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#F6F7F8]">
                Maximize sua diversão com a Nuvix
              </h2>
            </div>
            
            <div className="mx-auto max-w-screen-xl px-4">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
              >
                <CarouselContent className="gap-6">
                  {benefits.map((benefit) => (
                    <CarouselItem key={benefit.id} className="basis-full sm:basis-1/2 lg:basis-1/4">
                      <div className="h-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-[200px]">
                          <Image
                            src={benefit.image}
                            alt={benefit.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Planos */}
          <div id="planos" className="py-16 sm:py-20">
            <div className="mb-10 text-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
              <h2 className="mb-8 text-2xl font-bold text-[#F6F7F8] sm:text-3xl">
                Escolha seu Plano
              </h2>
            </div>

            <div className="mx-auto max-w-4xl px-4">
              <div className="flex flex-col justify-center gap-6 md:flex-row">
                {/* Plano Diário */}
                <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-6">
                    <h3 className="mb-2 text-center text-2xl font-bold">
                      Nuvix Básico
                    </h3>
                    <p className="mb-4 text-center text-gray-600">
                      Pagamento Diário
                    </p>
                    <p className="mb-6 text-center text-3xl font-semibold">
                      R$ 15,00
                    </p>

                    <div className="mb-8 space-y-3">
                      <p className="text-center">✓ Acesso por 24 horas</p>
                      <p className="text-center">✓ Resolução 1080p</p>
                      <p className="text-center">✓ Catálogo básico</p>
                    </div>

                    <Link href="/pagamento">
                      <button className="w-full rounded-md bg-[#019EC2] py-3 font-bold text-white transition-colors hover:bg-[#198097]">
                        Assinar
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Plano Mensal */}
                <div className="flex-1 transform overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative p-6">
                    <div className="absolute -right-12 top-4 rotate-45 bg-[#019EC2] px-12 py-1 text-sm font-bold text-white">
                      Popular
                    </div>
                    <h3 className="mb-2 text-center text-2xl font-bold">
                      Nuvix Pro
                    </h3>
                    <p className="mb-4 text-center text-gray-600">
                      Pagamento Mensal
                    </p>
                    <p className="mb-6 text-center text-3xl font-semibold">
                      R$ 59,90
                    </p>

                    <div className="mb-8 space-y-3">
                      <p className="text-center">✓ Acesso ilimitado</p>
                      <p className="text-center">✓ Resolução 4K</p>
                      <p className="text-center">✓ Catálogo completo</p>
                      <p className="text-center">✓ Sem filas</p>
                      <p className="text-center">✓ Acesso antecipado</p>
                    </div>

                    <Link href="/pagamento">
                      <button className="w-full rounded-md bg-[#019EC2] py-3 font-bold text-white transition-colors hover:bg-[#198097]">
                        Assinar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer info */}
          <div className="pb-10 text-center text-white">
            <p>
              &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
              reservados.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4">
              <Link
                href="/privacidade"
                className="text-blue-400 hover:underline"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-blue-400 hover:underline"
              >
                Termos de Uso
              </Link>
              <Link
                href="/cookies"
                className="text-blue-400 hover:underline"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé completo */}
      <footer className="bg-gray-900 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">GameCloud</h3>
              <p className="text-gray-400 mb-4">
                Transformando o futuro dos games com tecnologia em nuvem avançada.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/jogos" className="text-gray-400 hover:text-white transition-colors">
                    Catálogo de Jogos
                  </Link>
                </li>
                <li>
                  <Link href="/planos" className="text-gray-400 hover:text-white transition-colors">
                    Planos e Preços
                  </Link>
                </li>
                <li>
                  <Link href="/dispositivos" className="text-gray-400 hover:text-white transition-colors">
                    Dispositivos Compatíveis
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="text-gray-400 hover:text-white transition-colors">
                    Baixar Aplicativo
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/tutoriais" className="text-gray-400 hover:text-white transition-colors">
                    Tutoriais
                  </Link>
                </li>
                <li>
                  <Link href="/requisitos" className="text-gray-400 hover:text-white transition-colors">
                    Requisitos de Sistema
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Inscreva-se para receber novidades e ofertas exclusivas
              </p>
              <form>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#019EC2] text-white rounded-md hover:bg-[#198097] transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;