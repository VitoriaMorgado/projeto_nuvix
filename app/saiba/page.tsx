import { CornerUpLeft } from "lucide-react";
import Link from "next/link";

const Saibamais = () => {
  return (
    <>
      <div className="h-screen bg-cyan-700">
        <Link href="/vitoria">
          <button>
            <CornerUpLeft />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Saibamais;
