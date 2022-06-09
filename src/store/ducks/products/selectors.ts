import { RootState } from "../..";

export const getProducts = (state: RootState) => state.products.products;
export const getIsLoading = (state: RootState) => state.products.isLoading;
