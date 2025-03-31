'use client';


import Link from "next/link";
import React, { useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  gender: string;
  birthDate: string;
}

type TabType = 'configuracoes' | 'gerenciador' | 'pagamento' | 'privacidade' | 'meuPlano';

const Contela: React.FC = () => {
  // User profile state
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    gender: '',
    birthDate: '',
  });
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('configuracoes');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Update profile fields
  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  // Form submission handler
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password && password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    
    alert('Alterações salvas com sucesso!');
    // Logic to save to backend would go here
  };

  // Navigate to another page
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  // Sidebar tabs configuration
  const tabs: Array<{ id: TabType; label: string }> = [
    { id: 'configuracoes', label: 'Configurações da Conta' },
    { id: 'gerenciador', label: 'Gerenciador de Jogos' },
    { id: 'pagamento', label: 'Opções de Pagamento' },
    { id: 'privacidade', label: 'Privacidade' },
    { id: 'meuPlano', label: 'Meu Plano Nuvix' }
  ];

  return (
    <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-full md:w-64 p-4 md:p-6">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left">Configurações</h2>
        <div className="space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === tab.id 
                  ? 'bg-gray-700 text-white' 
                  : 'hover:bg-gradient-to-r from-[#223D5A] to-[#0e304a00] text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="bg-gray-700 shadow-lg p-6 md:p-8 rounded-lg max-w-6xl mx-auto">
          {/* Account Settings Tab */}
          {activeTab === 'configuracoes' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Configurações da Conta</h1>
              
              {/* User Information */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Informações do Usuário
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
                  <p><span className="font-bold text-white">Nome:</span> {profile.name || "Não definido"}</p>
                  <p><span className="font-bold text-white">Email:</span> {profile.email || "Não definido"}</p>
                  <p><span className="font-bold text-white">Sexo:</span> {profile.gender || "Não definido"}</p>
                  <p><span className="font-bold text-white">Data de Nascimento:</span> {profile.birthDate || "Não definida"}</p>
                </div>
              </div>

              {/* Connected Devices */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Dispositivos Conectados
                </h2>
                <button
                  onClick={() => navigateTo('/dispositivos')}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Ver Detalhes dos Dispositivos
                </button>
              </div>

              {/* Recent Games History */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Histórico de Jogos Recentes
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Nenhum jogo jogado recentemente</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">* Dados obtidos da pasta catálogo.</p>
              </div>

              {/* Add Account */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Adicionar Conta
                </h2>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  Adicionar Nova Conta
                </button>
              </div>
            </div>
          )}

          {/* Game Manager Tab */}
          {activeTab === 'gerenciador' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Gerenciador de Jogos</h1>
              <p className="text-gray-200 text-center mb-6">
                Configure as restrições de temas sensíveis e conteúdo +18 para os jogos.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => navigateTo('/gerenciador-temas')}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Configurar Restrições
                </button>
              </div>
            </div>
          )}

          {/* Payment Options Tab */}
          {activeTab === 'pagamento' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Opções de Pagamento</h1>
              <p className="text-gray-200 text-center mb-6">
                Aqui você pode cadastrar novos cartões ou visualizar os cartões já cadastrados.
              </p>

              {/* Registered Cards */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Cartões Cadastrados
                </h2>
                <div className="flex items-center justify-center">
                  <p className="text-gray-300">Nenhum cartão cadastrado ainda</p>
                </div>
              </div>

              {/* Add Payment Method Button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => navigateTo('/pagamento')}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Adicionar Forma de Pagamento
                </button>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacidade' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Privacidade</h1>
              <p className="text-gray-200 text-center mb-6">
                Aqui você pode alterar suas informações pessoais, email e senha.
              </p>
              
              {/* Form to change information */}
              <form
                onSubmit={handleSaveChanges}
                className="bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-4"
              >
                {/* Change Name */}
                <div>
                <label className="block text-gray-300 mb-2">Novo Nome</label>
    <input
      type="text"
      value={profile.name}
      onChange={(e) => handleProfileChange('name', e.target.value)}
      placeholder="Alterar nome"
      className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

                {/* Change Gender */}
                <div>
    <label className="block text-gray-300 mb-2">Novo Gênero</label>
    <select
      value={profile.gender}
      onChange={(e) => handleProfileChange('gender', e.target.value)}
      className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Selecione uma opção</option>
      <option value="Masculino">Masculino</option>
      <option value="Feminino">Feminino</option>
      <option value="Naobinario">Não binário</option>
      <option value="Agenero">Agênero</option>
      <option value="Prefironaodizer">Prefiro não dizer</option>
    </select>
  </div>


                {/* Change Birthday */}
                <div>
    <label className="block text-gray-300 mb-2">Alterar Data de Aniversário</label>
    <input
      type="date"
      value={profile.birthDate}
      onChange={(e) => handleProfileChange('birthDate', e.target.value)}
      className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

                {/* Notice about changing information */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="confirmChange"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="confirmChange" className="text-gray-300 text-sm">
                    Estou ciente que ao trocar minhas informações, estou sujeito à perda de promoções de aniversário.
                  </label>
                </div>

                {/* Change Email */}
                <div>
                  <label className="block text-gray-300 mb-2">Novo Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    placeholder="Digite seu novo email"
                    className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Change Password */}
                <div>
                  <label className="block text-gray-300 mb-2">Nova Senha</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua nova senha"
                    className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-gray-300 mb-2">Confirmar Nova Senha</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme sua nova senha"
                    className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Save Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    disabled={password !== confirmPassword && password !== ''}
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* My Nuvix Plan Tab */}
          {activeTab === 'meuPlano' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Meu Plano Nuvix</h1>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Informações do Plano
                </h2>
                <p className="text-gray-200 mb-4">Seu plano atual: <strong className="text-blue-400">Free</strong></p>
                

                <div className="mt-6">
                <Link href="/planos">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"> Atualizar
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contela;