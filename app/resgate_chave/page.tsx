"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBarp from "../comp/navbar/navbar";
import Rodape from "@/app/Componentes/navbar/rodape";
import { Copy } from "lucide-react";

const RedemptionKey = () => {
  const [copied, setCopied] = useState(false);
  const [redemptionKey, setRedemptionKey] = useState("CHAVE-EXEMPLO-123456");
  
  // Simulate loading of redemption key
  useEffect(() => {
    const timer = setTimeout(() => {
      setRedemptionKey("CHAVE-EXEMPLO-123456");
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(redemptionKey);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* Navbar */}
      <NavBarp />

      <div className="flex-grow">
        {/* Gradient Background */}
        <div className="bg-gradient-to-b from-[#02030a] to-[#0E304A] py-16 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-center">
              {/* Title Section */}
              <h1 className="mb-8 text-center text-5xl font-bold text-white md:text-6xl">
                Sua <span className="text-[#019EC2]">Chave</span> de Resgate
              </h1>
              
              {/* Key Card */}
              <div className="w-full max-w-2xl">
                <div className="rounded-lg bg-black/50 p-8 backdrop-blur-sm border border-[#019EC2]/30 shadow-lg shadow-[#019EC2]/20">
                  <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-6">
                      <Image 
                        src="/logo_teste.png" 
                        width={150} 
                        height={150} 
                        className="rounded-full object-cover border-2 border-[#019EC2]" 
                        alt="Nuvix Logo"
                      />
                    </div>
                    
                    {/* Key Display */}
                    <div className="mb-6 w-full">
                      <div className="relative">
                        <div className="flex items-center justify-between rounded-br-3xl rounded-tl-3xl bg-[#02030a] p-6 border border-[#019EC2]/30">
                          <p className="font-mono text-xl text-[#F6F7F8] tracking-wide">
                            {redemptionKey || "Carregando sua chave..."}
                          </p>
                          <button 
                            onClick={copyToClipboard}
                            className="ml-4 rounded-full bg-[#019EC2]/20 p-2 hover:bg-[#019EC2]/40 transition-colors"
                            aria-label="Copiar chave"
                          >
                            <Copy size={20} className="text-[#F6F7F8]" />
                          </button>
                        </div>
                        
                        {/* Copy notification */}
                        {copied && (
                          <div className="absolute -top-10 right-0 rounded-md bg-[#019EC2] px-3 py-1 text-sm text-white">
                            Chave copiada!
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Instructions */}
                    <div className="mb-8 text-center">
                      <h2 className="mb-4 text-2xl font-bold text-[#019EC2]">Como utilizar</h2>
                      <ul className="space-y-2 text-[#F6F7F8]/90">
                        <li>1. Copie a chave de resgate acima</li>
                        <li>2. Acesse a plataforma que deseja Resgatar</li>
                        <li>3. Vá para configurações - Resgatar Chave</li>
                        <li>4. Cole sua chave e ative seu benefício</li>
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-center">
                      <Link href="/suporte">
                        <button className="h-[55px] w-full sm:w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
                          Precisa de ajuda?
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional info */}
              <div className="mt-8 max-w-2xl text-center text-[#F6F7F8]/80">
                <p className="mb-4">
                  Esta chave de resgate é válida por 30 dias a partir da data de emissão.
                  Certifique-se de utilizar dentro deste período para garantir seu benefício.
                </p>
                <p>
                  Problemas com sua chave? Entre em contato com nosso 
                  <Link href="/suporte" className="text-[#019EC2] hover:text-[#198097] ml-1">
                    suporte
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-0 w-full">
        <Rodape />
      </div>
    </div>
  );
};

export default RedemptionKey;