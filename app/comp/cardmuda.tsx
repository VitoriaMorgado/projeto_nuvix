import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const CardMuda = () => {
  return (
    <>
      <div className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col overflow-hidden rounded bg-[#000101] lg:flex-row">
            <Carousel opts={{ align: "start", loop: true }}>
              <div className="w-[1000px]] flex h-[500px]">
                <div className="flex">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="flex">
                        <div className="lg:w-2/3">
                          <Image
                            className="h-auto w-full object-cover"
                            src="/red-dead.jpg"
                            width={670}
                            height={500}
                            alt="imagem do red"
                          />
                        </div>

                        <div className="flex flex-col justify-between p-6 lg:w-1/3 lg:p-8">
                          <div>
                            <h1 className="mb-4 text-2xl font-bold text-[#F6F7F8] sm:text-3xl md:text-4xl">
                              Red Dead Redemption 2
                            </h1>
                            <p className="mb-6 text-lg text-[#F6F7F8]">
                              Red Dead Redemption 2, a épica aventura de mundo
                              aberto da Rockstar Games aclamada pela crítica e o
                              jogo mais bem avaliado desta geração de consoles,
                              agora chega aprimorado para PC com conteúdos
                              inéditos no Modo História, melhorias visuais e
                              muito mais.
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
                    </CarouselItem>
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

export default CardMuda;
