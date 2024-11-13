"use client";

import Image from "next/image";

const Card1 = (props) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Imagem do card */}
      <div className="relative w-full">
        <Image
          src={props.posicao}
          alt="Imagem do Card"
          width={180}
          height={180}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card1;
