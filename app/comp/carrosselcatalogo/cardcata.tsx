import Image from "next/image";

interface CardVProps {
  id: number;
  capacate?: string;
  genre?: string;
  jogodestaque?: string;
}

const CardCataa = ({ cat }: { cat: CardVProps }) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-all hover:scale-105">
        <div key={cat.id} className="relative h-[230px] w-full">
          <Image
            src={cat.capacate || "/default-image.jpg"}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-3">
          <span className="mb-2 inline-block rounded-md bg-[#019EC2] px-2 py-1 text-xs font-semibold text-white">
            {cat.genre || "Nome do Jogo"}
          </span>
          <h3 className="text-lg font-semibold text-white">
            {cat.jogodestaque || "Nome do Jogo"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CardCataa;
