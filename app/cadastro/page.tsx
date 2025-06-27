"use client";

import { useState } from "react";
import Link from "next/link";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
    termos: false,
  });

  const [cadastroRealizado, setCadastroRealizado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verificar se as senhas são iguais
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica de cadastro aqui
    console.log("Dados de cadastro:", formData);
    setCadastroRealizado(true);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <div className="flex-grow">
        {/* Container para conteúdo da página */}
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#02030a] to-[#0E304A]">
          <div className="container mx-auto flex items-center justify-center px-6 py-12">
            <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
              {/* Imagem lateral */}
              <div className="relative hidden lg:block lg:w-1/2">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000]/80 to-transparent"></div>
                <div className="bg-gradient-to-b from-[#0E304A] to-[#02030a]"></div>
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-center p-12">
                  <h2 className="mb-6 bg-gradient-to-r from-[#F6F7F8] to-[#198097] bg-clip-text text-5xl font-bold text-transparent">
                    Nuvix
                  </h2>
                  <p className="mb-4 text-xl text-[#F6F7F8]">
                    Crie sua conta e tenha acesso a jogos na nuvem de alta
                    qualidade.
                  </p>
                  <p className="text-lg text-[#F6F7F8]/90">
                    Jogue em qualquer dispositivo, sem a necessidade de hardware
                    potente.
                  </p>
                  <div className="mt-8"></div>
                </div>
              </div>

              {/* Formulário de cadastro */}
              <div className="w-full bg-[#020913] p-8 md:p-12 lg:w-1/2">
                {!cadastroRealizado ? (
                  <>
                    <div className="mb-8 text-center">
                      <h3 className="mb-2 text-4xl font-bold text-white">
                        Criar Conta
                      </h3>
                      <p className="text-[#019EC2]">
                        Cadastre-se e comece a jogar
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="nome"
                          className="mb-2 block text-sm font-medium text-[#F6F7F8]"
                        >
                          Nome completo
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-[#198097]/30 bg-[#0A1622] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                          placeholder="Digite seu nome completo"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-[#F6F7F8]"
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
                          className="w-full rounded-lg border border-[#198097]/30 bg-[#0A1622] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                          placeholder="Digite seu email"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="mb-2 block text-sm font-medium text-[#F6F7F8]"
                        >
                          Senha
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          minLength={6}
                          className="w-full rounded-lg border border-[#198097]/30 bg-[#0A1622] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                          placeholder="Crie uma senha forte"
                        />
                        <p className="mt-1 text-xs text-gray-400">
                          Mínimo de 6 caracteres
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="confirmPassword"
                          className="mb-2 block text-sm font-medium text-[#F6F7F8]"
                        >
                          Confirmar senha
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-[#198097]/30 bg-[#0A1622] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#019EC2]"
                          placeholder="Confirme sua senha"
                        />
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="termos"
                          name="termos"
                          checked={formData.termos}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 rounded border-[#198097] text-[#019EC2] focus:ring-[#019EC2]"
                        />
                        <label
                          htmlFor="termos"
                          className="ml-2 block text-sm text-[#F6F7F8]"
                        >
                          Concordo com os{" "}
                          <Link
                            href="/termos"
                            className="text-[#019EC2] hover:text-[#198097]"
                          >
                            Termos de Serviço
                          </Link>{" "}
                          e{" "}
                          <Link
                            href="/privacidade"
                            className="text-[#019EC2] hover:text-[#198097]"
                          >
                            Política de Privacidade
                          </Link>
                        </label>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full rounded-br-3xl rounded-tl-3xl bg-[#019EC2] py-3 text-lg font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097]"
                        >
                          Criar conta
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="mb-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <svg
                        className="h-16 w-16 text-[#019EC2]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-4xl font-bold text-white">
                      Cadastro realizado!
                    </h3>
                    <p className="mb-6 text-[#F6F7F8]">
                      Enviamos um e-mail de confirmação para:
                      <br />
                      <span className="font-medium text-[#019EC2]">
                        {formData.email}
                      </span>
                    </p>
                    <p className="mb-8 text-[#F6F7F8]/80">
                      Verifique seu e-mail e clique no link de confirmação para
                      ativar sua conta.
                    </p>
                    <Link
                      href="/login"
                      className="inline-block rounded-br-3xl rounded-tl-3xl bg-[#019EC2] px-6 py-3 text-lg font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097]"
                    >
                      Ir para o login
                    </Link>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <p className="text-[#F6F7F8]">
                    Já tem uma conta?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-[#019EC2] hover:text-[#198097]"
                    >
                      Faça login
                    </Link>
                  </p>
                </div>

                {!cadastroRealizado && (
                  <div className="mt-8">
                    <div className="flex items-center">
                      <div className="flex-grow border-t border-gray-600"></div>
                      <span className="mx-4 text-sm text-gray-400">
                        ou cadastre-se com
                      </span>
                      <div className="flex-grow border-t border-gray-600"></div>
                    </div>

                    <div className="mx-auto mt-6 flex w-[50%] justify-center rounded-2xl shadow-lg dark:bg-zinc-900">
                      <button className="flex items-center justify-center gap-2 rounded-xl border border-[#198097]/30 bg-[#0A1622] px-4 py-2 transition-all duration-300 hover:bg-[#0E304A]/60 hover:shadow-md">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
