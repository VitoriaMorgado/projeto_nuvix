import Image from "next/image";

const Car1 = () => {
  return (
    <>
      <div className="m-2 h-[340px] w-[550px] justify-center rounded-xl bg-[#000101] shadow-xl">
        <Image src="/tale.jpg" width={550} height={500} alt="imagem do mine" />
        <div className="h-[60px] w-full content-center justify-items-center">
          <p className="mt-2 font-mono text-5xl text-[#F6F7F8]">Jogo</p>
        </div>
      </div>
    </>
  );
};

export default Car1;
