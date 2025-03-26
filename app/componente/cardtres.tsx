import Image from "next/image";
import estilo from "./card.module.css";
import Link from "next/link";

const CardTres = () => {
  return (
    <>
      <div className={estilo.cardi}>
        <Image
          className="rounded-t-xl"
          src="/players.jpg"
          width={600}
          height={500}
          alt="imagem de controle"
        />
        <div className="m-10">
          <p className={estilo.azulzin}>Jogue Com Amigos</p>
          <h1 className={estilo.titulo}>Sessão CO-OP</h1>
          <p className={estilo.paragrafo}>
            Junte-se aos amigos e viva a emoção dos jogos co-op! Na
            Nuvix, você pode explorar mundos, enfrentar desafios e se divertir
            em equipe. A diversão é garantida, onde quer que
            você esteja!
          </p>
          <Link href="/saibamais">
            <button className="w-full sm:w-[50%] h-[30px] mt-3 rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl sm:text-2xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardTres;
