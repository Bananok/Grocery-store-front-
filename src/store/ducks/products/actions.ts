import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { DefaultRejectValue, ExtraParamsThunkType, Product } from "types";

export const getProducts = createAsyncThunk<
  Product[],
  undefined,
  ExtraParamsThunkType<DefaultRejectValue>
>("get/products", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("products");

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
