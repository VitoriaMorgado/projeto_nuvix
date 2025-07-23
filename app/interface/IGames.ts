export interface IGames {
  // DEFINIR A ESTRUTURA DE UM USUÁRIO

  id_game: number; // Identificador único do jogo
  titulo: string; // Nome do jogo
  descricao: string; // Descrição do jogo
  desenvolvedora: string; // Nome do estúdio ou desenvolvedor
  categoria: string; // Gênero do jogo (ex: Aventura, RPG)
  data_lancamento: number; // Data de lançamento (formato ISO: YYYY-MM-DD)
  preco: number; // Preço do jogo
  imagem: string; // Lista de URLs de imagens
}