import Image from "next/image";
import { CircleUser, Search, Heart, ChevronDown } from "lucide-react";
import Link from "next/link";
import CataUsa from "../catalogo/cataloguin";

const Favorito = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2235] to-[#154B74]">
      {/* Header with standard navigation instead of Menubar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/90 shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo and navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/">
              <Image
                src="/logo_nuvix.png"
                width={150}
                height={45}
                alt="Nuvix Logo"
                className="hover:opacity-90 transition-opacity"
              />
            </Link>

            <nav className="hidden md:flex space-x-1">
              <div className="relative group">
                <button className="flex items-center h-10 px-4 text-lg font-medium text-[#F6F7F8] hover:bg-white/10 rounded-md transition-colors">
                  <span>Destaques</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-[#0a2235] border border-[#019EC2]/30 hidden group-hover:block">
                  <div className="py-1">
                    <Link href="/catalogo" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Catalogo
                    </Link>
                    <Link href="/catalogo" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Jogos Em Destaque
                    </Link>
                    <Link href="/catalogo" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Novidades
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center h-10 px-4 text-lg font-medium text-[#F6F7F8] hover:bg-white/10 rounded-md transition-colors">
                  <span>Jogos</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-[#0a2235] border border-[#019EC2]/30 hidden group-hover:block">
                  <div className="py-1">
                    <Link href="/catalogo" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Catalogo
                    </Link>
                    <Link href="/catalogo" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Destaque
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center h-10 px-4 text-lg font-medium text-[#F6F7F8] hover:bg-white/10 rounded-md transition-colors">
                  <span>Assinatura</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-[#0a2235] border border-[#019EC2]/30 hidden group-hover:block">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Nuvix Plus
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Plano Essencial
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center h-10 px-4 text-lg font-medium text-[#F6F7F8] hover:bg-white/10 rounded-md transition-colors">
                  <span>Fale conosco</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-[#0a2235] border border-[#019EC2]/30 hidden group-hover:block">
                  <div className="py-1">
                    <Link href="/cadastro" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                      Sobre Nós
                    </Link>
                    <Link href="/login2" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
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
              <div className="flex items-center bg-white/10 rounded-full pl-3 pr-4 py-1.5 focus-within:ring-2 focus-within:ring-[#019EC2]">
                <Search className="h-5 w-5 text-gray-300" />
                <input
                  type="text"
                  className="bg-transparent outline-none text-white ml-2 w-48 placeholder-gray-400"
                  placeholder="Pesquisar jogos..."
                />
              </div>
            </div>

            {/* Account button */}
            <div className="relative group">
              <button className="flex items-center h-10 px-4 text-lg font-medium text-[#F6F7F8] hover:bg-white/10 rounded-md transition-colors">
                <CircleUser className="mr-2 h-5 w-5" />
                <span>Conta</span>
              </button>
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-[#0a2235] border border-[#019EC2]/30 hidden group-hover:block">
                <div className="py-1">
                  <Link href="/cadastro2" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
                    Cadastre-se
                  </Link>
                  <Link href="/login2" className="block px-4 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/30">
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
          <div className="mt-2 h-1 w-full bg-gradient-to-r from-[#019EC2] to-transparent rounded-full"></div>
        </div>

        {/* Filters and sorting */}
        <div className="flex items-center mb-8 bg-white/5 p-4 rounded-lg">
          <p className="text-lg text-white mr-4">Ordenar por:</p>
          <select className="bg-[#019EC2] text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-[#01b7e2] transition-colors">
            <option value="a-z">A-Z</option>
            <option value="data">Data de adição</option>
            <option value="rating">Avaliação</option>
          </select>
        </div>

        {/* Games catalog with enhanced container */}
        <div className="bg-black/50 rounded-2xl shadow-xl p-6 overflow-hidden border border-white/10">
          <CataUsa />
        </div>
      </main>
    </div>
  );
};

export default Favorito;