import Image from "next/image";
import estilo from "./card.module.css";
import jogos from "@/public/classico.jpg";
import Link from "next/link";

const CardDois = () => {
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
          <p className={estilo.azulzin}>Jogos classicos</p>
          <h1 className={estilo.titulo}>Os melhores jogos</h1>
          <p className={estilo.paragrafo}>
            Na Nuvix, você pode jogar os grandes sucessos de antigamente
            diretamente do navegador, sem precisar de consoles antigos ou
            downloads pesados. É nostalgia na ponta dos dedos, com qualidade e
            praticidade!
          </p>
          <Link href="/saiba">
            <button className={estilo.botao}>SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDois;
