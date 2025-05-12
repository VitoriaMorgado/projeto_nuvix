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
      <div className="h-[320px] w-[210px] rounded-lg bg-gray-800 p-2">
        <div key={cat.id} className="w-[197px]">
          <Image
            src={cat.capacate || "/default-image.jpg"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="p-3">
          <span className="mb-2 inline-block rounded-md bg-[#019EC2] px-2 py-1 text-xs font-semibold text-white">
            {cat.genre || "Nome do Jogo"}
          </span>
          <h3 className="mb-3 text-lg font-semibold text-white">
            {cat.jogodestaque || "Nome do Jogo"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CardCataa;
