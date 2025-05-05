<script setup lang="ts">
import type { Chat } from "~/types/chat";

const props = defineProps<{
  label: string;
  chats: Chat[];
  selectedId: number | null;
}>();

const emit = defineEmits<{
  (e: "select", chat: Chat): void;
}>();

const handleSelect = (chat: Chat) => {
  emit("select", chat);
};

const formatTime = (dateString: string) => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error("Invalid time:", dateString);
      return "";
    }

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch (error) {
    console.error("Time parsing error:", error, "for date:", dateString);
    return "";
  }
};

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateString);
      return "";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.error("Date parsing error:", error, "for date:", dateString);
    return "";
  }
};
</script>

<template>
  <UiAccordion v-if="props.chats.length">
    <template #label>
      <span class="px-4">{{ props.label }}</span>
    </template>
    <template #content>
      <div
        v-for="chat in props.chats"
        :key="chat.id"
        class="cursor-pointer px-4 py-2 hover:bg-gray-100"
        :class="{
          'border-r-4 border-indigo-500 bg-indigo-100':
            props.selectedId === chat.id,
        }"
        @click="handleSelect(chat)"
      >
        <div class="flex items-center justify-between">
          <span class="max-w-[160px] truncate font-medium">
            {{ chat.chat_name }}
          </span>
          <span class="text-xs text-gray-500">
            {{ formatTime(chat.created_at) }}
          </span>
        </div>
        <div class="mt-1 text-xs text-gray-500">
          {{ formatDate(chat.created_at) }}
        </div>
      </div>
    </template>
  </UiAccordion>
</template>
