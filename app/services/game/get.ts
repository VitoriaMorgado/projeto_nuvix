import { IGames } from "../../interface/IGames";

//FUNCÃO PARA BUSCAR TODOS OS USUÁRIOS DA API
//ASYNC SIGNIFICA "ANTES DE"
export const getGames = async (): Promise<IGames[]> => {
  //FAZ UMA REQUISIÇÃO(QUERY) PARA TODOS OS USUÁRIOS DA API
  //AWAIT SIGNIFICA "ESPERAR" PARA VER SE TA TUDO CERTO
  const response = await fetch("http://localhost:8080/games", {
    method: "GET", //MÉTODO DA REQUISIÇÃO (GET, POST, PUT, DELETE)
    headers: {
      "Content-Type": "application/json", //TIPO DE DADO QUE ESTAMOS ENVIANDO
    },
  });

  //VERIFICA SE A RESPOSTA FOI BEM- SUCEDIDA (STATUS 200

  //CONVERTE A RESPOSTA DA API PARA JSON
  const result = await response.json();
  return Array.isArray(result.data) ? result.data : [];

  //RETORNA A LISTA DE USUÁRIOS
};
