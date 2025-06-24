"use client";

import CataCarro from "@/app/comp/carrosselcatalogo/catacarro";

const CatalogoHome = () => {
    return ( 
        <>
        <div>
             {/* CATALOGO COMEÇO */}
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="mb-12 text-center text-5xl font-bold text-white md:text-6xl">
                Explorar <span className="text-[#019EC2]">Catálogo</span>
              </h2>
              <CataCarro />
            </div>
          </div>
          {/* CATALOGO FIM */}
        </div>
        </>
     );
}
 
export default CatalogoHome;