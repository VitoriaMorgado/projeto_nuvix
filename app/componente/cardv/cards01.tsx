"use client";

import Image from "next/image";
import Link from "next/link";

const Card1 = (props) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Imagem do card */}
      <div className="relative w-full">
        <Link href="/jogo">
          <Image
            src={props.posicao}
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
