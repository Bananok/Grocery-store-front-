import { RootState } from "../..";

export const getIsLoading = (state: RootState) => state.auth.isLoading;

export const getToken = (state: RootState) => state.auth.token;
export const hasToken = (state: RootState) => !!state.auth.token;
