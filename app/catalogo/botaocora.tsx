import { Heart } from "lucide-react";
import { useState } from "react";

const BotaoCora = () => {
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
          <div className="rounded-md bg-[#ff2525]">
            <Heart className="mt-2.5 p-0.5 text-red-800" size={25} />
          </div>
        ) : (
          <div className="rounded-md bg-[#7c7b7b]">
            <Heart className="mt-2.5 p-0.5 text-slate-700" size={25} />
          </div>
        )}
      </button>
    </>
  );
};

export default BotaoCora;
