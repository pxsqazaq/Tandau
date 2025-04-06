<script setup lang="ts">
defineProps<{
  chat: { id: number; name: string; time: string };
  messages: {
    id: number;
    chatId: number;
    author: string;
    text: string;
    time: string;
  }[];
}>();

const emit = defineEmits<{
  (e: "send", text: string): void;
}>();
</script>

<template>
  <div class="m-auto flex h-full w-full flex-col overflow-y-scroll">
    <div class="m-auto w-full max-w-[1200px] flex-1 space-y-8 p-4 pb-32">
      <div v-for="msg in messages" :key="msg.id" class="flex items-start gap-4">
        <div
          v-if="msg.author === 'assistant'"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500"
        >
          <Icon name="lucide:bot" />
        </div>
        <div
          v-if="msg.author === 'user'"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-indigo-100"
        >
          <Icon name="lucide:user" />
        </div>

        <div class="flex flex-col">
          <span>
            {{ msg.author === "user" ? "You" : "Tan'dau" }}
            <small class="text-gray-400">
              {{
                new Date(msg.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              }}
            </small>
          </span>

          <p class="max-w-[1100px] text-gray-600">{{ msg.text }}</p>
        </div>
      </div>
    </div>
    <ChatInput @send="emit('send', $event)" />
  </div>
</template>
