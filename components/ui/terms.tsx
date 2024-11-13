"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Importando o hook useRouter para navegação

const TermsCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter(); // Hook para navegação

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
    localStorage.setItem("termsAccepted", String(isChecked)); // Garantir que seja uma string "true" ou "false"
    alert("Informação salva com sucesso!");

    // Navegação para outra página após salvar
    if (isChecked) {
      router.push("/next-page"); // Substitua "/next-page" pela URL que você deseja
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
        Eu concordo com os termos e condições
      </label>

      <div className="mb-5 mt-5 flex justify-center rounded-full">
        <button
          type="submit"
          className="w-full rounded-br-3xl rounded-tl-3xl bg-[#019EC2] py-2 text-[#F6F7F8] hover:bg-[#198097]"
        >
          Salvar
        </button>
      </div>

      {/* Se você deseja adicionar um link de navegação, pode usá-lo aqui */}
      <div className="text-center">
        <Link href="/terms">Leia os termos completos</Link>
      </div>
    </form>
  );
};

export default TermsCheckbox;
