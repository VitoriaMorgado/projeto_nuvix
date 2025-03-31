"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correção: para navegação no Next.js

const TermsCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter(); // Instância do router

  // Efeito para carregar o estado do localStorage ao montar o componente
  useEffect(() => {
    const savedStatus = localStorage.getItem("termsAccepted");
    setIsChecked(savedStatus === "true"); // Converte a string para booleano
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("termsAccepted", String(isChecked)); // Salva como "true" ou "false"

    if (isChecked) {
      alert("Informação salva com sucesso!");
      router.push("/"); // Substitua "/next-page" pela URL que você deseja
    } else {
      alert("Você precisa aceitar os termos para continuar.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block">
        <input
          className="mt-10"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="ml-2">Eu concordo com os termos e condições</span>
      </label>

      <div className="mb-5 mt-5 flex justify-center rounded-full">
        <button
          type="submit"
          className="h-[55px] w-[230px] rounded-br-3xl rounded-tl-3xl bg-[#019EC2] text-3xl font-bold text-[#F6F7F8] hover:bg-[#198097]">
        
          Salvar
        </button>
      </div>
    </form>
  );
};

export default TermsCheckbox;
