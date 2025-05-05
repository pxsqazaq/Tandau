import type { User } from "./user";

export type SignUpDTO = {
  email: string;
  username: string;
  password: string;
};

export type SignInDTO = {
  email: string;
  password: string;
};

export type signInResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};
