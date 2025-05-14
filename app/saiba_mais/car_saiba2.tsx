import { useState } from "react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import cardssaiba2 from "./models/card_saiba2";
import Cardsaiba2 from "./card2";

const Carsaiba2 = () => {

    const [, setCardsaiba2] = useState(cardssaiba2[0]);

    const handleClick = (CardSaibaMais2Id: number) => {
        const CardSaibaMais2 = cardssaiba2.find((j) => j.id === CardSaibaMais2Id);
        if (CardSaibaMais2) setCardsaiba2(CardSaibaMais2);
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
    {cardssaiba2.map((CardSM2) => (
      <CarouselItem
        key={CardSM2.id}
        onClick={() => handleClick(CardSM2.id)}
        className="md:basis-1/3 h-full"
      >
        <div className="transform transition-all hover:scale-105 h-full">
          <Cardsaiba2 CardSM2={CardSM2} />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
    </> );
}
 
export default Carsaiba2;