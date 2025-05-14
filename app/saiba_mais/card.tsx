"use client";

import Image from "next/image";

interface CardsaibaProps {
    id: number;
    nome: string;
    capa: string;
}

const Cardsaiba = ({CardSM}: {CardSM: CardsaibaProps}) => {
  return (
    <div key={CardSM.id} className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Imagem do card */}
      <div className="relative h-48 w-full">
        <Image
          src={CardSM.capa || "/default.jpg"}
          alt= {CardSM.nome}
          width={400}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Cardsaiba;
