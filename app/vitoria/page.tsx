import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../componente/card";
import CardDois from "../componente/carddois";
import CardTres from "../componente/cardtres";
import Cardquatro from "../componente/cardquatro";

const Info = () => {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center bg-gradient-to-b from-blue-900 to-blue-950 p-6">
        <div className="h-[500px] w-[800px] justify-items-center space-y-6">
          {/* MINHA PARTE DO PROJETO COMEÇO */}
          <div className="text-center text-[45px] font-bold text-sky-100">
            <h1>Maximize sua diversão com a Nuvix</h1>
          </div>
          <div className="w-[700px] p-6">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <Card></Card>
                </CarouselItem>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <CardDois></CardDois>
                </CarouselItem>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <CardTres></CardTres>
                </CarouselItem>
                <CarouselItem className="md:basis-3/4 lg:basis-3/4">
                  <Cardquatro></Cardquatro>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          {/* FIM DA MINHA PARTE DO PROJETO */}
        </div>
      </div>
    </div>
  );
};

export default Info;
