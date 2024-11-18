"use client";

import { useState } from "react";

import Image from "next/image";
import logo2 from "@/public/logopreto.png";
import router from "next/router";
const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    //lógica de processamento do pagamento
    console.log("Pagamento:", { cardNumber, expiryDate, cvv, nameOnCard });

    //Simulando redirecionamento após o pagamento
    router.push("/confirmation");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0E304A] to-[#154B74] p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <Image
          src={logo2}
          alt="Logo"
          width={300}
          height={400}
          className="mx-auto mb-4"
        />
        <h1 className="mb-4 text-center text-2xl font-light text-gray-700">
          Pagamento
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-600"
              htmlFor="nameOnCard"
            >
              Nome no Cartão
            </label>
            <input
              type="text"
              id="nameOnCard"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="w-full rounded border p-2"
              required
              placeholder="Nome conforme no cartão"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-600"
              htmlFor="cardNumber"
            >
              Número do Cartão
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full rounded border p-2"
              required
              placeholder="     -        -        -"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-600"
              htmlFor="expiryDate"
            >
              Data de Validade (MM/AA)
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full rounded border p-2"
              required
              placeholder="MM/AA"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-600"
              htmlFor="cvv"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full rounded border p-2"
              required
              placeholder="***"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-800 p-2 text-white hover:bg-blue-900"
          >
            Confirmar Pagamento
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
