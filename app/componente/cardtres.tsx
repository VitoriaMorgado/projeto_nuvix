import Image from "next/image";
import estilo from "./card.module.css";
import jogos from "@/public/play.png";
import Link from "next/link";

const CardTres = () => {
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
          <p className={estilo.azulzin}>Jogos com os amigos</p>
          <h1 className={estilo.titulo}>Explore o catalogo co-op</h1>
          <p className={estilo.paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dignissimos, assumenda laboriosam, repellendus eos numquam
            doloremque, neque rem deserunt molestias laborum odit maiores?
          </p>
          <Link href="/saiba">
            <button className={estilo.botao}>SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardTres;
