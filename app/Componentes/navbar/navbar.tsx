"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, User, Search, LogOut, Settings, ShoppingCart } from "lucide-react";
import Link from "next/link";

const NavBarp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [cartItems] = useState([

  //LINKAR COM O BANCO DE DADOS
    { 
      id: 1, 
      name: "Cyberpunk 2077", 
      price: 89.99, 
      quantity: 1,
    },
    { 
      id: 2, 
      name: "Minecraft", 
      price: 99.99, 
      quantity: 1,
    },
    { 
      id: 3, 
      name: "The Legend of Zelda: Breath of the Wild",
      price: 79.99, 
      quantity: 1,

    },
  ]);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Jogos", href: "/jogo" },
    { name: "Novidades", href: "/novidades" },
    { name: "Suporte", href: "/suporte" },
  ];

  const userMenuItems = [
    { name: "Meu Perfil", icon: User, href: "/tela-conta" },
    { name: "Configurações", icon: Settings, href: "/tela-conta" },
    { name: "Ajuda", icon: User, href: "/suporte" },
    { name: "Sair", icon: LogOut, href: "/login", danger: true },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Aqui você pode implementar a lógica de busca
      console.log("Buscando por:", searchQuery);
      // Exemplo: window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`;
      setShowSearch(false);
      setSearchQuery("");
    }
  };



  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: unknown }) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setShowCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-[#019EC2]/20 bg-black/90 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="group relative">
                <Link href="/">
                  <h1 className="bg-gradient-to-r from-[#F6F7F8] to-[#019EC2] bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 hover:from-[#019EC2] hover:to-[#198097]">
                    Nuvix
                  </h1>
                </Link>
                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[#019EC2] to-[#198097] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#019EC2]"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-6 md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group relative font-medium text-[#F6F7F8] transition-all duration-300 hover:text-[#019EC2]"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-[#019EC2] to-[#198097] transition-all duration-300 group-hover:w-full"></div>
                  <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-[#019EC2]/10 transition-transform duration-300 group-hover:scale-100"></div>
                </a>
              ))}
            </div>

            {/* Right Side - Search, Cart, User */}
            <div className="hidden items-center space-x-2 md:flex">
              {/* Search Button */}
              <div className="relative" ref={searchRef}>
                <button 
                  onClick={() => setShowSearch(!showSearch)}
                  className="group rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                >
                  <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
                </button>

                {/* Search Dropdown */}
                {showSearch && (
                  <div className="absolute right-0 top-12 w-80 overflow-hidden rounded-xl border border-[#019EC2]/20 bg-black/95 shadow-2xl backdrop-blur-xl">
                    <div className="p-4">
                      <form onSubmit={handleSearch} className="space-y-3">
                        <div className="relative">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar produtos..."
                            className="w-full rounded-lg border border-[#019EC2]/20 bg-black/50 px-4 py-2 text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none focus:ring-2 focus:ring-[#019EC2]/20"
                            autoFocus
                          />
                          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded-lg bg-gradient-to-r from-[#019EC2] to-[#198097] px-4 py-2 text-white transition-all duration-300 hover:from-[#198097] hover:to-[#019EC2]"
                        >
                          Buscar
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <div className="relative" ref={cartRef}>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="group relative rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                >
                  <ShoppingCart className="h-4 w-4 transition-transform group-hover:scale-110" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#019EC2] text-xs font-bold text-white">
                      {getTotalItems()}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {showCart && (
                  <div className="absolute right-0 top-12 w-96 overflow-hidden rounded-xl border border-[#019EC2]/20 bg-black/95 shadow-2xl backdrop-blur-xl">
                    <div className="border-b border-[#019EC2]/20 p-4">
                      <h3 className="font-semibold text-[#F6F7F8]">
                        Carrinho ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'})
                      </h3>
                    </div>

                    <div className="max-h-64 overflow-y-auto">
                      {cartItems.length === 0 ? (
                        <div className="p-6 text-center">
                          <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-gray-400">Seu carrinho está vazio</p>
                        </div>
                      ) : (
                        <div className="space-y-2 p-2">
                          {cartItems.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex items-center justify-between rounded-lg border border-[#019EC2]/10 p-3">
                              <div className="flex-1">
                                <h4 className="font-medium text-[#F6F7F8]">{item.name}</h4>
                                <p className="text-sm text-gray-400">R$ {item.price.toFixed(2)} x {item.quantity}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-[#F6F7F8]">R$ {(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                          ))}
                          {cartItems.length > 3 && (
                            <div className="p-2 text-center">
                              <p className="text-sm text-gray-400">+{cartItems.length - 3} outros itens</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {cartItems.length > 0 && (
                      <div className="border-t border-[#019EC2]/20 p-4">
                        <div className="mb-3 flex justify-between text-lg font-semibold text-[#F6F7F8]">
                          <span>Total:</span>
                          <span>R$ {getTotalPrice().toFixed(2)}</span>
                        </div>
                        <Link href="/carrinho">
                          <button className="w-full rounded-lg bg-gradient-to-r from-[#019EC2] to-[#198097] px-4 py-2 text-white transition-all duration-300 hover:from-[#198097] hover:to-[#019EC2]">
                            Ver Carrinho Completo
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex transform items-center space-x-2 rounded-full bg-gradient-to-r from-[#019EC2] to-[#198097] px-3 py-1.5 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-[#198097] hover:to-[#019EC2] hover:shadow-[#019EC2]/25"
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">Usuario0_</span>
                </button>

                {/* Dropdown do Usuário */}
                {showUserMenu && (
                  <div className="absolute right-0 top-12 w-64 overflow-hidden rounded-xl border border-[#019EC2]/20 bg-black/95 shadow-2xl backdrop-blur-xl">
                    <div className="border-b border-[#019EC2]/20 p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#019EC2] to-[#198097]">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#F6F7F8]">
                            User_name
                          </h3>
                          <p className="text-sm text-gray-400">
                            UserEmail@email.com
                          </p>
                          <div className="mt-1 flex items-center space-x-1"></div>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      {userMenuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className={`flex items-center space-x-3 px-4 py-3 transition-colors hover:bg-[#019EC2]/10 ${
                            item.danger
                              ? "text-red-400 hover:text-red-300"
                              : "text-[#F6F7F8] hover:text-[#019EC2]"
                          }`}
                          onClick={() => setShowUserMenu(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>

                    <div className="border-t border-[#019EC2]/20 bg-[#019EC2]/5 p-4">
                      <div className="text-center">
                        <p className="mb-2 text-xs text-gray-400"></p>
                        <p className="text-lg font-bold text-[#019EC2]"></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#F6F7F8] transition-colors duration-300 hover:text-[#019EC2]"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 md:hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 border-t border-[#019EC2]/20 py-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 font-medium text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="mt-2 flex items-center justify-between border-t border-[#019EC2]/20 px-4 py-2">
                <button 
                  onClick={() => setShowSearch(!showSearch)}
                  className="rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                >
                  <Search className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#019EC2] text-xs font-bold text-white">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#019EC2] to-[#198097] px-3 py-1.5 text-white transition-all duration-300 hover:from-[#198097] hover:to-[#019EC2]"
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">Perfil</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarp;