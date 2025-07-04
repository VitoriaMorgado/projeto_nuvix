"use client";

//========IMPORTS========//


import Link from "next/link";
import { useState } from "react";

const Support = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const supportCategories = [
    { id: "all", name: "Todas Categorias" },
    { id: "payment", name: "Pagamentos" },
    { id: "paykey", name: "Problema no Resgate" },
    { id: "account", name: "Conta" },
  ];
  
  const faqItems = [
    {
      id: "1",
      category: "paykey",
      question: "Como recebo a chave após a compra?",
      answer: "Após a confirmação do pagamento, a chave será enviada para o seu e-mail cadastrado ou ficará disponível na sua conta em nosso site, na seção 'Minhas Compras'."
    },
    {
      id: "2",
      category: "payment",
      question: "Em quanto tempo recebo a chave?",
      answer: "Na maioria dos casos, a entrega é imediata. Porém, pagamentos via boleto bancário ou PIX podem levar até 1 hora (ou mais, dependendo do sistema bancário) para compensar."
    },
    {
      id: "3",
      category: "paykey",
      question: "A chave é original e legal?",
      answer: "Sim. Todas as nossas chaves são adquiridas de distrib"
    },
    {
      id: "4",
      category: "payment",
      question: "Quais métodos de pagamento vocês aceitam?",
      answer: "A Nuvix aceita diversos métodos de pagamento, incluindo cartões de crédito/débito (Visa, Mastercard, American Express), PayPal, Pix, e carteiras digitais como Apple Pay e Google Pay. As opções disponíveis podem variar dependendo da sua localização."
    },
    {
      id: "5",
      category: "account",
      question: "Posso pedir reembolso?",
      answer: "Aceitamos pedidos de reembolso somente se a chave ainda não tiver sido ativada. Após o resgate, não é mais possível cancelar ou devolver a compra. Para solicitar um reembolso, entre em contato com nosso suporte ao cliente com o comprovante de compra e a chave não utilizada."
    },
    {
      id: "6",
      category: "account",
      question: "Esqueci minha senha. Como faço para redefini-la?",
      answer: "Para alterar sua senha, faça login na sua conta, acesse 'Configurações de Perfil', selecione 'Segurança' e clique em 'Alterar Senha'. Você precisará fornecer sua senha atual e então criar uma nova senha."
    },
    {
      id: "7",
      category: "account",
      question: "Como visualizo o histórico de compras na minha conta?",
      answer: "Acesse sua conta, clique em “Minhas Compras” ou “Histórico de Pedidos”. Lá você verá todos os jogos adquiridos, datas de compra e status de entrega das chaves."
    },
    {
      id: "8",
      category: "account",
      question: "O que fazer se não recebi o email de confirmação de cadastro?",
      answer: "Verifique sua caixa de spam/lixo eletrônico. Se não encontrar, acesse sua conta e clique em “Reenviar e-mail de confirmação”. Se ainda tiver problemas, fale com o suporte."
    },
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen mt-[3%] w-full flex-col bg-black">
      {/* NAVBAR */}

      <div className="flex-grow">
        
        {/* CONTEÚDO PRINCIPAL */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] py-16">
          <div className="container mx-auto px-6">
            
            {/* SEÇÃO DE PESQUISA */}
            <div className="mb-12 max-w-3xl mx-auto">
              <div className="bg-[#0A1625]/70 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Como podemos ajudar?</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar por soluções..."
                    className="w-full bg-[#0A1625] border border-[#019EC2]/30 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#019EC2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* CATEGORIAS DE SUPORTE */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-[#019EC2] shadow-lg shadow-[#019EC2]/20"
                      : "bg-[#0A1625]/70 hover:bg-[#0A1625]"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* PERGUNTAS FREQUENTES */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Perguntas <span className="text-[#019EC2]">Frequentes</span>
              </h2>

              {filteredFAQs.length > 0 ? (
                <div className="bg-[#0A1625]/70 rounded-xl overflow-hidden">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="border-b border-[#019EC2]/20 last:border-0">
                      <button 
                        onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                        className="w-full text-left flex items-center justify-between px-6 py-4 text-lg text-white hover:text-[#019EC2] focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 transition-transform ${openItem === faq.id ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openItem === faq.id && (
                        <div className="px-6 py-4 text-[#F6F7F8]/80 bg-[#0A1625]/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-[#0A1625]/70 rounded-xl">
                  <p className="text-xl text-[#F6F7F8]/80">Nenhum resultado encontrado para sua pesquisa.</p>
                  <p className="text-[#019EC2] mt-2">Tente outros termos ou categorias.</p>
                </div>
              )}
            </div>

            {/* CONTATO DIRETO */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-[#0A1625]/70 p-8 rounded-xl shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#019EC2]/20 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#019EC2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Fale Conosco</h3>
                <p className="text-[#F6F7F8]/80 text-center mb-6">Envie um e-mail para nossa equipe de suporte e retornaremos em até 24 horas.</p>
                <div className="flex justify-center">
                  <Link href="/contato">
                    <button className="px-6 py-3 rounded-br-xl rounded-tl-xl bg-[#019EC2] text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                      Enviar Mensagem
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-[#0A1625]/70 p-8 rounded-xl shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#019EC2]/20 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#019EC2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">WhatsApp</h3>
                <p className="text-[#F6F7F8]/80 text-center mb-6">Converse com um atendente Nuvix.</p>
                <div className="flex justify-center">
                  <button className="px-6 py-3 rounded-br-xl rounded-tl-xl bg-[#019EC2] text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">
                    Iniciar Chat
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Support;