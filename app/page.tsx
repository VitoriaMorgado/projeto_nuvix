"use client";

//========IMPORTE DE COMPONENTES========//
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser, Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardDois from "./componente/carddois";
import CardTres from "./componente/cardtres";
import Cardquatro from "./componente/cardquatro";
import Link from "next/link";
import Carduni from "./componente/carduni";
import Card02 from "./componente/cards/card02";
import Card01 from "./componente/cards/card01";
import Card03 from "./componente/cards/card03";
import Card04 from "./componente/cards/card04";
import Card05 from "./componente/cards/card05";
import Card06 from "./componente/cards/card06";
import Card07 from "./componente/cards/card07";
import Rodape from "@/components/ui/rodape";

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    //========INDICE MENU========//
    <div className="bg-black min-h-screen w-full flex flex-col">
      {/* //========NAVBAR========// */}
      <div className="sticky top-0 z-50 w-full">
        <div className="flex h-[60px] bg-black items-center">
          <Menubar className="w-full border-transparent bg-transparent">
            <MenubarMenu>
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={150}
                  height={100}
                  alt="imagem do mine"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </Link>
              <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8] hidden md:flex">
                Destaques
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/catalogo">
                  <MenubarItem>Catalogo</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/catalogo">
                  <MenubarItem>Jogos Em Destaque</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/catalogo">
                  <MenubarItem>Novidades</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[80px] justify-center text-xl font-bold text-[#F6F7F8] hidden md:flex">
                Jogos
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/catalogo">
                  <MenubarItem>Catalogo</MenubarItem>
                  <MenubarSeparator />
                </Link>
                <Link href="/catalogo">
                  <MenubarItem>Destaque</MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[120px] justify-center text-xl font-bold text-[#F6F7F8]">
                Assinatura
              </MenubarTrigger>
              <MenubarContent>
                <button onClick={() => scrollToSection("plano")}>
                  <MenubarItem>Nuvix Plus</MenubarItem>
                </button>
                <MenubarSeparator />
                <button onClick={() => scrollToSection("plano")}>
                  <MenubarItem>Plano Essencial</MenubarItem>
                </button>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="h-[30px] w-[150px] justify-center text-xl font-bold text-[#F6F7F8]">
                Fale conosco
              </MenubarTrigger>
              <MenubarContent>
                <Link href="cadastro">
                  <MenubarItem>Sobre Nós</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="login2">
                  <MenubarItem>Nos Contate</MenubarItem>
                </Link>
                <MenubarSeparator />
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
                <Link href="/cadastro2">
                  <MenubarItem>Cadastre-se</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/login2">
                  <MenubarItem>Login</MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="flex items-center mr-4">
            <Search className="text-white mr-2" />
            <input
              type="text"
              className="bg-transparent text-white w-24 md:w-auto"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      {/* MENU FIM */}

      <main className="flex-grow">
        {/* BANNER COMEÇO */}
<div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]">
  <Image
    src="/bannerp.jpg"
    fill
    style={{ objectFit: "cover" }}
    alt="banner"
    priority
    className="absolute inset-0"
  />
  
  {/* ESCRITAS DO BANNER */}
  <div className="relative h-full z-10 flex flex-col justify-center items-center sm:items-start">
    <div className="px-6 sm:px-10 md:px-14 lg:px-20 text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F6F7F8] mb-4 drop-shadow-lg">
        Nuvix
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#F6F7F8] font-medium mb-4">
        O melhor serviço de jogos na nuvem
      </p>
      <p className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] text-base sm:text-lg md:text-xl text-[#F6F7F8] leading-relaxed mb-6">
        Experimente a revolução dos jogos na nuvem: jogue os títulos mais recentes e de alta qualidade sem precisar de um PC poderoso ou console.
        Com a tecnologia de nuvem, você acessa seus jogos favoritos de qualquer dispositivo, a qualquer hora e em qualquer lugar, sem longas esperas para downloads ou atualizações.
        A diversão está ao alcance de um clique!
      </p>
      <div className="flex justify-center sm:justify-start">
        <Link href="/jogo">
          <button className="h-[50px] sm:h-[55px] md:h-[60px] w-[190px] sm:w-[210px] md:w-[240px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-lg sm:text-xl md:text-2xl font-bold text-[#F6F7F8] shadow-lg hover:bg-[#198097] transition-all duration-300 ease-in-out transform hover:scale-105">
            Jogue agora
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
{/* BANNER FINAL */}

        {/* CONTEÚDO PRINCIPAL */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          {/* CATALOGO COMEÇO */}
          <div className="py-12 sm:py-16 md:py-20">
            <div className="mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F7F8] text-center">
                Explorar catálogo
              </h1>
            </div>
            
            <div className="px-4 max-w-[1800px] mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card01></Card01>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card02></Card02>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card03></Card03>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card04></Card04>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card05></Card05>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card06></Card06>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="mx-2 sm:mx-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <Link href="/catalogo">
                      <Card07></Card07>
                    </Link>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
          </div>

          {/* JOGO EM DESTAQUE */}
          <div className="py-8 sm:py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row bg-[#000101] rounded overflow-hidden">
                <div className="lg:w-2/3">
                  <Image
                    className="w-full h-auto object-cover"
                    src="/red-dead.jpg"
                    width={670}
                    height={500}
                    alt="imagem do red"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-between lg:w-1/3">
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F6F7F8] mb-4">
                      Red Dead Redemption 2
                    </h1>
                    <p className="text-lg text-[#F6F7F8] mb-6">
                      Red Dead Redemption 2, a épica aventura de mundo aberto
                      da Rockstar Games aclamada pela crítica e o jogo mais
                      bem avaliado desta geração de consoles, agora chega
                      aprimorado para PC com conteúdos inéditos no Modo
                      História, melhorias visuais e muito mais.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link href="/login">
                      <button className="w-full h-[55px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-2xl md:text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                        Jogue agora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/catalogo">
                  <button className="w-full sm:w-[230px] h-[50px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl sm:text-2xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                    Semelhantes
                  </button>
                </Link>
                <Link href="/catalogo">
                  <button className="w-full sm:w-[230px] h-[50px] rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl sm:text-2xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                    Catálogo
                  </button>
                </Link>
              </div>
            </div>
          </div>


          {/* CAROUSEL INICIO */}

          <div className="m-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#F6F7F8]">
            <h1>Maximize sua diversão com a Nuvix</h1>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 justify-items-center">
            <div className="w-full sm:w-[90%] md:w-[95%] lg:w-[1300px] mx-auto justify-center p-4 sm:p-5 md:p-6">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
              >
                <CarouselContent className="gap-6">
                  <CarouselItem className="lg:basis-3/6">
                    <Carduni></Carduni>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-3/6">
                    <CardDois></CardDois>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-3/6">
                    <CardTres></CardTres>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-3/6">
                    <Cardquatro></Cardquatro>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* CAROUSEL FIM */}

          {/* PLANOS */}
          <div id="plano" className="py-16 sm:py-20">
            <div className="text-center mb-10">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
              <h1 className="text-2xl sm:text-3xl font-bold text-[#F6F7F8] mb-8">
                Escolha seu Plano
              </h1>
            </div>

            <div className="max-w-4xl mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                {/* Plano Diário */}
                <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                  <div className="p-6">
                    <h2 className="text-center text-2xl font-bold mb-2">Nuvix Diário</h2>
                    <p className="text-center text-gray-600 mb-4">Pagamento Diário</p>
                    <p className="text-center text-3xl font-semibold mb-6">R$ 20,00</p>
                    
                    <div className="space-y-3 mb-8">
                      <p className="text-center">✓ Prioridade na fila</p>
                      <p className="text-center">✓ 24 horas de jogo</p>
                      <p className="text-center h-6"></p>
                    </div>
                    
                    <Link href="/pagamento">
                      <button className="w-full rounded-md bg-[#019EC2] py-3 text-white font-bold hover:bg-[#198097] transition-colors">
                        Assinar
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Plano Mensal */}
                <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                  <div className="p-6">
                    <h2 className="text-center text-2xl font-bold mb-2">Nuvix Plus</h2>
                    <p className="text-center text-gray-600 mb-4">Pagamento Mensal</p>
                    <p className="text-center text-3xl font-semibold mb-6">R$ 60,00</p>
                    
                    <div className="space-y-3 mb-8">
                      <p className="text-center">✓ 730 horas de jogo</p>
                      <p className="text-center">✓ Sem fila</p>
                      <p className="text-center">✓ Sem anúncios</p>
                    </div>
                    
                    <Link href="/pagamento">
                      <button className="w-full rounded-md bg-[#019EC2] py-3 text-white font-bold hover:bg-[#198097] transition-colors">
                        Assinar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center text-white">
              <p>&copy; {new Date().getFullYear()} Nuvix. Todos os direitos reservados.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-4">
                <Link href="/poiliticadeprivacidade" className="text-blue-400 hover:underline">
                  Política de Privacidade
                </Link>
                <Link href="/termosecondicoes" className="text-blue-400 hover:underline">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RODAPÉ */}
      <div className="mt-0 w-full">
        <Rodape />
      </div>
    </div>
  );
};

export default Home;