import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, User, Bell, Search, LogOut, Settings} from 'lucide-react';
import Link from 'next/link';

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
      type: "game"
    },
    {
      id: 2,
      title: "Desconto especial",
      message: "20% off em todos os planos premium",
      time: "1 hora atrás",
      read: false,
      type: "offer"
    },
    {
      id: 3,
      title: "Manutenção programada",
      message: "Servidor offline das 02:00 às 04:00",
      time: "3 horas atrás",
      read: true,
      type: "info"
    },
    {
      id: 4,
      title: "Conquista desbloqueada!",
      message: "Você completou 10 jogos este mês",
      time: "1 dia atrás",
      read: true,
      type: "achievement"
    }
  ]);

  const notificationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Jogos', href: '/jogo' },
    { name: 'Novidades', href: '/novidades' },
    { name: 'Suporte', href: '/suporte' }
  ];

  const userMenuItems = [
    { name: 'Meu Perfil', icon: User, href: '/perfil' },
    { name: 'Configurações', icon: Settings, href: '/tela-conta' },
    { name: 'Ajuda', icon: User, href: '/suporte' },
    { name: 'Sair', icon: LogOut, href: '/login', danger: true }
  ];

  // Fechar dropdowns quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: { target: unknown; }) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'game': return '🎮';
      case 'offer': return '💰';
      case 'achievement': return '🏆';
      default: return '📢';
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-[#019EC2]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative group">
              <Link href="/">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2] hover:from-[#019EC2] hover:to-[#198097] transition-all duration-300 ">
                Nuvix
              </h1>
              </Link>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#019EC2] to-[#198097] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="w-2 h-2 bg-[#019EC2] rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group text-[#F6F7F8] hover:text-[#019EC2] transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#019EC2] to-[#198097] group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 bg-[#019EC2]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Right Side - Search, Notifications, User */}
          <div className="hidden md:flex items-center space-x-2">
            
            {/* Search Button */}
            <button className="p-2 text-[#F6F7F8] hover:text-[#019EC2] hover:bg-[#019EC2]/10 rounded-lg transition-all duration-300 group">
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-[#F6F7F8] hover:text-[#019EC2] hover:bg-[#019EC2]/10 rounded-lg transition-all duration-300 group relative"
              >
                <Bell className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#019EC2] rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{unreadCount}</span>
                  </div>
                )}
              </button>

              {/* Dropdown de Notificações */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-black/95 backdrop-blur-xl border border-[#019EC2]/20 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-[#019EC2]/20 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#F6F7F8]">Notificações</h3>
                    {unreadCount > 0 && (
                      <button 
                        onClick={markAllAsRead}
                        className="text-sm text-[#019EC2] hover:text-[#198097] transition-colors"
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
                          className={`p-4 border-b border-[#019EC2]/10 cursor-pointer transition-colors hover:bg-[#019EC2]/5 ${
                            !notification.read ? 'bg-[#019EC2]/5' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                            <div className="flex-1">
                              <h4 className={`font-medium ${!notification.read ? 'text-[#F6F7F8]' : 'text-gray-300'}`}>
                                {notification.title}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-[#019EC2] rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                    
                  </div>
                  
                  
                  <div className="p-4 border-t border-[#019EC2]/20">
                    <button className="w-full text-center text-[#019EC2] hover:text-[#198097] transition-colors font-medium">
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
                className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-[#019EC2] to-[#198097] text-white rounded-full hover:from-[#198097] hover:to-[#019EC2] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#019EC2]/25"
              >
                <User className="w-4 h-4" />
                <span className="font-medium text-sm">Usuario0_</span>
              </button>

              {/* Dropdown do Usuário */}
              {showUserMenu && (
                <div className="absolute right-0 top-12 w-64 bg-black/95 backdrop-blur-xl border border-[#019EC2]/20 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-[#019EC2]/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#019EC2] to-[#198097] rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#F6F7F8]">User_name</h3>
                        <p className="text-sm text-gray-400">UserEmail@email.com</p>
                        <div className="flex items-center space-x-1 mt-1">
                        </div>
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
                            ? 'text-red-400 hover:text-red-300' 
                            : 'text-[#F6F7F8] hover:text-[#019EC2]'
                        }`}
                        onClick={() => setShowUserMenu(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>

                  <div className="p-4 border-t border-[#019EC2]/20 bg-[#019EC2]/5">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-2"></p>
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
              className="p-2 text-[#F6F7F8] hover:text-[#019EC2] transition-colors duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 space-y-1 border-t border-[#019EC2]/20">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-[#F6F7F8] hover:text-[#019EC2] hover:bg-[#019EC2]/10 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center justify-between px-4 py-2 border-t border-[#019EC2]/20 mt-2">
              <button className="p-2 text-[#F6F7F8] hover:text-[#019EC2] hover:bg-[#019EC2]/10 rounded-lg transition-all duration-300">
                <Search className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-[#F6F7F8] hover:text-[#019EC2] hover:bg-[#019EC2]/10 rounded-lg transition-all duration-300 relative"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#019EC2] rounded-full"></div>
                )}
              </button>
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-[#019EC2] to-[#198097] text-white rounded-full hover:from-[#198097] hover:to-[#019EC2] transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span className="font-medium text-sm">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarp;