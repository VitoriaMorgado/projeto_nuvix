import Image from "next/image";
import logo from "@/public/logo.png";

const JogoPage = () => {
  return (
    <>
      <div className="m-0 h-screen w-screen flex-col justify-center bg-gradient-to-b from-blue-900 to-blue-950 p-0">
        <div className="flex bg-slate-600">
          <Image
            className="mx-4"
            src={logo}
            width={300}
            height={500}
            alt="logo"
          />
          <div className="flex">
            <p className="mx-5 content-center text-3xl font-bold">LOJA</p>
            <p className="mx-5 content-center text-3xl font-bold">COMUNIDADE</p>
            <p className="mx-5 content-center text-3xl font-bold">SOBRE</p>
            <p className="mx-5 content-center text-3xl font-bold">SUPORTE</p>
          </div>
          <div className="w-screen justify-items-end">
            <div className="flex">
              <p className="mx-5 h-[35px] w-[180px] bg-lime-500 text-center text-2xl text-white">
                instale o nuvix
              </p>
              <div className="h-[40px] w-[4px] bg-white"></div>
              <p className="mx-5 text-2xl text-white">Iniciar sessão</p>
              <div className="h-[40px] w-[4px] bg-white"></div>
              <p className="mx-5 text-2xl text-white">idioma</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JogoPage;
