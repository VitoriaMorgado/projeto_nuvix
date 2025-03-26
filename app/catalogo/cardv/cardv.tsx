import Image from "next/image";
import Link from "next/link";

interface GameProps {
  id: number;
  capajogo?: string;
  nomejogo?: string;
}

const CardV = ({ game }: { game: GameProps }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="/jogo">
        <div
          key={game.id}
          className="card h-[310px] w-[220px] rounded-b-[15px] bg-black p-2"
        >
          <Image
            src={game.capajogo || "/default-image.jpg"} // Adiciona uma imagem padrão caso esteja indefinido
            width={300}
            height={300}
            alt={game.nomejogo || "Imagem do jogo"}
          />
          <h3 className="mt-2 text-center text-2xl">
            {game.nomejogo || "Nome do Jogo"}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CardV;
