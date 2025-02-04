import Image from "next/image";
import estilo from "./card.module.css";
import Link from "next/link";

const CardTres = () => {
  return (
    <>
      <div className={estilo.cardi}>
        <Image
          className="rounded-t-xl"
          src="/nuvix.png"
          width={600}
          height={500}
          alt="imagem de controle"
        />
        <div className="m-10">
          <p className={estilo.azulzin}>Aproveite nossos plano</p>
          <h1 className={estilo.titulo}>Aproveite nossas promoções</h1>
          <p className={estilo.paragrafo}>
            Assine o Nuvix Plus para pular as filas e obter acesso antecipado
            aos jogos do momento! Aumente ainda mais sua diversão com Nuvix
            Plus!
          </p>
          <Link href="/SaibaMais">
            <button className={estilo.botao}>SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardTres;
