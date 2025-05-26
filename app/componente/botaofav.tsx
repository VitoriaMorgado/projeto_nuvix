import { Heart, HeartOff } from "lucide-react";
import { useState } from "react";

const BotaoFav = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite((fav) => !fav)}
      className={`group relative flex items-center justify-center gap-2 rounded-xl px-5 py-2 shadow-md transition-all duration-300 ${
        isFavorite
          ? "bg-gradient-to-r from-red-500 to-pink-600"
          : "bg-gradient-to-r from-[#019EC2] to-blue-600"
      }`}
    >
      <span className="text-base font-bold text-white">
        {isFavorite ? "❤️ Favoritado" : "🤍 Favoritar"}
      </span>
      {isFavorite ? (
        <Heart className="text-white" size={24} fill="currentColor" />
      ) : (
        <HeartOff className="text-white" size={24} />
      )}
    </button>
  );
};

export default BotaoFav;
