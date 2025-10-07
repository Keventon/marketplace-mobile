import {
  RegisterHttpParams,
  RegisterHttpResponse,
} from "../interfaces/http/register";
import { marketplaceApiClient } from "../api/marketplace";

export async function register(userData: RegisterHttpParams) {
  const { data } = await marketplaceApiClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData
  );

  return data;
}
