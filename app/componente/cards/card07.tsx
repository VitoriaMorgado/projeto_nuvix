import Image from "next/image";

const Card07 = () => {
  return (
    <>
      <div className="m-2 h-[430px] w-[300px] justify-center rounded-xl bg-[#000101] shadow-xl">
        <Image
          src="/card.rpg.png"
          width={700}
          height={500}
          alt="imagem do mine"
        />
        <div className="h-[60px] w-full content-center justify-items-center">
          <p className="text-3xl font-bold text-[#F6F7F8]">RPG</p>
        </div>
      </div>
    </>
  );
};

export default Card07;
