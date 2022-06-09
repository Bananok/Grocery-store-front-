import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { DefaultRejectValue, ExtraParamsThunkType } from "types";

import { MakeOrderResponse, OrderProducts, OrdersResponse } from "./types";

export const makeOrder = createAsyncThunk<
  MakeOrderResponse,
  OrderProducts,
  ExtraParamsThunkType<DefaultRejectValue>
>("make/order", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("orders", requestData);

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
export const getOrders = createAsyncThunk<
  OrdersResponse,
  undefined,
  ExtraParamsThunkType<DefaultRejectValue>
>("get/order", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("orders");

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
