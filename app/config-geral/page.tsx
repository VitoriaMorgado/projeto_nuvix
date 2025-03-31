
        'use client';

import React, { useState } from "react";


// Define types
interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  hireDate: string;
}

interface Game {
  id: string;
  title: string;
  genre: string;
  releaseDate: string;
  publisher: string;
  ageRating: string;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isActive: boolean;
}

type TabType = 'dashboard' | 'games' | 'employees' | 'plans' | 'settings';

const AdminDashboard: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  
  // State for forms
  const [newGame, setNewGame] = useState<Omit<Game, 'id'>>({
    title: '',
    genre: '',
    releaseDate: '',
    publisher: '',
    ageRating: '',
  });
  
  const [newEmployee, setNewEmployee] = useState<Omit<Employee, 'id'>>({
    name: '',
    email: '',
    role: '',
    department: '',
    hireDate: '',
  });
  
  const [newPlan, setNewPlan] = useState<Omit<Plan, 'id'>>({
    name: '',
    price: 0,
    description: '',
    features: [''],
    isActive: true,
  });
  
  // Sample data
  const [games, setGames] = useState<Game[]>([
    { id: '1', title: 'Cyberpunk 2077', genre: 'RPG', releaseDate: '2020-12-10', publisher: 'CD Projekt', ageRating: '18+' },
    { id: '2', title: 'FIFA 23', genre: 'Sports', releaseDate: '2022-09-30', publisher: 'EA Sports', ageRating: '3+' },
  ]);
  
  const [employees, setEmployees] = useState<Employee[]>([
    { id: '1', name: 'João Silva', email: 'joao@nuvix.com.br', role: 'Desenvolvedor', department: 'Tecnologia', hireDate: '2022-01-15' },
    { id: '2', name: 'Maria Souza', email: 'maria@nuvix.com.br', role: 'Designer', department: 'Design', hireDate: '2021-08-22' },
  ]);
  
  const [plans, setPlans] = useState<Plan[]>([
    { 
      id: '1', 
      name: 'Free', 
      price: 0, 
      description: 'Plano básico com recursos limitados', 
      features: ['Acesso a jogos gratuitos', 'Sem limite de tempo'], 
      isActive: true 
    },
    { 
      id: '2', 
      name: 'Premium', 
      price: 29.90, 
      description: 'Plano com acesso a todos os jogos', 
      features: ['Acesso a todos os jogos', 'Sem anúncios', 'Recursos exclusivos'], 
      isActive: true 
    },
  ]);
  
  // Form handlers
  const handleGameChange = (field: keyof Omit<Game, 'id'>, value: string) => {
    setNewGame(prev => ({ ...prev, [field]: value }));
  };
  
  const handleEmployeeChange = (field: keyof Omit<Employee, 'id'>, value: string) => {
    setNewEmployee(prev => ({ ...prev, [field]: value }));
  };
  
  const handlePlanChange = (field: keyof Omit<Plan, 'id'>, value: unknown) => {
    setNewPlan(prev => ({ ...prev, [field]: value }));
  };
  
  const handlePlanFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...newPlan.features];
    updatedFeatures[index] = value;
    setNewPlan(prev => ({ ...prev, features: updatedFeatures }));
  };
  
  const addFeatureField = () => {
    setNewPlan(prev => ({ ...prev, features: [...prev.features, ''] }));
  };
  
  const removeFeatureField = (index: number) => {
    const updatedFeatures = [...newPlan.features];
    updatedFeatures.splice(index, 1);
    setNewPlan(prev => ({ ...prev, features: updatedFeatures }));
  };
  
  // Form submission handlers
  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    const gameId = Math.random().toString(36).substr(2, 9);
    setGames([...games, { id: gameId, ...newGame }]);
    setNewGame({
      title: '',
      genre: '',
      releaseDate: '',
      publisher: '',
      ageRating: '',
    });
    alert('Jogo adicionado com sucesso!');
  };
  
  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const employeeId = Math.random().toString(36).substr(2, 9);
    setEmployees([...employees, { id: employeeId, ...newEmployee }]);
    setNewEmployee({
      name: '',
      email: '',
      role: '',
      department: '',
      hireDate: '',
    });
    alert('Funcionário adicionado com sucesso!');
  };
  
  const handleAddPlan = (e: React.FormEvent) => {
    e.preventDefault();
    const planId = Math.random().toString(36).substr(2, 9);
    setPlans([...plans, { id: planId, ...newPlan }]);
    setNewPlan({
      name: '',
      price: 0,
      description: '',
      features: [''],
      isActive: true,
    });
    alert('Plano adicionado com sucesso!');
  };
  
  // Delete handlers
  const handleDeleteGame = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este jogo?')) {
      setGames(games.filter(game => game.id !== id));
    }
  };
  
  const handleDeleteEmployee = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      setEmployees(employees.filter(employee => employee.id !== id));
    }
  };
  
  const handleDeletePlan = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este plano?')) {
      setPlans(plans.filter(plan => plan.id !== id));
    }
  };
  
  // Toggle plan active status
  const togglePlanStatus = (id: string) => {
    setPlans(
      plans.map(plan => 
        plan.id === id ? { ...plan, isActive: !plan.isActive } : plan
      )
    );
  };
  
  // Sidebar tabs configuration
  const tabs: Array<{ id: TabType; label: string; icon: string }> = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'games', label: 'Gerenciamento de Jogos', icon: '🎮' },
    { id: 'employees', label: 'Gestão de Funcionários', icon: '👥' },
    { id: 'plans', label: 'Gerenciamento de Planos', icon: '📋' },
    { id: 'settings', label: 'Configurações', icon: '⚙️' }
  ];

  return (
    <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-full md:w-64 p-4 md:p-6">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left">Painel Admin</h2>
        <div className="space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center ${
                activeTab === tab.id 
                  ? 'bg-gray-700 text-white' 
                  : 'hover:bg-gradient-to-r from-[#223D5A] to-[#0e304a00] text-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="bg-gray-700 shadow-lg p-6 md:p-8 rounded-lg max-w-6xl mx-auto">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Dashboard</h1>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-white mb-2">Total de Jogos</h3>
                  <p className="text-2xl font-bold text-blue-400">{games.length}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-white mb-2">Funcionários</h3>
                  <p className="text-2xl font-bold text-green-400">{employees.length}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-white mb-2">Planos Ativos</h3>
                  <p className="text-2xl font-bold text-purple-400">{plans.filter(p => p.isActive).length}</p>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Ações Rápidas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => setActiveTab('games')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Adicionar Novo Jogo
                  </button>
                  <button 
                    onClick={() => setActiveTab('employees')}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    Adicionar Funcionário
                  </button>
                  <button 
                    onClick={() => setActiveTab('plans')}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  >
                    Gerenciar Planos
                  </button>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Atividade Recente
                </h2>
                <ul className="text-gray-300 space-y-2">
                  <li className="p-2 hover:bg-gray-700 rounded">
                    <span className="text-blue-400">Sistema</span>: Atualização de plataforma v1.2.3
                  </li>
                  <li className="p-2 hover:bg-gray-700 rounded">
                    <span className="text-green-400">João Silva</span>: Adicionou um novo jogo
                  </li>
                  <li className="p-2 hover:bg-gray-700 rounded">
                    <span className="text-purple-400">Maria Souza</span>: Atualizou o plano Premium
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Games Management Tab */}
          {activeTab === 'games' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Gerenciamento de Jogos</h1>
              
              {/* Add New Game Form */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Adicionar Novo Jogo
                </h2>
                <form onSubmit={handleAddGame} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Título do Jogo</label>
                      <input
                        type="text"
                        value={newGame.title}
                        onChange={(e) => handleGameChange('title', e.target.value)}
                        placeholder="Digite o título do jogo"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Gênero</label>
                      <input
                        type="text"
                        value={newGame.genre}
                        onChange={(e) => handleGameChange('genre', e.target.value)}
                        placeholder="Digite o gênero"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Data de Lançamento</label>
                      <input
                        type="date"
                        value={newGame.releaseDate}
                        onChange={(e) => handleGameChange('releaseDate', e.target.value)}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Publicadora</label>
                      <input
                        type="text"
                        value={newGame.publisher}
                        onChange={(e) => handleGameChange('publisher', e.target.value)}
                        placeholder="Digite a publicadora"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Classificação Etária</label>
                      <select
                        value={newGame.ageRating}
                        onChange={(e) => handleGameChange('ageRating', e.target.value)}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Selecione uma classificação</option>
                        <option value="L">Livre</option>
                        <option value="10+">10+</option>
                        <option value="12+">12+</option>
                        <option value="14+">14+</option>
                        <option value="16+">16+</option>
                        <option value="18+">18+</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Adicionar Jogo
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Games List */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Jogos Cadastrados
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300">
                    <thead className="text-white">
                      <tr className="border-b border-gray-600">
                        <th className="p-2 text-left">Título</th>
                        <th className="p-2 text-left">Gênero</th>
                        <th className="p-2 text-left">Lançamento</th>
                        <th className="p-2 text-left">Publicadora</th>
                        <th className="p-2 text-left">Classificação</th>
                        <th className="p-2 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {games.map(game => (
                        <tr key={game.id} className="border-b border-gray-700 hover:bg-gray-700">
                          <td className="p-2">{game.title}</td>
                          <td className="p-2">{game.genre}</td>
                          <td className="p-2">{game.releaseDate}</td>
                          <td className="p-2">{game.publisher}</td>
                          <td className="p-2">{game.ageRating}</td>
                          <td className="p-2 text-right">
                            <button
                              onClick={() => handleDeleteGame(game.id)}
                              className="text-red-400 hover:text-red-500"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                      {games.length === 0 && (
                        <tr>
                          <td colSpan={6} className="p-4 text-center">Nenhum jogo cadastrado.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Employees Management Tab */}
          {activeTab === 'employees' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Gestão de Funcionários</h1>
              
              {/* Add New Employee Form */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Adicionar Novo Funcionário
                </h2>
                <form onSubmit={handleAddEmployee} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Nome</label>
                      <input
                        type="text"
                        value={newEmployee.name}
                        onChange={(e) => handleEmployeeChange('name', e.target.value)}
                        placeholder="Digite o nome completo"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={newEmployee.email}
                        onChange={(e) => handleEmployeeChange('email', e.target.value)}
                        placeholder="Digite o email"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Cargo</label>
                      <input
                        type="text"
                        value={newEmployee.role}
                        onChange={(e) => handleEmployeeChange('role', e.target.value)}
                        placeholder="Digite o cargo"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Departamento</label>
                      <select
                        value={newEmployee.department}
                        onChange={(e) => handleEmployeeChange('department', e.target.value)}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Selecione um departamento</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Design">Design</option>
                        <option value="Vendas">Vendas</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Financeiro">Financeiro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Data de Contratação</label>
                      <input
                        type="date"
                        value={newEmployee.hireDate}
                        onChange={(e) => handleEmployeeChange('hireDate', e.target.value)}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      Adicionar Funcionário
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Employees List */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Funcionários Cadastrados
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300">
                    <thead className="text-white">
                      <tr className="border-b border-gray-600">
                        <th className="p-2 text-left">Nome</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Cargo</th>
                        <th className="p-2 text-left">Departamento</th>
                        <th className="p-2 text-left">Data de Contratação</th>
                        <th className="p-2 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map(employee => (
                        <tr key={employee.id} className="border-b border-gray-700 hover:bg-gray-700">
                          <td className="p-2">{employee.name}</td>
                          <td className="p-2">{employee.email}</td>
                          <td className="p-2">{employee.role}</td>
                          <td className="p-2">{employee.department}</td>
                          <td className="p-2">{employee.hireDate}</td>
                          <td className="p-2 text-right">
                            <button
                              onClick={() => handleDeleteEmployee(employee.id)}
                              className="text-red-400 hover:text-red-500"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                      {employees.length === 0 && (
                        <tr>
                          <td colSpan={6} className="p-4 text-center">Nenhum funcionário cadastrado.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Plans Management Tab */}
          {activeTab === 'plans' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Gerenciamento de Planos</h1>
              
              {/* Add New Plan Form */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Adicionar Novo Plano
                </h2>
                <form onSubmit={handleAddPlan} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Nome do Plano</label>
                      <input
                        type="text"
                        value={newPlan.name}
                        onChange={(e) => handlePlanChange('name', e.target.value)}
                        placeholder="Digite o nome do plano"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Preço (R$)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newPlan.price}
                        onChange={(e) => handlePlanChange('price', parseFloat(e.target.value))}
                        placeholder="Digite o preço"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Descrição</label>
                    <textarea
                      value={newPlan.description}
                      onChange={(e) => handlePlanChange('description', e.target.value)}
                      placeholder="Digite a descrição do plano"
                      className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Funcionalidades</label>
                    {newPlan.features.map((feature, index) => (
                      <div key={index} className="flex mb-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handlePlanFeatureChange(index, e.target.value)}
                          placeholder={`Funcionalidade ${index + 1}`}
                          className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => removeFeatureField(index)}
                          className="bg-red-500 text-white px-3 rounded-r-lg hover:bg-red-600 transition-colors duration-200"
                          disabled={newPlan.features.length <= 1}
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addFeatureField}
                      className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                    >
                      + Adicionar Funcionalidade
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={newPlan.isActive}
                      onChange={(e) => handlePlanChange('isActive', e.target.checked)}
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="isActive" className="text-gray-300">Plano Ativo</label>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                      
                    >
                      Adicionar Plano
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Plans List */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Planos Cadastrados
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300">
                    <thead className="text-white">
                      <tr className="border-b border-gray-600">
                        <th className="p-2 text-left">Nome</th>
                        <th className="p-2 text-left">Preço</th>
                        <th className="p-2 text-left">Descrição</th>
                        <th className="p-2 text-left">Status</th>
                        <th className="p-2 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans.map(plan => (
                        <tr key={plan.id} className="border-b border-gray-700 hover:bg-gray-700">
                          <td className="p-2">{plan.name}</td>
                          <td className="p-2">
                            {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2)}`}
                          </td>
                          <td className="p-2 max-w-xs truncate">{plan.description}</td>
                          <td className="p-2">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs ${
                                plan.isActive ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                              }`}
                            >
                              {plan.isActive ? 'Ativo' : 'Inativo'}
                            </span>
                          </td>
                          <td className="p-2 text-right">
                            <button
                              onClick={() => togglePlanStatus(plan.id)}
                              className={`mr-2 ${
                                plan.isActive ? 'text-yellow-400 hover:text-yellow-500' : 'text-green-400 hover:text-green-500'
                              }`}
                            >
                              {plan.isActive ? 'Desativar' : 'Ativar'}
                            </button>
                            <button
                              onClick={() => handleDeletePlan(plan.id)}
                              className="text-red-400 hover:text-red-500"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                      {plans.length === 0 && (
                        <tr>
                          <td colSpan={5} className="p-4 text-center">Nenhum plano cadastrado.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Configurações</h1>
              
              {/* General Settings */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Configurações Gerais
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Nome da Plataforma</label>
                    <input
                      type="text"
                      defaultValue="Nuvix Gaming"
                      className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email de Contato</label>
                    <input
                      type="email"
                      defaultValue="contato@nuvix.com.br"
                      className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Logo da Plataforma</label>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                        Logo
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        Alterar Logo
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Tema</label>
                    <select className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="dark">Escuro (Padrão)</option>
                      <option value="light">Claro</option>
                      <option value="blue">Azul</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Salvar Configurações
                  </button>
                </div>
              </div>
              
              {/* System Settings */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                  Configurações do Sistema
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="maintenanceMode"
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="maintenanceMode" className="text-gray-300">Modo de Manutenção</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enableRegistration"
                      defaultChecked
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="enableRegistration" className="text-gray-300">Permitir Novos Registros</label>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Versão do Sistema</label>
                    <input
                      type="text"
                      defaultValue="1.2.3"
                      disabled
                      className="w-full p-2 rounded-lg bg-gray-700 text-gray-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Último Backup</label>
                    <input
                      type="text"
                      defaultValue="31/03/2025 08:30"
                      disabled
                      className="w-full p-2 rounded-lg bg-gray-700 text-gray-400 focus:outline-none"
                    />
                    <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm">
                      Realizar Backup Manual
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                    Limpar Cache
                  </button>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Salvar Configurações
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
    