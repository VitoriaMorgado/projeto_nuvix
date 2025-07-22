// Definir a estrutura do usuário retornado pela API
export interface IUser {
  id: string;
  email: string;
  password: string; // Senha não é retornada pela API
}

// Interface para os dados da API
export interface ApiUserData {
  id_cliente: number | string;
  email: string;
  role?: string;
  token?: string;
}

export interface ApiResponse {
  status: string;
  data: ApiUserData;
  message?: string;
}

// Extender as interfaces padrão do NextAuth
