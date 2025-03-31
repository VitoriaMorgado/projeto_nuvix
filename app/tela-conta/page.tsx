'use client';

import React, { useState } from "react";

const Contela = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name] = useState('');
    const [email] = useState('');
    const [password] = useState('');
    const [phone] = useState('');
    const [address] = useState('');
    const [selectedPayment] = useState('');
    const [blockAdultGames, setBlockAdultGames] = useState(false);
    const [, setErrors] = useState({ name: '', email: '', password: '', phone: '', address: '' });
    const [activeTab, setActiveTab] = useState('configuracoes'); // Estado para controlar a aba ativa

    const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newErrors = { name: '', email: '', password: '', phone: '', address: '' };

        // Validações opcionais:
        if (email && !validateEmail(email)) {
            newErrors.email = 'Email inválido';
        }
        if (password && password.length < 6) {
            newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
        }

        setErrors(newErrors);

        // Se não houver erros, salva os dados
        if (!Object.values(newErrors).some((error) => error)) {
            console.log({ name, email, password, phone, address, selectedPayment, blockAdultGames });
            setIsEditing(false); // Sai do modo de edição
        }
    };

    return (
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] min-h-screen flex">
            {/* Aba lateral */}
            <div className="bg-gray-800 text-white w-64 p-6">
                <h2 className="text-xl font-bold mb-4">Configurações</h2>
                <div className="space-y-4">
                    <button
                        onClick={() => setActiveTab('configuracoes')}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            activeTab === 'configuracoes' ? 'bg-gray-700' : 'hover:bg-gradient-to-b from-[#223D5A] to-[#0e304a00]'
                        }`}
                    >
                        Configurações da Conta
                    </button>
                    <button
                        onClick={() => setActiveTab('gerenciador')}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            activeTab === 'gerenciador' ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                    >
                        Gerenciador de Jogos
                    </button>
                    
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 bg-gray-700 shadow-lg p-8 max-w-xl w-[80%] mx-auto rounded-lg">
                {activeTab === 'configuracoes' && (
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-8 text-center">Configurações da Conta</h1>
                        {!isEditing ? (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-300">Informações Pessoais</h2>
                                    <p className="text-gray-200"><strong>Nome:</strong> {name || 'Não informado'}</p>
                                    <p className="text-gray-200"><strong>Email:</strong> {email || 'Não informado'}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-300">Segurança</h2>
                                    <p className="text-gray-200"><strong>Senha:</strong> {password ? '******' : 'Não informado'}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-300">Contato</h2>
                                    <p className="text-gray-200"><strong>Telefone:</strong> {phone || 'Não informado'}</p>
                                    <p className="text-gray-200"><strong>Endereço:</strong> {address || 'Não informado'}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-300">Formas de Pagamento</h2>
                                    <p className="text-gray-200">
                                        <strong>Forma de Pagamento Padrão:</strong> {selectedPayment || 'Nenhuma selecionada'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="w-full py-4 bg-[#019EC2] text-white font-bold text-lg rounded-lg hover:bg-[#198097] transition-colors"
                                >
                                    Alterar Dados
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Formulário de edição */}
                            </form>
                        )}
                    </div>
                )}
                {activeTab === 'gerenciador' && (
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-8 text-center">Gerenciador de Jogos</h1>
                        <p className="text-gray-200 text-lg mb-4">Você tem mais de 18 anos?</p>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={blockAdultGames}
                                onChange={(e) => setBlockAdultGames(e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-500"
                            />
                            <span>Sim, quero bloquear jogos ofensivos</span>
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contela;