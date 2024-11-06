import Image from "next/image";
import estilo from "./card.module.css";
import jogos from "@/public/crash.jpg";
import Link from "next/link";

const Carduni = () => {
  return (
    <>
      <div className={estilo.cardi}>
        <Image
          className="rounded-t-xl"
          src={jogos}
          width={600}
          height={500}
          alt="imagem de controle"
        />
        <div className="m-10">
          <p className={estilo.azulzin}>A maior varidade de jogos</p>
          <h1 className={estilo.titulo}>Explore</h1>
          <p className={estilo.paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ipsa? Similique odio fugit veniam autem cupiditate quas quod! Et
            maxime asperiores maiores voluptate illum odit, corporis numquam
            expedita laboriosam quo.
          </p>
          <Link href="/saiba">
            <button className={estilo.botao}>SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carduni;
