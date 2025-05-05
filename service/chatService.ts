import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { NewChat, Messages } from "~/types/chat";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (ofetch: $Fetch<any, NitroFetchRequest>) => ({
  getChat: async (id: number) => {
    const data = await ofetch(`/chat/chats/${id}`, {
      method: "GET",
    });

    return data;
  },

  getChats: async () => {
    const data = await ofetch("/chat/chats", {
      method: "GET",
    });

    return data;
  },

  createChat: async (chat: NewChat) => {
    const data = await ofetch("/chat/chats", {
      method: "POST",
      body: chat,
    });

    return data;
  },

  sendMessage: async (message: Messages) => {
    const data = await ofetch("/chat/chats/message", {
      method: "POST",
      body: message,
    });

    return data;
  },
});
