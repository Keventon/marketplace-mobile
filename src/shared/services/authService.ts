import { RegisterHttpParams } from "../interfaces/http/register";
import { marketplaceApiClient } from "../api/marketplace";
import { AuthResponse } from "../interfaces/http/authResponse";
import { LoginHttpParams } from "../interfaces/http/login";

export async function register(userData: RegisterHttpParams) {
  const { data } = await marketplaceApiClient.post<AuthResponse>(
    "/auth/register",
    userData
  );

  return data;
}

export async function login(userData: LoginHttpParams) {
  const { data } = await marketplaceApiClient.post<AuthResponse>(
    "/auth/login",
    userData
  );

  return data;
}
