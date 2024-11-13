"use client";

import Loading from "@/app/componente/qualquer/loading";
import { Progress } from "@/app/componente/qualquer/progress";
import Link from "next/link";
import { useEffect, useState } from "react";

const Fila = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [peopleInLine, setPeopleInLine] = useState(5); //pessoas na fila

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="flex h-screen w-screen flex-col justify-between bg-gradient-to-b from-blue-900 to-blue-950 p-6 sm:p-9 md:p-9"
      style={{
        backgroundImage: `url('/banner02.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-5 left-5 w-full px-4 text-white sm:px-6 md:px-8">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
          Conectando...
        </h1>
        <p className="mb-3 ml-2 text-xl sm:text-2xl">
          Jogadores na fila: {peopleInLine}
        </p>
        <Progress value={33} />

        <p className="m-2 text-sm sm:text-base">
          Atualize agora para sair das filas!
        </p>
        <Link href="/.">
          <button
            className="mt-5 h-[40px] w-full rounded bg-blue-800 py-2 text-xl font-bold text-white hover:bg-blue-900 sm:w-auto"
            type="submit"
          >
            Atualizar Plano
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fila;
