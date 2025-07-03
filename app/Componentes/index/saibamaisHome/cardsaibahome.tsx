"use client";

import Image from "next/image";
import Link from "next/link";
import estilo from "../../../componente/card.module.css";

interface CardsaibaHomeProps {
    id: number;
    categoria: string;
    title: string;
    descricao: string;
    imagem: string;
}



const CardsaibaHome = ({card}: {card: CardsaibaHomeProps}) => {

  return (
    <>
      <div className={estilo.cardi} key={card.id}>
        <Image
          className="rounded-t-xl"
          src={card.imagem}
          width={600}
          height={500}
          alt="imagem de controle"
        />
        <div className="m-10">
          <p className={estilo.azulzin}>{card.categoria}</p>
          <h1 className={estilo.titulo}>{card.title}</h1>
          <p className={estilo.paragrafo}>
            {card.descricao}
          </p>
          <Link href="/saiba_mais">
            <button className="mt-3 h-[30px] w-full rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097] sm:w-[50%] sm:text-2xl">
              SAIBA MAIS
            </button>
          </Link>
        </div>

      </div>

    </>
  );
};

export default CardsaibaHome;
