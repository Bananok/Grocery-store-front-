import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import { DefaultRejectValue, ExtraParamsThunkType } from "types";

import { SignUpDto, SignInDto, AuthResponseDto } from "./types";

export const signUp = createAsyncThunk<
  AuthResponseDto,
  SignUpDto,
  ExtraParamsThunkType<DefaultRejectValue>
>("auth/signUp", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("auth/signUp", requestData);

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
export const signIn = createAsyncThunk<
  AuthResponseDto,
  SignInDto,
  ExtraParamsThunkType<DefaultRejectValue>
>("auth/signIn", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("auth/signIn", requestData);

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
