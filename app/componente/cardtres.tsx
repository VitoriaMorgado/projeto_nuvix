import Image from "next/image";
import estilo from "./card.module.css";
import jogos from "@/public/coop.jpg";
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
            Junte-se aos amigos e viva a emoção dos jogos co-op na nuvem! Na
            Nuvix, você pode explorar mundos, enfrentar desafios e se divertir
            em equipe, tudo em tempo real. A diversão é garantida, onde quer que
            você esteja!
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
