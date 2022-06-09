import { RootState } from "../..";

export const getOrders = (state: RootState) => state.orders.orders;
export const getBasketProducts = (state: RootState) =>
  state.orders.basketProducts;
export const getIsLoading = (state: RootState) => state.products.products;
export const getHasOrders = (state: RootState) => !!state.orders.orders?.length;
