"use client";

import Image from "next/image";
import Link from "next/link";

interface Card1Props {
  posicao: string; // Define o tipo explícito para a prop
}

const Card1: React.FC<Card1Props> = ({ posicao }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Imagem do Card */}
      <div className="relative w-full">
        <Link href="/jogo">
          <Image
            src={posicao || "/placeholder.png"} // Define uma imagem padrão caso "posicao" não seja fornecida
            alt="Imagem do Card"
            width={180}
            height={180}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card1;
