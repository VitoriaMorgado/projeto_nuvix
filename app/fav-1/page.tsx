import Image from "next/image";
import { CircleUser, Search, Heart, ChevronDown } from "lucide-react";
import Link from "next/link";
import CataUsa from "../catalogo2/cataloguin";

const Favorito = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2235] to-[#154B74]">
      {/* Header with standard navigation instead of Menubar */}
      <header className="sticky top-0 z-50 bg-black/90 shadow-lg backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo and navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/">
              <Image
                src="/logo_nuvix.png"
                width={150}
                height={45}
                alt="Nuvix Logo"
                className="transition-opacity hover:opacity-90"
              />
            </Link>

            <nav className="hidden space-x-1 md:flex">
              <div className="group relative">
                <button className="flex h-10 items-center rounded-md px-4 text-lg font-medium text-[#F6F7F8] transition-colors hover:bg-white/10">
                  <span>Destaques</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 hidden w-48 rounded-md border border-[#019EC2]/30 bg-[#0a2235] shadow-lg group-hover:block">
                  <div className="py-1">
                    <Link
                      href="/catalogo"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Catalogo
                    </Link>
                    <Link
                      href="/catalogo"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Jogos Em Destaque
                    </Link>
                    <Link
                      href="/catalogo"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Novidades
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className="flex h-10 items-center rounded-md px-4 text-lg font-medium text-[#F6F7F8] transition-colors hover:bg-white/10">
                  <span>Jogos</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 hidden w-48 rounded-md border border-[#019EC2]/30 bg-[#0a2235] shadow-lg group-hover:block">
                  <div className="py-1">
                    <Link
                      href="/catalogo"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Catalogo
                    </Link>
                    <Link
                      href="/catalogo"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Destaque
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className="flex h-10 items-center rounded-md px-4 text-lg font-medium text-[#F6F7F8] transition-colors hover:bg-white/10">
                  <span>Assinatura</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 hidden w-48 rounded-md border border-[#019EC2]/30 bg-[#0a2235] shadow-lg group-hover:block">
                  <div className="py-1">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Nuvix Plus
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Plano Essencial
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className="flex h-10 items-center rounded-md px-4 text-lg font-medium text-[#F6F7F8] transition-colors hover:bg-white/10">
                  <span>Fale conosco</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 hidden w-48 rounded-md border border-[#019EC2]/30 bg-[#0a2235] shadow-lg group-hover:block">
                  <div className="py-1">
                    <Link
                      href="/cadastro"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Sobre Nós
                    </Link>
                    <Link
                      href="/login2"
                      className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                    >
                      Nos Contate
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Right side - Search and Account */}
          <div className="flex items-center space-x-6">
            {/* Search bar with enhanced styling */}
            <div className="relative">
              <div className="flex items-center rounded-full bg-white/10 py-1.5 pl-3 pr-4 focus-within:ring-2 focus-within:ring-[#019EC2]">
                <Search className="h-5 w-5 text-gray-300" />
                <input
                  type="text"
                  className="ml-2 w-48 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="Pesquisar jogos..."
                />
              </div>
            </div>

            {/* Account button */}
            <div className="group relative">
              <button className="flex h-10 items-center rounded-md px-4 text-lg font-medium text-[#F6F7F8] transition-colors hover:bg-white/10">
                <CircleUser className="mr-2 h-5 w-5" />
                <span>Conta</span>
              </button>
              <div className="absolute right-0 mt-1 hidden w-48 rounded-md border border-[#019EC2]/30 bg-[#0a2235] shadow-lg group-hover:block">
                <div className="py-1">
                  <Link
                    href="/cadastro2"
                    className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                  >
                    Cadastre-se
                  </Link>
                  <Link
                    href="/login2"
                    className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page title with animated underline */}
        <div className="mb-8">
          <div className="flex items-center">
            <Heart className="mr-3 h-8 w-8 text-[#019EC2]" />
            <h1 className="text-4xl font-bold text-white">Favoritos</h1>
          </div>
          <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-[#019EC2] to-transparent"></div>
        </div>

        {/* Filters and sorting */}
        <div className="mb-8 flex items-center rounded-lg bg-white/5 p-4">
          <p className="mr-4 text-lg text-white">Ordenar por:</p>
          <select className="cursor-pointer rounded-md bg-[#019EC2] px-4 py-2 font-medium text-white transition-colors hover:bg-[#01b7e2]">
            <option value="a-z">A-Z</option>
            <option value="data">Data de adição</option>
            <option value="rating">Avaliação</option>
          </select>
        </div>

        {/* Games catalog with enhanced container */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 shadow-xl">
          <CataUsa />
        </div>
      </main>
    </div>
  );
};

export default Favorito;
