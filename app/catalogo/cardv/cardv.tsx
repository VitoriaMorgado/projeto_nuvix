import Image from "next/image";
import jogosc from "@/app/models/data";

type CardVProps = {
  jogoId?: number;
};

const CardV = ({ jogoId }: CardVProps) => {
  const cata = jogosc.find((j) => j.id === jogoId) || jogosc[0];

  return (
    <div className="m-2 h-[280px] w-[400px] justify-center rounded-xl shadow-xl">
      {cata?.imagens && (
        <Image
          src={cata.imagens[0] || "/placeholder.jpg"}
          width={550}
          height={500}
          alt={`Capa do jogo ${cata.nome}`}
          className="rounded-t-xl"
        />
      )}
      <div className="h-[35px] content-center justify-items-center">
        <h1>{cata?.nome}</h1>
      </div>
    </div>
  );
};

export default CardV;
