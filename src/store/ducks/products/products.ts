import { createSlice } from "@reduxjs/toolkit";

import { getProducts } from "./actions";
import { InitialState } from "./types";

const productsSlice = createSlice({
  name: "products",
  initialState: {} as InitialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const actions = {
  ...productsSlice.actions,
  getProducts,
};

export const reducer = productsSlice.reducer;
