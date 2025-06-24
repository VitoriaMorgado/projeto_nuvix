"use client";

import Image from "next/image";
import Link from "next/link";

const BannerHome = () => {
    return ( 
    <>
    <div className="relative h-[550px] w-full overflow-hidden">
                <div className="absolute inset-0 -z-10">
                <Image
          src="/banner_principal.jpg"
          fill
          className="object-cover"
          alt="Banner Nuvix - Jogos na Nuvem"
          priority
        />
                </div>
              <div className="container mx-auto px-6">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F8] to-[#019EC2]">
                    Vai jogar? Então vai de Nuvix!
                  </h1>
                  <p className="mb-6 text-xl font-light text-[#F6F7F8]">
                    Apenas um clique e você consegue os melhores jogos com um preço justo.
                  </p>
                  <Link href="/jogo">
                <button className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097] transition-colors duration-300 transform hover:scale-105">
                  Jogue agora
                </button>
              </Link>
                </div>
              </div>
            </div>


    </>
     );
}
 
export default BannerHome;