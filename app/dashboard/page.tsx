"use client";

import {Game} from "@/interface/game";
import { getJogos } from "@/services/game/get";
import { useEffect, useState } from "react";

//PAGINA PARA GERENCIAR OS USUÁRIOS (CRUD)
export default function Dashboard() {




  //ESTADO PARA ARMAZENAR A LISTA DE USUÁRIOS
  const [users, setUsers] = useState<Game[]>([]);

  //CARREGA A LISTA DE USUÁRIOS AO CARREGAR A PÁGINA
  useEffect(() => {
    async function fetchUsers() {
      const data = await getJogos();
      setUsers(data);
    }
    fetchUsers();
}, []);

return (
    //DIV PRINCIPAL COM ESTILIZAÇÃO
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-bold text-white mb-6">Gerenciar Jogos</h1>
        {/* TABELA PARA LISTA DE USUÁRIOS */}
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-gray-800 text-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">Nome</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((jogo) => (
                        <tr key={jogo.id} className="hover:bg-gray-700 transition">
                            <td className="px-6 py-4">{Game.id}</td>
                            <td className="px-6 py-4">{Game.nome}</td>
                            <td className="px-6 py-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2 transition">Editar</button>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition">Excluir</button>
                                {/* AÇÕES PODEM SER ADICIONADAS AQUI, COMO O EDITAR E EXCLUIR IGUAL NO PROJETO DO GLAUCO */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
);

}