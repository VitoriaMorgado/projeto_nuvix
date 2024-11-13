"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

import Link from "next/link";
import router from "next/router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newUser = { name, email, password };

    const isRegistered = true;

    if (isRegistered) {
      // Redirecionar para a página de login após o cadastro
      router.push("/login");
    } else {
      // Lidar com falha no cadastro (exibir mensagem de erro, etc.)
      alert("Falha no cadastro. Tente novamente.");
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 p-9">
      {/* LOGO NUVIX */}
      <Image src={Logo} alt="Logo" width={300} height={300} className="mb-1" />

      {/* TÍTULO */}
      <h1 className="mb-4 text-center font-sans text-2xl font-bold text-white">
        Cadastro
      </h1>

      {/* FORMULÁRIO DE CADASTRO */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-white"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
            required
            placeholder="Seu nome"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-white"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border p-2"
            required
            placeholder="seuemail@exemplo.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-white"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border p-2"
            required
            placeholder="******"
          />
        </div>
        <Link href="/login">
          <button
            type="submit"
            className="w-full rounded bg-blue-800 py-2 text-white hover:bg-blue-950"
          >
            Criar Conta
          </button>
        </Link>
      </form>

      {/* Link para página de login */}
      <div className="mt-4 text-white">
        <Link href="/login" className="text-blue-400 hover:underline">
          Já tem uma conta? Faça login aqui.
        </Link>
      </div>
    </div>
  );
};

export default Signup;
