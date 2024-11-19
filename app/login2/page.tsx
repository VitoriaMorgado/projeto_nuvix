"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";

const Loginn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    email: "usuario123",
    password: "senha123",
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Adicionar as parada de conta

    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirecionar para a página de pagamento
      const plan = router.query.plan || "";
      router.push(`/payment?plan=${plan}`);
    } else {
      // Lidar com a falha na autenticação (exibir mensagem de erro, etc.)
      alert("Falha na autenticação. Verifique suas credenciais.");
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#0E304A] to-[#154B74] p-6">
      {/* LOGO NUVIX */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={300}
        className="mb-4 sm:mb-6 md:mb-9"
      />

      {/* TÍTULO */}
      <h1 className="mb-4 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
        Login
      </h1>

      {/* FORMULÁRIO DE LOGIN */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-white"
            htmlFor="email"
          >
            E-mail:
          </label>
          <input
            type="string"
            id="email"
            value={email}
            onChange={(e) => setEmail(String(e.target.value))}
            className="w-full rounded border p-2"
            required
            placeholder="seu.email@exemplo.com"
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
            onChange={(e) => setPassword(String(e.target.value))}
            className="w-full rounded border p-2"
            required
            placeholder=""
          />

          {email == user.email && password == user.password ? (
            <Link href="/">
              <button
                type="submit"
                className="my-4 w-full rounded bg-[#019EC2] py-2 text-white hover:bg-blue-950"
              >
                Entrar
              </button>
            </Link>
          ) : (
            <button
              type="submit"
              className="my-4 w-full rounded bg-[#019EC2] py-2 text-white hover:bg-[#075d70]"
            >
              Entrar
            </button>
          )}
        </div>
      </form>

      {/* Link para página de cadastro */}
      <div className="mt-4 text-sm text-white sm:text-base">
        <Link href="/cadastro" className="text-blue-400 hover:underline">
          Não tem uma conta? Cadastre-se aqui.
        </Link>
      </div>
    </div>
  );
};

export default Loginn;
