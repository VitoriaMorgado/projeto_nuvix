"use client";

import React, { use, useState } from 'react';
import { User, Mail, Camera, Check, X, Edit3, Save } from 'lucide-react';
import Link from 'next/link';

export default function UserProfilePage() {

  // USUARIO
  const [user, setUser] = useState<{
    id: string;
    username: string;
    email: string;
    profilePicture: string | null;
    emailVerified: boolean;
  }>({
    id: 'USR-2024-7891234', // ID interno - não visível ao usuário
    username: 'Usuario0_',
    email: 'Usuario@email.com',
    profilePicture: null,
    emailVerified: false
  });

  // EDIÇÃO DE DADOS
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempUsername, setTempUsername] = useState(user.username);
  const [tempEmail, setTempEmail] = useState(user.email);

  // Funções de edição
  const handleUsernameEdit = () => {
    if (isEditingUsername) {
      setUser({ ...user, username: tempUsername });
    }
    setIsEditingUsername(!isEditingUsername);
  };

  const handleEmailEdit = () => {
    if (isEditingEmail) {
      setUser({ ...user, email: tempEmail, emailVerified: false });
    }
    setIsEditingEmail(!isEditingEmail);
  };

  const handleImageUpload = (event: { target: { files: any[]; }; }) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser({ ...user, profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#1E293B] min-h-screen">
      {/* HEADER */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
            Perfil do Usuário
          </span>
        </h1>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 rounded-3xl p-8 border border-white/10">
            
            {/* FOTO DE PERFIL */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-[#019EC2] p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-[#1E293B] flex items-center justify-center overflow-hidden">
                    {user.profilePicture ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={user.profilePicture} 
                        alt={username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-[#F6F7F8]/50" />
                    )}
                  </div>
                </div>
                
                <label className="absolute bottom-0 right-0 bg-[#019EC2] hover:bg-[#198097] p-2 rounded-full cursor-pointer transition-all">
                  <Camera className="w-5 h-5 text-white" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-[#F6F7F8]/60 text-sm">Foto de perfil (opcional)</p>
            </div>

            {/* NOME DE USUÁRIO */}
            <div className="mb-8">
              <label className="block text-[#019EC2] font-semibold mb-3 text-lg">
                Nome de Usuário
              </label>
              <div className="flex gap-4">
                {isEditingUsername ? (
                  <input
                    type="text"
                    value={tempUsername}
                    onChange={(e) => setTempUsername(e.target.value)}
                    className="flex-1 px-4 py-3 bg-[#1E293B] border border-white/20 rounded-xl text-[#F6F7F8] focus:border-[#019EC2] focus:outline-none"
                    placeholder="Digite seu nome de usuário"
                  />
                ) : (
                  <div className="flex-1 px-4 py-3 bg-[#1E293B]/50 rounded-xl text-[#F6F7F8] border border-white/10">
                    @{user.username}
                  </div>
                )}
                
                <button
                  onClick={handleUsernameEdit}
                  className="px-6 py-3 bg-[#019EC2] hover:bg-[#198097] text-white rounded-xl transition-all flex items-center gap-2"
                >
                  {isEditingUsername ? (
                    <>
                      <Save className="w-4 h-4" />
                      Salvar
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-4 h-4" />
                      Editar
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* E-MAIL */}
            <div className="mb-8">
              <label className="block text-[#019EC2] font-semibold mb-3 text-lg">
                E-mail Cadastrado
              </label>
              <div className="space-y-4">
                <div className="flex gap-4">
                  {isEditingEmail ? (
                    <input
                      type="email"
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-[#1E293B] border border-white/20 rounded-xl text-[#F6F7F8] focus:border-[#019EC2] focus:outline-none"
                      placeholder="Digite seu e-mail"
                    />
                  ) : (
                    <div className="flex-1 px-4 py-3 bg-[#1E293B]/50 rounded-xl text-[#F6F7F8] border border-white/10 flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#019EC2]" />
                      {user.email}
                    </div>
                  )}
                  
                  <button
                    onClick={handleEmailEdit}
                    className="px-6 py-3 bg-[#019EC2] hover:bg-[#198097] text-white rounded-xl transition-all flex items-center gap-2"
                  >
                    {isEditingEmail ? (
                      <>
                        <Save className="w-4 h-4" />
                        Salvar
                      </>
                    ) : (
                      <>
                        <Edit3 className="w-4 h-4" />
                        Editar
                      </>
                    )}
                  </button>
                </div>

                {/* Status de Verificação */}
                <div className="flex items-center justify-between p-4 bg-[#1E293B]/30 rounded-xl">
                  <div className="flex items-center gap-2">
                    {user.emailVerified ? (
                      <>
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">E-mail verificado</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-red-400" />
                        <span className="text-red-400">E-mail não verificado</span>
                      </>
                    )}
                  </div>

                  {!user.emailVerified && (
                    <button
                      onClick={() => setUser({ ...user, emailVerified: true })}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all text-sm"
                    >
                      Verificar
                    </button>
                  )}
                </div>
              </div>
            </div>


            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/">
              <button className="flex-1 px-8 py-4 rounded-br-3xl rounded-tl-3xl bg-[#019EC2] hover:bg-[#198097] text-lg font-bold text-[#F6F7F8] transition-all">
                Salvar Alterações
              </button>
             </Link>
             <Link href="/">
              <button className="flex-1 px-8 py-4 rounded-br-3xl rounded-tl-3xl border-2 border-[#019EC2] text-lg font-bold text-[#019EC2] hover:bg-[#019EC2] hover:text-[#F6F7F8] transition-all">
                Cancelar
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}