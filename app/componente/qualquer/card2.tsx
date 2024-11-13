"use client";

import Image from "next/image";

const Card2 = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Imagem do card */}
      <div className="relative h-48 w-full">
        <Image
          src="/sm-card-1.jpg"
          alt="Imagem do Card"
          width={400}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card2;
