import Image from "next/image";
import estilo from "./card.module.css";
import Link from "next/link";

const Carduni = () => {
  return (
    <>
      <div className={estilo.cardi}>
        <Image
          className="rounded-t-xl"
          src="/crash.jpg"
          width={600}
          height={500}
          alt="imagem do jogo Crash"
        />
        <div className="m-10">
          <p className={estilo.azulzin}>A maior varidade de jogos</p>
          <h1 className={estilo.titulo}>Explore</h1>
          <p className={estilo.paragrafo}>
            Nuvix oferece uma vasta variedade de jogos para todos os gostos,
            desde títulos AAA até indie inovadores. Com acesso instantâneo, você
            pode explorar diferentes gêneros e experiências, sem limitações de
            plataforma.
          </p>
          <Link href="/SaibaMais">
            <button className={estilo.botao}>SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carduni;
