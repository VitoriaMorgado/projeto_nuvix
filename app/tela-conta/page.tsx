'use client';

import React, { useState, useEffect } from "react";
import { User, Settings, CreditCard, Shield, Crown, GamepadIcon, Eye, EyeOff, CheckCircle, Sparkles, Plus } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  gender: string;
  birthDate: string;
}

type TabType = 'profile' | 'games' | 'payment' | 'privacy' | 'plan';

const SettingsDashboard: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    gender: 'Masculino',
    birthDate: '1995-08-15',
  });
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return 0;
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const strengthTexts = ['Muito fraca', 'Fraca', 'Regular', 'Boa', 'Muito forte'];

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password !== confirmPassword) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccess(true);
    setPassword('');
    setConfirmPassword('');
    setIsLoading(false);
  };

  const tabs = [
    { id: 'profile' as TabType, label: 'Perfil', icon: User, color: 'from-blue-500 to-cyan-500' },
    { id: 'games' as TabType, label: 'Jogos', icon: GamepadIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'payment' as TabType, label: 'Pagamento', icon: CreditCard, color: 'from-green-500 to-emerald-500' },
    { id: 'privacy' as TabType, label: 'Privacidade', icon: Shield, color: 'from-orange-500 to-red-500' },
    { id: 'plan' as TabType, label: 'Plano', icon: Crown, color: 'from-yellow-500 to-amber-500' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
            <div className="space-y-8 mt-[5%]">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
              <User className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Meu Perfil</h1>
              <p className="text-gray-400">Gerencie suas informações pessoais</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                <span className="text-gray-400">Nome</span>
                <span className="text-white font-medium">{profile.name}</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-gray-400">Email</span>
                <span className="text-white font-medium">{profile.email}</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-gray-400">Gênero</span>
                <span className="text-white font-medium">{profile.gender}</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-gray-400">Nascimento</span>
                <span className="text-white font-medium">
                  {new Date(profile.birthDate).toLocaleDateString('pt-BR')}
                </span>
                </div>
              </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <GamepadIcon className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Jogos Recentes</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                <span>Cyberpunk 2077</span>
                <span className="text-purple-400">2h</span>
                </div>
                <div className="flex justify-between">
                <span>The Witcher 3</span>
                <span className="text-purple-400">5h</span>
                </div>
                <div className="flex justify-between">
                <span>GTA V</span>
                <span className="text-purple-400">1h</span>
                </div>
              </div>
              </div>
            </div>
            </div>
        );

      case 'privacy':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Privacidade</h1>
              <p className="text-gray-400">Altere suas informações e senha</p>
            </div>

            <form onSubmit={handleSave} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Nome</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-orange-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-orange-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Nova Senha</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Digite sua nova senha"
                      className="w-full p-4 pr-12 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {password && (
                    <div className="mt-3">
                      <div className="flex space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                              level <= passwordStrength ? strengthColors[passwordStrength] : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className={`text-xs ${
                        passwordStrength >= 3 ? 'text-green-400' : 
                        passwordStrength >= 2 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {strengthTexts[passwordStrength]}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Confirmar Senha</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme sua senha"
                    className={`w-full p-4 rounded-2xl bg-white/5 text-white border transition-all duration-300 ${
                      confirmPassword && password !== confirmPassword 
                        ? 'border-red-500' : 'border-white/10 focus:border-orange-500'
                    } focus:outline-none`}
                  />
                  {confirmPassword && (
                    <p className={`text-xs mt-2 ${password === confirmPassword ? 'text-green-400' : 'text-red-400'}`}>
                      {password === confirmPassword ? '✓ Senhas coincidem' : '✗ Senhas não coincidem'}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || (!!password && password !== confirmPassword)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-6 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-orange-500/25 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Salvando...</span>
                  </div>
                ) : (
                  'Salvar Alterações'
                )}
              </button>
            </form>
          </div>
        );

      case 'games':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                <GamepadIcon className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Gerenciador de Jogos</h1>
              <p className="text-gray-400">Configure restrições e controle parental</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Controle de Conteúdo</h3>
              <p className="text-gray-400 mb-6">Configure restrições para conteúdo sensível</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-2xl transition-all duration-300 font-medium shadow-lg">
                Configurar Restrições
              </button>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                <CreditCard className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Pagamento</h1>
              <p className="text-gray-400">Gerencie seus métodos de pagamento</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto mb-4 flex items-center justify-center opacity-50">
                  <CreditCard className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-400">Nenhum cartão cadastrado</p>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-6 rounded-2xl font-medium transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Adicionar Cartão</span>
              </button>
            </div>
          </div>
        );

      case 'plan':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                <Crown className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Meu Plano</h1>
              <p className="text-gray-400">Informações da sua assinatura</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Plano Premium</h3>
              <p className="text-gray-400 mb-6">Acesso ilimitado a todos os recursos</p>
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-6 py-2 rounded-full inline-block font-medium">
                Ativo até 15/12/2024
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span>Salvo com sucesso!</span>
        </div>
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-black/20 backdrop-blur-2xl border-r border-white/10 p-6">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Configurações</h2>
                <p className="text-sm text-gray-400">Painel de controle</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{profile.name}</p>
                  <p className="text-gray-400 text-sm truncate">{profile.email}</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full group relative rounded-2xl p-4 text-left transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl` 
                      : 'hover:bg-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;