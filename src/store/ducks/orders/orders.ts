import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "types";

import { getOrders, makeOrder } from "./actions";
import { InitialState } from "./types";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    basketProducts: [],
    isLoading: false,
    orders: [],
  } as InitialState,
  reducers: {
    addInBasket: (
      state,
      action: PayloadAction<{
        product: Product;
        number: number;
      }>
    ) => {
      state.basketProducts.push(action.payload);
    },
    removeInBasket: (
      state,
      action: PayloadAction<{
        productId: string;
      }>
    ) => {
      state.basketProducts = state.basketProducts.filter(
        (basketProduct) => basketProduct.product.id !== action.payload.productId
      );
    },
    clearBasket: (state) => {
      state.basketProducts = [];
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(makeOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.orders = payload;
      })
      .addMatcher(isAnyOf(makeOrder.pending, makeOrder.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(makeOrder.fulfilled, makeOrder.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(isAnyOf(makeOrder.rejected, makeOrder.rejected), (state) => {
        state.isLoading = false;
      });
  },
});

export const actions = {
  ...ordersSlice.actions,
  makeOrder,
  getOrders,
};

export const reducer = ordersSlice.reducer;
