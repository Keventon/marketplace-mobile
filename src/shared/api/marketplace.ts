import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

function getBaseUrl() {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  });
}

const baseURL = getBaseUrl();

export class MarketplaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getIntance() {
    return this.instance;
  }
}

export const marketplaceApiClient = new MarketplaceApiClient().getIntance();
