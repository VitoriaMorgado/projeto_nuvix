import { IUser } from "@/app/interfaces/IUser";

export const fetchLogin = async (email: string, senha: string): Promise<IUser[]> =>{
  try {
    const response = await fetch(
      `http://localhost:8080/usuarios/?email=${encodeURIComponent(
        email
      )}&senha=${encodeURIComponent(senha)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    

    const result = await response.json();
    return Array.isArray(result.data) ? result.data : [];

  } catch (error) {
    console.error("Erro ao buscar usuaario:", error);
    return [];
  } finally {
    console.log("Requisição de usuario concluída");
  }
};
