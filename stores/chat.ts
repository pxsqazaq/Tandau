import type { Chat, NewChat, Messages } from "~/types/chat";

export const useChatStore = defineStore("chat", () => {
  const { $chatService } = useNuxtApp();

  const chat = ref<Chat | null>(null);
  const chats = ref<Chat[]>([]);

  const isLoading = ref(false);
  const errorMessage = ref("");

  const selectedChatId = ref<number | null>(null);
  // const message = ref<string | null>(null);

  const getChat = async (id: number) => {
    isLoading.value = true;
    try {
      const data = await $chatService.getChat(id);
      chat.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getChats = async () => {
    isLoading.value = true;
    try {
      const data = await $chatService.getChats();
      chats.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const createChat = async (chat: NewChat): Promise<Chat | null> => {
    isLoading.value = true;
    try {
      const data = await $chatService.createChat(chat);
      chats.value.push(data);
      return data;
    } catch (error) {
      errorMessage.value = error as string;
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const sendMessage = async (message: Messages) => {
    isLoading.value = true;
    try {
      if (selectedChatId.value) {
        const data = await $chatService.sendMessage({
          chat_id: selectedChatId.value,
          user_message: message.user_message,
        });

        if (chat.value) {
          chat.value.messages.push(data);
        }

        await getChat(selectedChatId.value);
        await getChats();

        return data;
      } else {
        const newChat = await createChat({ chat_name: message.user_message });
        if (newChat) {
          selectedChatId.value = newChat.id;
          const data = await $chatService.sendMessage({
            chat_id: newChat.id,
            user_message: message.user_message,
          });

          await getChat(newChat.id);
          await getChats();

          return data;
        }
      }
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    await getChats();
  });

  watch(selectedChatId, async (newId) => {
    if (newId) {
      await getChat(newId);
    } else {
      chat.value = null;
    }
  });

  return {
    chat,
    chats,
    isLoading,
    errorMessage,
    selectedChatId,
    getChat,
    getChats,
    createChat,
    sendMessage,
  };
});
