import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { signIn, signUp } from "../auth/actions";
import { InitialState } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState: {} as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(signUp.fulfilled, signIn.fulfilled),
      (state, { payload }) => {
        state.user = {
          login: payload.login,
          name: payload.name,
        };
      }
    );
  },
});

export const actions = { ...userSlice.actions };

export const reducer = userSlice.reducer;
