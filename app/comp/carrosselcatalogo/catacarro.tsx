import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import CardCataa from "./cardcata";
import jogoscategoria from "./models/cate";
import { useState } from "react";

const CataCarro = () => {
  const [, setJogoCate] = useState(jogoscategoria[0]);

  const clicaParaMudar = (cateId: number) => {
    const cate = jogoscategoria.find((j) => j.id === cateId);
    if (cate) setJogoCate(cate);
  };
  return (
    <>
      <div className="py-12 sm:py-16 md:py-20">
        <div className="mb-10 md:mb-12">
          <h1 className="text-center text-3xl font-bold text-[#F6F7F8] sm:text-4xl md:text-5xl lg:text-6xl">
            Explorar catálogo
          </h1>
        </div>

        <div className="mx-auto max-w-[1800px] px-4">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {jogoscategoria.map((cat) => (
                <CarouselItem
                  key={cat.id}
                  className="md:basis-1/6"
                  onClick={() => clicaParaMudar(cat.id)}
                >
                  <Link href="/catalogo">
                    <CardCataa cat={cat} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CataCarro;
