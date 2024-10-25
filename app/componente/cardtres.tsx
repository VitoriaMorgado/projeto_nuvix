import Image from "next/image";
import pessoas from "@/public/playstation.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CardTres = () => {
  return (
    <>
      <div className="m-2 h-[700px] w-[450px] justify-center rounded-xl bg-white shadow-xl">
        <Image
          className="rounded-t-xl"
          src={pessoas}
          width={500}
          height={500}
          alt="imagem de controle"
        />
        <div className="m-10">
          <div className="h-7 w-[200px] justify-items-center bg-sky-500">
            <p className="font-bold text-white">Jogos com os amigos</p>
          </div>
          <h1 className="py-2 text-3xl font-bold">
            Explore o catalogo de jogos co-op
          </h1>
          <p className="font-mono text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dignissimos, assumenda laboriosam, repellendus eos numquam
            doloremque, neque rem deserunt molestias laborum odit maiores?
          </p>
          <Link href="/saiba">
            <button className="flex p-1 font-bold shadow">
              <p className="my-1">SAIBA MAIS</p>
              <ArrowRight className="mx-0.5 my-1.5 w-[16px]" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardTres;
