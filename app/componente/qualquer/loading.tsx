"use client";

const LoadingBar = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
      <style jsx>{`
        .loading-bar-container {
          width: 80%;
          height: 8px; /* Altura reduzida para uma aparência mais fina */
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px; /* Bordas arredondadas mais sutis */
          overflow: hidden;
          position: relative;
        }

        .loading-bar {
          height: 100%;
          width: 0;
          background: #61dafb; /* Cor da barra */
          border-radius: 5px; /* Bordas arredondadas para a barra */
          animation: load 2s linear infinite;
        }

        @keyframes load {
          0% {
            width: 0;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingBar;
