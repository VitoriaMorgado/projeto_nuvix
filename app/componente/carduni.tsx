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
        <div className="m-10 justify-center">
          <p className={estilo.azulzin}>Jogos Feitos Para Você</p>
          <h1 className={estilo.titulo}>Explore o Catálogo</h1>
          <p className={estilo.paragrafo}>
            Descubra o catálogo da Nuvix, repleto de jogos incríveis, desde
            lançamentos AAA até indies inovadores. Jogue instantaneamente, sem
            downloads ou limitações de hardware.
          </p>
          <Link href="/SaibaMais">
            <button className="mt-3 h-[30px] w-full rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097] sm:w-[50%] sm:text-2xl">
              SAIBA MAIS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carduni;
