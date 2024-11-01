import Image from "next/image";
import mine from "@/public/mine.png";

const JogoAcao = () => {
  return (
    <>
      <div className="m-2 h-[400px] w-[300px] justify-center rounded-xl bg-white shadow-xl">
        <Image
          className="rounded-t-xl"
          src={mine}
          width={500}
          height={500}
          alt="imagem do mine"
        />
        <div className="h-[60px] w-full content-center justify-items-center">
          <p className="text-3xl font-bold text-black">Ação</p>
        </div>
      </div>
    </>
  );
};

export default JogoAcao;
