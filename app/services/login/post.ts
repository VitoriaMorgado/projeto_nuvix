// services/user.ts
import { IUser } from "@/app/interface/IUser";

export const cadastrarUsuario = async (dados: IUser) => {
  try {
    const response = await fetch("http://localhost:8080/usuarios/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      const erro = await response.json();
      throw new Error(erro.error || "Erro ao cadastrar usuário");
    }

    return response.json();
  } catch (error) {
    console.error("Erro ao cadastrar", error);
    return [];
  } finally {
    console.log("Cadastro de usuario concluída");
  }
};
