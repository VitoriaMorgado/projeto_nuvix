// Definir a estrutura do usuário retornado pela API
export interface IUser {
  id_usuario: string;
  nome: string;
  email: string;
  senha: string; // Senha não é retornada pela API
}

