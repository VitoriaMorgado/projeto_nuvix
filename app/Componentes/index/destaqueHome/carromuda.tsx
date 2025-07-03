import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import destaque from "./models/muda";
import { useState } from "react";
import CardMuda from "./cardmuda";
import Autoplay from "embla-carousel-autoplay";

const CarroMuda = () => {
  const [, setJogoMuda] = useState(destaque[0]);

  const MudarCarro = (mudaId: number) => {
    const muda = destaque.find((j) => j.id === mudaId);
    if (muda) setJogoMuda(muda);
  };

  return (
    <>
      <div className="px-2 py-6 sm:px-4 sm:py-8 md:py-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col overflow-hidden rounded bg-[#000101] lg:flex-row">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <div className="flex w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <div className="flex w-full">
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
        </div>
      </div>
    </>
  );
};

export default CarroMuda;
