<script setup lang="ts">
import type { Chat, Message, Messages } from "~/types/chat";

const chatStore = useChatStore();
const { chat, chats, selectedChatId, isLoading, lastMessage } = storeToRefs(chatStore);

const selectedChat = computed(() => chat.value);
const filteredMessages = computed(() => selectedChat.value?.messages || []);

const handleSelectChat = (selectedChat: Chat) => {
  chatStore.selectedChatId = selectedChat.id;
};

const handleSend = async (text: string) => {
  if (selectedChatId.value) {
    const newMessage: Message = {
      id: Date.now(),
      user_message: text,
      answer_message: '',
      chat_id: selectedChatId.value,
      created_at: new Date().toISOString(),
    };
    chat.value?.messages.push(newMessage);
    await chatStore.sendMessage({
      chat_id: selectedChatId.value,
      user_message: text,
    });
  } else {
    const newChatData = await chatStore.createChat({ chat_name: text });
    if (newChatData) {
      chatStore.selectedChatId = newChatData.id;
      const newMessage: Message = {
        id: Date.now(),
        user_message: text,
        answer_message: '',
        chat_id: newChatData.id,
        created_at: new Date().toISOString(),
      };
      chat.value?.messages.push(newMessage);
      await chatStore.sendMessage({
        chat_id: newChatData.id,
        user_message: text,
      });
    }
  }
};

const createNewChat = () => {
  chatStore.selectedChatId = null;
};

onMounted(() => {
  chatStore.getChats();
});
</script>

<template>
  <div class="mt-20 flex h-[calc(100vh-80px)] w-full overflow-hidden border-t">
    <div class="flex h-full w-80 flex-col border-r">
      <div class="border-b p-4">
        <UiButton block variant="primary" @click="createNewChat">
          <Icon name="lucide:plus" class="mr-2" />
          {{ $t("chat.new_chat") }}
        </UiButton>
      </div>
      <ChatSidebar
        :chats="chats"
        :selected-id="selectedChatId"
        @select="handleSelectChat($event as Chat)"
      />
    </div>

    <div class="flex flex-1">
      <Chat
        v-if="selectedChat"
        :chat="selectedChat"
        :isLoading="isLoading"
        :lastMessage="lastMessage"
        :messages="filteredMessages"
        @send="handleSend"
      />
      <div
        v-else
        class="m-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center"
      >
        <div class="mb-4 text-2xl font-medium text-gray-700">
          {{ $t("chat.start") }}
        </div>
        <div class="mb-8 max-w-md text-center text-gray-500">
          {{ $t("chat.type") }}
        </div>
        <ChatInput
          :placeholder="$t('chat.placeholder')"
          @send="handleSend"
        />
      </div>
    </div>
  </div>
</template>
