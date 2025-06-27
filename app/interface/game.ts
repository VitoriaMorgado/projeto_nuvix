export interface Game {
    // DEFINIR A ESTRUTURA DE UM USUÁRIO

    id: string; // Identificador único do jogo
  nome: string; // Nome do jogo
  descricao: string; // Descrição do jogo
  desenvolvedor: string; // Nome do estúdio ou desenvolvedor
  genero: string; // Gênero do jogo (ex: Aventura, RPG)
  data_lancamento: string; // Data de lançamento (formato ISO: YYYY-MM-DD)
  plataformas: string[]; // Lista de plataformas (ex: ["PC", "PS5"])
  classificacao_indicativa: string; // Faixa etária (ex: "12+")
  modo_jogo: string[]; // Modos de jogo disponíveis (ex: ["Single Player"])
  preco: number; // Preço do jogo
  idiomas: string[]; // Idiomas suportados
  site_oficial: string; // URL do site oficial
  imagens: string[]; // Lista de URLs de imagens
  trailer: string; // URL do trailer em vídeo
  avaliacao: number; // Avaliação média (0.0 a 5.0)
}