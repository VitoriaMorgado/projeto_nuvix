import Image from "next/image";
import controle from "@/public/controle.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className="m-2 h-[700px] w-[450px] justify-center rounded-xl bg-white shadow-xl">
        <Image
          className="rounded-t-xl"
          src={controle}
          width={500}
          height={500}
          alt="imagem de controle"
        />
        <div className="m-10">
          <div className="h-7 w-[215px] justify-items-center bg-sky-500">
            <p className="font-bold text-white">A maior varidade de jogos</p>
          </div>
          <h1 className="py-2 text-3xl font-bold">Explore</h1>
          <p className="font-mono text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit nam officiis atque laborum tempora animi quisquam, sit
            exercitationem necessitatibus molestiae maiores culpa blanditiis
            fuga quam ducimus excepturi nobis aliquam dolore?
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

export default Card;
