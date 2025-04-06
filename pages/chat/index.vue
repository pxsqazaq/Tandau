<script setup lang="ts">
import { ref, computed } from "vue";
import ChatSidebar from "~/components/Chat/Sidebar.vue";
import Chat from "~/components/Chat/index.vue";

type Chat = {
  id: number;
  name: string;
  time: string;
};

type Message = {
  id: number;
  chatId: number;
  author: "user" | "assistant";
  text: string;
  time: string;
};

const chats: Chat[] = [
  { id: 1, name: "Chat 1", time: "2025-04-06T10:00:00Z" },
  { id: 2, name: "Chat 2", time: "2025-04-04T15:30:00Z" },
  { id: 3, name: "Chat 3", time: "2025-03-29T11:20:00Z" },
  { id: 4, name: "Chat 4", time: "2025-03-10T09:00:00Z" },
  { id: 5, name: "Chat 5", time: "2025-02-15T14:45:00Z" },
];

const messages = ref<Message[]>([
  {
    id: 1,
    chatId: 1,
    author: "assistant",
    text: "Hello! How can I help you today?",
    time: "2025-04-06T10:00:00Z",
  },
  {
    id: 2,
    chatId: 1,
    author: "user",
    text: "I have a question about my order.",
    time: "2025-04-06T10:05:00Z",
  },
  {
    id: 3,
    chatId: 2,
    author: "assistant",
    text: "Hi! What do you need assistance with?",
    time: "2025-04-04T15:30:00Z",
  },
]);

const selectedChat = ref<Chat | null>(null);
const selectedId = computed(() => selectedChat.value?.id || null);

const filteredMessages = computed(() =>
  selectedChat.value
    ? messages.value.filter((msg) => msg.chatId === selectedChat.value?.id)
    : [],
);

const handleSend = (text: string) => {
  if (!selectedChat.value) return;
  messages.value.push({
    id: messages.value.length + 1,
    chatId: selectedChat.value.id,
    author: "user",
    text,
    time: new Date().toISOString(),
  });
};
</script>

<template>
  <div class="mt-20 flex h-[calc(100vh-80px)] w-full overflow-hidden border-t">
    <ChatSidebar
      :chats="chats"
      :selected-id="selectedId"
      @select="selectedChat = $event"
    />

    <div class="flex flex-1">
      <Chat
        v-if="selectedChat"
        :chat="selectedChat"
        :messages="filteredMessages"
        @send="handleSend"
      />
      <div v-else class="flex flex-1 items-center justify-center text-gray-500">
        Select a chat to start messaging.
      </div>
    </div>
  </div>
</template>
