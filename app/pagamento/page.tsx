"use client";

import { ArrowLeft, CreditCard, Lock, User, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PagamentoPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("credit");
    const [formData, setFormData] = useState({
        // Dados do cartão
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        // Dados pessoais
        fullName: "",
        email: "",
        phone: "",
        cpf: ""
    });

    // Dados do carrinho (simulados)
    const cartItems = [
        { 
            id: 1, 
            name: "Cyberpunk 2077", 
            price: 89.99, 
            quantity: 1
        },
        { 
            id: 2, 
            name: "Minecraft", 
            price: 99.99, 
            quantity: 1
        },
        { 
            id: 3, 
            name: "The Legend of Zelda: Breath of the Wild",
            price: 79.99, 
            quantity: 1
        }
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Aqui você processaria o pagamento
        console.log("Processando pagamento...", formData);
        alert("Compra realizada com sucesso!");
    };

    const formatCardNumber = (value: string) => {
        return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCardNumber(e.target.value);
        if (formattedValue.length <= 19) {
            setFormData(prev => ({
                ...prev,
                cardNumber: formattedValue
            }));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1E293B] pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header da página */}
                <div className="flex items-center space-x-4 mb-8">
                    <button 
                        type="button"
                        onClick={() => window.history.back()}
                        className="flex items-center space-x-2 text-[#F6F7F8] hover:text-[#019EC2] transition-colors duration-300"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Voltar</span>
                    </button>
                    <div className="w-px h-6 bg-[#019EC2]/20"></div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        <span className="text-[#019EC2]">Finalizar</span> Compra
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Formulário de pagamento */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-6">
                            
                            {/* Método de pagamento */}
                            <div className="bg-black/30 rounded-xl border border-[#019EC2]/20 p-6 backdrop-blur-sm">
                                <h3 className="text-xl font-semibold text-[#F6F7F8] mb-6 flex items-center">
                                    <CreditCard className="h-5 w-5 mr-2" />
                                    Método de Pagamento
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    {[
                                        { id: "credit", label: "Cartão de Crédito", icon: "💳" },
                                        { id: "debit", label: "Cartão de Débito", icon: "💳" },
                                        { id: "pix", label: "PIX", icon: "/pagamento_nuvix_pix.png", isImage: true }
                                    ].map(method => (
                                        <button
                                            key={method.id}
                                            type="button"
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`p-4 rounded-lg border transition-all duration-300 ${
                                                paymentMethod === method.id
                                                    ? 'border-[#019EC2] bg-[#019EC2]/10 text-[#019EC2]'
                                                    : 'border-[#019EC2]/20 text-[#F6F7F8] hover:border-[#019EC2]/50'
                                            }`}
                                        >
                                            <div className="text-2xl mb-2 flex justify-center items-center">
                                                {method.isImage ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={method.icon as string}
                                                        alt={method.label}
                                                        className="h-8 w-8 object-contain"
                                                    />
                                                ) : (
                                                    method.icon
                                                )}
                                            </div>
                                            <div className="text-sm font-medium">{method.label}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Formulário do cartão */}
                                {(paymentMethod === "credit" || paymentMethod === "debit") && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                                    Número do Cartão
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    onChange={handleCardNumberChange}
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                                    Nome no Cartão
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cardName"
                                                    value={formData.cardName}
                                                    onChange={handleInputChange}
                                                    placeholder="João Silva"
                                                    className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                                    Validade
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    value={formData.expiryDate}
                                                    onChange={handleInputChange}
                                                    placeholder="MM/AA"
                                                    maxLength={5}
                                                    className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    placeholder="123"
                                                    maxLength={3}
                                                    className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* PIX */}
                                {paymentMethod === "pix" && (
                                    <div className="text-center py-8">
                                        <div className="bg-[#019EC2]/10 rounded-lg p-6 border border-[#019EC2]/20">
                                            <h4 className="text-lg font-semibold text-[#019EC2] mb-2">
                                                Pagamento via PIX
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                Após confirmar o pedido, você receberá o código PIX para pagamento instantâneo.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dados pessoais */}
                            <div className="bg-black/30 rounded-xl border border-[#019EC2]/20 p-6 backdrop-blur-sm">
                                <h3 className="text-xl font-semibold text-[#F6F7F8] mb-6 flex items-center">
                                    <User className="h-5 w-5 mr-2" />
                                    Dados Pessoais
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                            Nome Completo
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="João Silva Santos"
                                            className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                            CPF
                                        </label>
                                        <input
                                            type="text"
                                            name="cpf"
                                            value={formData.cpf}
                                            onChange={handleInputChange}
                                            placeholder="000.000.000-00"
                                            className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="joao@email.com"
                                            className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#F6F7F8] mb-2">
                                            Telefone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="(11) 99999-9999"
                                            className="w-full px-4 py-3 bg-black/50 border border-[#019EC2]/20 rounded-lg text-[#F6F7F8] placeholder-gray-400 focus:border-[#019EC2] focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resumo do pedido */}
                    <div className="lg:col-span-1">
                        <div className="bg-black/30 rounded-xl border border-[#019EC2]/20 p-6 backdrop-blur-sm sticky top-24">
                            <h3 className="text-xl font-semibold text-[#F6F7F8] mb-6">
                                Resumo do Pedido
                            </h3>

                            {/* Lista de produtos */}
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <div className="flex-1">
                                            <p className="text-[#F6F7F8] font-medium truncate">
                                                {item.name}
                                            </p>
                                            <p className="text-gray-400">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>
                                        <p className="text-[#019EC2] font-semibold ml-2">
                                            R$ {(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Totais */}
                            <div className="space-y-2 mb-6 pt-4 border-t border-[#019EC2]/20">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'}):</span>
                                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Taxas:</span>
                                    <span>R$ 0,00</span>
                                </div>
                                <div className="border-t border-[#019EC2]/20 pt-2">
                                    <div className="flex justify-between text-xl font-bold text-[#F6F7F8]">
                                        <span>Total:</span>
                                        <span className="text-[#019EC2]">R$ {getTotalPrice().toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Botão de finalizar */}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                <Link href="/." className="flex items-center space-x-2">
                                <Lock className="h-5 w-5" />
                                <span>Finalizar Pagamento</span>
                                </Link>
                            </button>

                            {/* Segurança */}
                            <div className="mt-6 pt-6 border-t border-[#019EC2]/20">
                                <div className="text-sm text-gray-400 space-y-2">
                                    <p className="flex items-center">
                                        <Check className="h-4 w-4 text-[#019EC2] mr-2" />
                                        Pagamento 100% seguro e protegido
                                    </p>
                                    <p className="flex items-center">
                                        <Check className="h-4 w-4 text-[#019EC2] mr-2" />
                                        Entrega imediata das chaves
                                    </p>
                                    <p className="flex items-center">
                                        <Check className="h-4 w-4 text-[#019EC2] mr-2" />
                                        Suporte 24/7 disponível
                                    </p>
                                    <p className="flex items-center">
                                        <Check className="h-4 w-4 text-[#019EC2] mr-2" />
                                        Garantia de reembolso
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagamentoPage;