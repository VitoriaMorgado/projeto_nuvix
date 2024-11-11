import { Heart, HeartOff } from "lucide-react";
import { useState } from "react";

const BotaoFav = () => {
  // Estado para controlar se o favorito está ativo ou não
  const [isFavorite, setIsFavorite] = useState(false);

  // Função para alternar o estado do favorito
  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleFavorite}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        {/* Exibe o ícone de coração cheio ou quebrado, dependendo do estado */}
        {isFavorite ? (
          <div className="flex h-[57px] w-[220px] content-center rounded-md bg-red-600">
            <h1 className="mx-3 content-center font-mono text-3xl font-bold text-white">
              Favoritar
            </h1>
            <Heart className="mt-2.5" color="white" size={40} />
          </div>
        ) : (
          <div className="flex h-[57px] w-[220px] content-center rounded-md bg-[#019EC2]">
            <h1 className="mx-3 content-center font-mono text-3xl font-bold text-white">
              Favoritar
            </h1>
            <HeartOff className="mt-2.5" color="white" size={40} />
          </div>
        )}
      </button>
    </>
  );
};

export default BotaoFav;
