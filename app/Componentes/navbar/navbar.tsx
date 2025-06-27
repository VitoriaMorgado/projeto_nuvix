"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, User, Bell, Search, LogOut, Settings } from "lucide-react";
import Link from "next/link";

const NavBarp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Novo jogo disponível!",
      message: "Cyberpunk 2077 foi adicionado ao catálogo",
      time: "2 min atrás",
      read: false,
      type: "game",
    },
    {
      id: 2,
      title: "Desconto especial",
      message: "20% off em todos os planos premium",
      time: "1 hora atrás",
      read: false,
      type: "offer",
    },
    {
      id: 3,
      title: "Manutenção programada",
      message: "Servidor offline das 02:00 às 04:00",
      time: "3 horas atrás",
      read: true,
      type: "info",
    },
    {
      id: 4,
      title: "Conquista desbloqueada!",
      message: "Você completou 10 jogos este mês",
      time: "1 dia atrás",
      read: true,
      type: "achievement",
    },
  ]);

  const notificationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Jogos", href: "/jogo" },
    { name: "Novidades", href: "/novidades" },
    { name: "Suporte", href: "/suporte" },
  ];

  const userMenuItems = [
    { name: "Meu Perfil", icon: User, href: "/perfil" },
    { name: "Configurações", icon: Settings, href: "/tela-conta" },
    { name: "Ajuda", icon: User, href: "/suporte" },
    { name: "Sair", icon: LogOut, href: "/login", danger: true },
  ];

  // Fechar dropdowns quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: { target: unknown }) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "game":
        return "🎮";
      case "offer":
        return "💰";
      case "achievement":
        return "🏆";
      default:
        return "📢";
    }
  };

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

            {/* Right Side - Search, Notifications, User */}
            <div className="hidden items-center space-x-2 md:flex">
              {/* Search Button */}
              <button className="group rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]">
                <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
              </button>

              {/* Notifications */}
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="group relative rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                >
                  <Bell className="h-4 w-4 transition-transform group-hover:scale-110" />
                  {unreadCount > 0 && (
                    <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#019EC2]">
                      <span className="text-xs font-bold text-white">
                        {unreadCount}
                      </span>
                    </div>
                  )}
                </button>

                {/* Dropdown de Notificações */}
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 overflow-hidden rounded-xl border border-[#019EC2]/20 bg-black/95 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-[#019EC2]/20 p-4">
                      <h3 className="text-lg font-semibold text-[#F6F7F8]">
                        Notificações
                      </h3>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-sm text-[#019EC2] transition-colors hover:text-[#198097]"
                        >
                          Marcar todas como lidas
                        </button>
                      )}
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <Link href="novidades" key={notification.id}>
                          <div
                            onClick={() => markAsRead(notification.id)}
                            className={`cursor-pointer border-b border-[#019EC2]/10 p-4 transition-colors hover:bg-[#019EC2]/5 ${
                              !notification.read ? "bg-[#019EC2]/5" : ""
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="text-2xl">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1">
                                <h4
                                  className={`font-medium ${!notification.read ? "text-[#F6F7F8]" : "text-gray-300"}`}
                                >
                                  {notification.title}
                                </h4>
                                <p className="mt-1 text-sm text-gray-400">
                                  {notification.message}
                                </p>
                                <p className="mt-2 text-xs text-gray-500">
                                  {notification.time}
                                </p>
                              </div>
                              {!notification.read && (
                                <div className="h-2 w-2 rounded-full bg-[#019EC2]"></div>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-[#019EC2]/20 p-4">
                      <button className="w-full text-center font-medium text-[#019EC2] transition-colors hover:text-[#198097]">
                        Ver todas as notificações
                      </button>
                    </div>
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
                <button className="rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]">
                  <Search className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative rounded-lg p-2 text-[#F6F7F8] transition-all duration-300 hover:bg-[#019EC2]/10 hover:text-[#019EC2]"
                >
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && (
                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#019EC2]"></div>
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
