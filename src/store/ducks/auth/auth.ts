import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";

import { signIn, signUp } from "./actions";
import { InitialState } from "./types";

const authSlice = createSlice({
  name: "auth",
  initialState: {} as InitialState,
  reducers: {
    addToken: (
      state,
      {
        payload,
      }: PayloadAction<{
        token: string;
      }>
    ) => {
      state.token = payload.token;
    },
    logout: (state) => {
      state.token = null;
      destroyCookie(null, "authToken");
    },
  },
  extraReducers: (buider) => {
    buider
      .addMatcher(isAnyOf(signUp.pending, signIn.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(signUp.fulfilled, signIn.fulfilled),
        (state, { payload }) => {
          state.token = payload.jwtToken;
          setCookie(null, "authToken", payload.jwtToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          state.isLoading = false;
        }
      )
      .addMatcher(isAnyOf(signUp.rejected, signIn.rejected), (state) => {
        state.isLoading = false;
      });
  },
});

export const actions = { ...authSlice.actions, signUp, signIn };

export const reducer = authSlice.reducer;
