import Image from "next/image";
import Link from "next/link";

interface CardMudaProps {
  id: number;
  nomejogo?: string;
  capajogo?: string;
  descricao?: string;
}

const CardMuda = ({ change }: { change: CardMudaProps }) => {
  return (
    <div className="px-2 py-4 sm:px-4 sm:py-6 md:py-10">
      <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row overflow-hidden rounded bg-[#000101]">
          <div className="flex flex-col justify-between p-3 sm:p-5 md:w-1/2 md:p-8">
            <div>
              <h1 className="mb-2 text-xl font-bold text-[#F6F7F8] sm:text-2xl md:text-4xl">
                {change.nomejogo || "Nome do Jogo"}
              </h1>
                <p className="mb-4 text-base text-[#F6F7F8] hidden md:block">
                  {change.descricao || "Descrição do jogo"}
                </p>
              <div className="mt-4">
                <Link href="/catalogo">
              <button className="text-xl text-[#019EC2] hover:text-white font-semibold transition-colors">
                Encontrar Semelhantes →
              </button>
            </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-40 sm:h-56 md:h-80 lg:h-96">
              <Image
                className="object-cover rounded"
                src={change.capajogo || "/placeholder.png"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                alt={change.nomejogo || "Imagem do jogo"}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMuda;
