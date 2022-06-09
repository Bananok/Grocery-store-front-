import { User } from "types";

export type SignInDto = {
  login: string;
  password: string;
};
export type SignUpDto = {
  name: string;
} & SignInDto;
export type AuthResponseDto = {
  jwtToken: string;
} & User;
export type InitialState = {
  isLoading: boolean;
  token: string | null;
};
