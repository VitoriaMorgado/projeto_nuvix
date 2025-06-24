"use client";

import { useState } from "react";
import Link from "next/link";
import NavBarp from "../comp/navbar/navbar";
import Rodape from "@/app/Componentes/navbar/rodape";

const RecuperarSenha = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [emailEnviado, setEmailEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar e-mail de recuperação aqui
    console.log("Email para recuperação:", formData.email);
    setEmailEnviado(true);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* Navbar */}
      <NavBarp />

      <div className="flex-grow">
        {/* Container para conteúdo da página */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] min-h-[calc(100vh-64px)]">
          <div className="container mx-auto flex items-center justify-center px-6 py-16">
            <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
              {/* Imagem lateral */}
              <div className="hidden lg:block lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 to-transparent z-10"></div>
                <div className="bg-gradient-to-b from-[#0E304A] to-[#02030a]"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-20">
                  <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F6F7F8] to-[#198097]">
                    Nuvix
                  </h2>
                  <p className="text-[#F6F7F8] text-xl mb-4">
                    Recupere o acesso à sua conta para voltar a jogar seus títulos favoritos.
                  </p>
                  <p className="text-[#F6F7F8]/90 text-lg">
                    Enviaremos instruções para redefinir sua senha ao e-mail cadastrado.
                  </p>
                </div>
              </div>

              {/* Formulário de recuperação de senha */}
              <div className="w-full lg:w-1/2 bg-[#020913] p-8 md:p-12">
                {!emailEnviado ? (
                  <>
                    <div className="mb-8 text-center">
                      <h3 className="text-4xl font-bold text-white mb-2">Recuperar Senha</h3>
                      <p className="text-[#019EC2]">
                        Digite seu e-mail para receber instruções de recuperação
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#F6F7F8] mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#0A1622] border border-[#198097]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                          placeholder="Digite o email da sua conta"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full rounded-br-3xl rounded-tl-3xl bg-[#019EC2] py-3 text-lg font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors"
                        >
                          Enviar instruções
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="mb-8 text-center">
                    <div className="flex justify-center mb-6">
                      <svg
                        className="w-16 h-16 text-[#019EC2]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">E-mail enviado!</h3>
                    <p className="text-[#F6F7F8] mb-6">
                      Enviamos as instruções de recuperação para:
                      <br />
                      <span className="text-[#019EC2] font-medium">{formData.email}</span>
                    </p>
                    <p className="text-[#F6F7F8]/80 mb-8">
                      Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
                      O link enviado é válido por 24 horas.
                    </p>
                    <button
                      onClick={() => setEmailEnviado(false)}
                      className="text-[#019EC2] hover:text-[#198097] font-medium"
                    >
                      Não recebeu? Tente novamente
                    </button>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <p className="text-[#F6F7F8]">
                    Lembrou sua senha?{" "}
                    <Link href="/login" className="font-medium text-[#019EC2] hover:text-[#198097]">
                      Voltar ao login
                    </Link>
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="mx-4 text-sm text-gray-400">ou</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-[#F6F7F8] mb-4">Ainda não tem uma conta?</p>
                    <Link
                      href="/cadastro"
                      className="inline-block rounded-br-3xl rounded-tl-3xl border border-[#019EC2] px-6 py-2 text-[#F6F7F8] hover:bg-[#019EC2]/20 transition-colors"
                    >
                      Cadastre-se
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-0 w-full">
        <Rodape />
      </div>
    </div>
  );
};

export default RecuperarSenha;