"use client";

import Image from "next/image";

interface Cardsaiba2Props {
    id: number;
    nome: string;
    capa: string;
}

const Cardsaiba2 = ({CardSM2}: {CardSM2: Cardsaiba2Props}) => {
  return (
    <div key={CardSM2.id} className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Imagem do card */}
      <div className="relative h-48 w-full">
        <Image
          src={CardSM2.capa || "/default.jpg"}
          alt= {CardSM2.nome}
          width={400}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Cardsaiba2;
