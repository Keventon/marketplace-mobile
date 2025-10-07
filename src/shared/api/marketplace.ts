import axios, { AxiosInstance } from "axios";

export class MarketplaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: "",
    });
  }

  getIntance() {
    return this.instance;
  }
}

export const marketplaceApiClient = new MarketplaceApiClient().getIntance();
