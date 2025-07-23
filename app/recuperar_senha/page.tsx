"use client";

import { Form } from "./components/componentes/Form";
import React from "react";

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onFormSubmitted = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(async (res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          console.log(data);
        } else {
          const text = await res.text();
          console.error("Resposta não-JSON recebida:", text);
        }
      })
      .catch(err => {
        console.error("Erro na requisição:", err);
      });
  };

  return (
    <React.Fragment>
      <Form
        email={email}
        isLoading={loading}
        emailChange={handleEmailChange}
        onsubmit={onFormSubmitted}  />
    </React.Fragment>
  );
}
