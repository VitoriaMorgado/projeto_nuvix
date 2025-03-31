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
    <>
      <div className="px-5 py-9 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col overflow-hidden rounded bg-[#000101] lg:flex-row">
            <div className="px-2 lg:w-2/3">
              <Image
                className="h-auto w-full object-cover"
                src={change.capajogo || "/default-image.jpg"} // Adiciona uma imagem padrão caso esteja indefinido
                width={400}
                height={400}
                alt={change.nomejogo || "Imagem do jogo"}
              />
            </div>

            <div className="flex flex-col justify-between p-4 lg:w-2/4 lg:p-8">
              <div>
                <h1 className="mb-4 text-2xl font-bold text-[#F6F7F8] sm:text-3xl md:text-4xl">
                  {change.nomejogo || "Nome do Jogo"}
                </h1>
                <p className="mb-4 text-lg text-[#F6F7F8]">
                  {change.descricao || "Descrução do jogo"}
                </p>
              </div>
              <div className="mt-4">
                <Link href="/login">
                  <button className="h-[55px] w-full rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-2xl font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097] md:text-3xl">
                    Jogue agora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMuda;
