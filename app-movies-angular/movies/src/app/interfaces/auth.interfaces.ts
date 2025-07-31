export interface LoginRequest {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  message: string;
  expiraIn: string;
  tokenType: string;
}
