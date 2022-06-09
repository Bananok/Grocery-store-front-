import { User } from "types";

export type UserResponseDto = {
  login: string;
  name: string;
};
export type InitialState = {
  user: User | null;
};
