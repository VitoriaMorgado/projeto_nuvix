import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import destaque from "./models/muda";
import { useState } from "react";
import CardMuda from "./cardmuda";

const CarroMuda = () => {
  const [, setJogoMuda] = useState(destaque[0]);

  const MudarCarro = (mudaId: number) => {
    const muda = destaque.find((j) => j.id === mudaId);
    if (muda) setJogoMuda(muda);
  };
  return (
    <>
      <div className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col overflow-hidden rounded bg-[#000101] lg:flex-row">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <div className="flex h-[500px] w-[1300px]">
                <div className="flex">
                  <CarouselContent>
                    {destaque.map((change) => (
                      <CarouselItem
                        key={change.id}
                        onChange={() => MudarCarro(change.id)}
                      >
                        <CardMuda change={change} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>
              </div>
            </Carousel>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/catalogo">
              <button className="h-[50px] w-full rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097] sm:w-[230px] sm:text-2xl">
                Semelhantes
              </button>
            </Link>
            <Link href="/catalogo">
              <button className="h-[50px] w-full rounded-bl-3xl rounded-tr-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] transition-colors hover:bg-[#198097] sm:w-[230px] sm:text-2xl">
                Catálogo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarroMuda;
