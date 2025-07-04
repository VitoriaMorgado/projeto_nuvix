/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { ShoppingCart, Plus, Minus, X, ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";



const CarrinhoPage = () => {
  const [cartItems, setCartItems] = useState([
    //Linkar com o banco de dados
    { 
      id: 1, 
      name: "Cyberpunk 2077", 
      price: 89.99, 
      quantity: 1,
      image: "/capa_catalogo_cyberpunk.jpg",
      description: "RPG de mundo aberto futurístico"
    },
    { 
      id: 2, 
      name: "Minecraft", 
      price: 99.99, 
      quantity: 1,
      image: "/capa_catalogo_minecraft.jpg",
      description: "Aventura e sandbox"
    },
    { 
      id: 3, 
      name: "The Legend of Zelda: Breath of the Wild",
      price: 79.99, 
      quantity: 1,
      image: "/capa_catalogo_zelda.jpg",
      description: "Aventura épica em mundo aberto de fantasia"
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1E293B] pt-20">
      {/* Header da página */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="flex items-center space-x-2 text-[#F6F7F8] hover:text-[#019EC2] transition-colors duration-300">
                <ArrowLeft className="h-5 w-5" />
                <span>Voltar</span>
              </button>
            </Link>
            <div className="w-px h-6 bg-[#019EC2]/20"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Seu <span className="text-[#019EC2]">Carrinho</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 text-[#F6F7F8]">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-lg font-medium">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'}</span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Carrinho vazio */
          <div className="text-center py-20">
            <ShoppingCart className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h2 className="text-2xl font-semibold text-[#F6F7F8] mb-4">
              Seu carrinho está vazio
            </h2>
            <p className="text-gray-400 mb-8">
              Adicione alguns jogos incríveis ao seu carrinho
            </p>
            <Link href="/catalogo">
              <button className="px-8 py-4 rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explorar Catálogo
              </button>
            </Link>
          </div>
        ) : (
          /* Carrinho com itens */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de produtos */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-black/30 rounded-xl border border-[#019EC2]/20 p-6 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    {/* Imagem do produto */}
                    <div className="relative w-full md:w-48 h-32 md:h-28 rounded-lg overflow-hidden bg-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#019EC2]/20 to-[#198097]/20 flex items-center justify-center">
                        <span className="text-[#F6F7F8] text-sm font-medium">
                          <img
                          src={item.image} 
                            alt= {item.name} 
                          />
                          
                        </span>
                      </div>
                    </div>

                    {/* Informações do produto */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-semibold text-[#F6F7F8] mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {item.description}
                          </p>
                          <p className="text-2xl font-bold text-[#019EC2]">
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Controles de quantidade */}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2 bg-black/50 rounded-lg p-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded border border-[#019EC2]/20 text-[#F6F7F8] hover:bg-[#019EC2]/20 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-[#F6F7F8] font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded border border-[#019EC2]/20 text-[#F6F7F8] hover:bg-[#019EC2]/20 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="mt-4 pt-4 border-t border-[#019EC2]/20">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Subtotal:</span>
                          <span className="text-xl font-semibold text-[#F6F7F8]">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo do pedido */}
            <div className="lg:col-span-1">
              <div className="bg-black/30 rounded-xl border border-[#019EC2]/20 p-6 backdrop-blur-sm sticky top-24">
                <h3 className="text-xl font-semibold text-[#F6F7F8] mb-6">
                  Resumo do Pedido
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'}):</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="border-t border-[#019EC2]/20 pt-4">
                    <div className="flex justify-between text-xl font-bold text-[#F6F7F8]">
                      <span>Total:</span>
                      <span className="text-[#019EC2]">R$ {getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/pagamento">
                    <button className="w-full flex items-center justify-center space-x-2 px-6 mb-4 py-4 rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <CreditCard className="h-5 w-5" />
                      <span>Finalizar Compra</span>
                    </button>
                  </Link>
                  
                  <Link href="/catalogo">
                    <button className="w-full px-6 py-3 rounded-lg border border-[#019EC2] text-[#019EC2] hover:bg-[#019EC2]/10 transition-all duration-300">
                      Continuar Comprando
                    </button>
                  </Link>
                </div>

                {/* Informações adicionais */}
                <div className="mt-6 pt-6 border-t border-[#019EC2]/20">
                  <div className="text-sm text-gray-400 space-y-2">
                    <p>✓ Entrega imediata da chave após a compra</p>
                    <p>✓ Suporte técnico especializado 24/7</p>
                    <p>✓ Não é necessário baixar instaladores, ative direto na plataforma</p>
                    <p>✓ Compra 100% segura e garantida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarrinhoPage;