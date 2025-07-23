import { IGames } from "../../interface/IGames";

//FUNCÃO PARA BUSCAR TODOS OS USUÁRIOS DA API
//ASYNC SIGNIFICA "ANTES DE"
export async function getGames(): Promise<IGames[]> {
  try {
    //FAZ UMA REQUISIÇÃO(QUERY) PARA TODOS OS USUÁRIOS DA API
    //AWAIT SIGNIFICA "ESPERAR" PARA VER SE TA TUDO CERTO
    const response = await fetch("http://localhost:8080/games", {
      method: "GET", //MÉTODO DA REQUISIÇÃO (GET, POST, PUT, DELETE)
      headers: {
        "Content-Type": "application/json", //TIPO DE DADO QUE ESTAMOS ENVIANDO
      },
    });

    //VERIFICA SE A RESPOSTA FOI BEM- SUCEDIDA (STATUS 200)
    if (!response.ok) {
      throw new Error("Erro na requesição: ${response.status}");
    }

    //CONVERTE A RESPOSTA DA API PARA JSON
    const data = await response.json();

    //RETORNA A LISTA DE USUÁRIOS
    return data;
  } catch (error) {
    //CAPTURA QUALQUER ERRO QUE OCORRA (EX: SERVIDOR FORA DO AR, JSON INVÁLIDO, ETC)
    console.error("Erro ao buscar usuários:", error);
    return [];
    //RETORNA NULO SE HOUVER UM ERRO
  } finally {
    // FINALIZA A REQUISIÇÃO COMO SE FOSSE FECHAR A PORTA DO BANCO DE DADOS
    console.log("Requisição GET finalizada");
  }
}
