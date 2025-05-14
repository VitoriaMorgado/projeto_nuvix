import { useState } from "react";
import cardssaiba from "./models/card_saiba";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Cardsaiba from "./card";

const Carsaiba = () => {

    const [, setCardsaiba] = useState(cardssaiba[0]);

    const handleClick = (CardSaibaMaisId: number) => {
        const CardSaibaMais = cardssaiba.find((j) => j.id === CardSaibaMaisId);
        if (CardSaibaMais) setCardsaiba(CardSaibaMais);
    };

    return ( <>
<Carousel 
  orientation="vertical" 
  className="h-[600px] overflow-hidden flex flex-row-reverse" 
  opts={{ 
    loop: true
  }}
>
  <CarouselContent className="h-full" >
    {cardssaiba.map((CardSM) => (
      <CarouselItem
        key={CardSM.id}
        onClick={() => handleClick(CardSM.id)}
        className="md:basis-1/3 h-full"
      >
        <div className="transform transition-all hover:scale-105 h-full">
          <Cardsaiba CardSM={CardSM} />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
    </> );
}
 
export default Carsaiba;