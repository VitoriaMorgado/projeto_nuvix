import Image from "next/image";
import estilo from "./card.module.css";
import jogos from "@/public/nuvix.png";
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
          <p className={estilo.azulzin}>Aproveite nossos plano</p>
          <h1 className={estilo.titulo}>Aproveite nossas promoções</h1>
          <p className={estilo.paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dignissimos, assumenda laboriosam, repellendus eos numquam
            doloremque.
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
