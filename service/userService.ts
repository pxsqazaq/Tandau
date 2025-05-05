import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { SignInDTO, SignUpDTO } from "~/types/auth";
import type { UpdateUserDTO } from "~/types/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (ofetch: $Fetch<any, NitroFetchRequest>) => ({
  signUp: async (payload: SignUpDTO) => {
    const data = await ofetch("/auth/register", {
      method: "POST",
      body: payload,
    });

    return data;
  },

  signIn: async (payload: SignInDTO) => {
    const data = await ofetch("/auth/login", {
      method: "POST",
      body: payload,
    });

    return data;
  },

  signOut: () => {},

  getMe: async () => {
    const data = await ofetch("/users/me", {
      method: "GET",
    });

    return data;
  },

  updateMe: async (payload: UpdateUserDTO) => {
    const data = await ofetch("/users/me", {
      method: "PATCH",
      body: payload,
    });

    return data;
  },
});
