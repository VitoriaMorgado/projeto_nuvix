import Image from "next/image";
import estilo from "./card.module.css";
import Link from "next/link";

const CardDois = () => {
  return (
    <>
      <div className={estilo.cardi}>
        <Image
          className="rounded-t-xl"
          src="/classico.jpg"
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
          <Link href="/saibamais">
            <button className="w-full sm:w-[50%] h-[30px] mt-3 rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl sm:text-2xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors">SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDois;
