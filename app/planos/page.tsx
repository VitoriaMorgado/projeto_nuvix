"use client";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 p-6 sm:p-8 md:p-9">
      {/* LOGO NUVIX */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
        className="md:mb- mb-4 sm:mb-6"
      />

      {/* TEXTO EMBAIXO DO LOGO */}
      <h1 className="mb-4 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
        Escolha seu Plano
      </h1>

      {/* Planos de Assinatura */}
      <div className="mb-6 flex w-full max-w-[600px] flex-col justify-center space-y-4 sm:flex-row sm:space-x-7 sm:space-y-0">
        {/* Plano Mensal */}
        <div className="mb-4 flex-1 rounded-lg bg-white p-6 shadow sm:mb-0">
          <h1 className="mb-4 text-center text-xl font-bold sm:text-2xl">
            Mensal
          </h1>
          <p className="mb-4 text-center text-lg font-semibold sm:text-xl">
            R$ 00,00
          </p>
          <p className="mb-2 text-center">Benefícios</p>
          <p className="mb-2 text-center">Benefícios</p>
          <p className="mb-2 text-center">Benefícios</p>
          <Link href="/login">
            <button className="mt-6 w-full rounded bg-blue-800 py-2 text-white hover:bg-blue-900">
              Assinar
            </button>
          </Link>
        </div>

        {/* Plano Anual */}
        <div className="mb-4 flex-1 rounded-lg bg-white p-6 shadow sm:mb-0">
          <h1 className="mb-4 text-center text-xl font-bold sm:text-2xl">
            Anual
          </h1>
          <p className="mb-4 text-center text-lg font-semibold sm:text-xl">
            R$ 00,00
          </p>
          <p className="mb-2 text-center">Benefícios</p>
          <p className="mb-2 text-center">Benefícios</p>
          <p className="mb-2 text-center">Benefícios</p>
          <Link href="/login">
            <button className="mt-6 w-full rounded bg-blue-800 py-2 text-white hover:bg-blue-900">
              Assinar
            </button>
          </Link>
        </div>
      </div>

      {/* Rodapé (política de privacidade etc) */}
      <footer className="w-full py-4 text-white">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Nuvix. Todos os direitos
            reservados.
          </p>
          <div className="mt-2">
            <Link
              href="/privacyterm"
              className="mx-2 text-blue-400 hover:underline"
            >
              Política de Privacidade
            </Link>
            <Link href="/terms" className="mx-2 text-blue-400 hover:underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
