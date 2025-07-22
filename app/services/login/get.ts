import { IUser } from "@/app/interfaces/IUser";

export const fetchLogin = async (): Promise<IUser[]> => {
  const response = await fetch("http://localhost:8080/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return Array.isArray(result.data) ? result.data : [];
};
