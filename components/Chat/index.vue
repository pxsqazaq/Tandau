<script setup lang="ts">
import type { Chat, Message } from "~/types/chat";

defineProps<{
  chat: Chat;
  messages: Message[];
}>();

const emit = defineEmits<{
  (e: "send", text: string): void;
}>();

const formatDateTime = (dateString: string) => {
  try {
    if (!dateString) return "Invalid Date";

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateString);
      return "Invalid Date";
    }

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch (error) {
    console.error("Date parsing error:", error, "for date:", dateString);
    return "Invalid Date";
  }
};
</script>

<template>
  <div class="m-auto flex h-full w-full flex-col overflow-y-scroll">
    <div
      class="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-3"
    >
      <h2 class="text-xl font-semibold">
        <span
          v-for="(word, index) in chat.chat_name.split(' ').slice(0, 10)"
          :key="index"
        >
          {{ word + " " }}
        </span>
      </h2>
      <span class="ml-2 text-xs text-gray-500">
        Created: {{ formatDateTime(chat.created_at) }}
      </span>
    </div>

    <div class="m-auto w-full max-w-[1200px] flex-1 space-y-4 p-4 pb-32">
      <div v-for="msg in messages" :key="msg.id" class="flex flex-col gap-4">
        <div v-if="msg.user_message" class="flex items-start gap-4">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-indigo-100"
          >
            <Icon name="lucide:user" />
          </div>

          <div class="flex flex-col">
            <span>
              You
              <small class="text-gray-400">
                {{ formatDateTime(msg.created_at) }}
              </small>
            </span>

            <p class="max-w-[1100px] text-gray-600">
              {{ msg.user_message }}
            </p>
          </div>
        </div>

        <div v-if="msg.answer_message" class="flex items-start gap-4">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500"
          >
            <Icon name="lucide:bot" />
          </div>

          <div class="flex flex-col">
            <span>
              Tan'dau
              <small class="text-gray-400">
                {{ formatDateTime(msg.created_at) }}
              </small>
            </span>

            <div class="max-w-[1100px] text-gray-600">
              <ChatMessage :content="msg.answer_message" />
            </div>
          </div>
        </div>
      </div>

      <ChatInput @send="emit('send', $event)" />
    </div>
  </div>
</template>
