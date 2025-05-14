import Image from "next/image";
import Link from "next/link";
import BotaoCora from "../botaocora";

interface CardVProps {
  id: number;
  capajogo?: string;
  nomejogo?: string;
}

const CardV = ({ game }: { game: CardVProps }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div
        key={game.id}
        className="card h-[310px] w-[220px] rounded-b-[15px] bg-black p-2"
      >
        <Link href="/jogo">
          <Image
            src={game.capajogo || "/default-image.jpg"} // Adiciona uma imagem padrão caso esteja indefinido
            width={300}
            height={300}
            alt={game.nomejogo || "Imagem do jogo"}
          />
        </Link>
        <div className="flex justify-center">
          <h3 className="mt-2 text-center text-2xl text-white">
            {game.nomejogo || "Nome do Jogo"}
          </h3>
          <div className="ml-2 mt-1">
            <BotaoCora />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardV;
