<script setup lang="ts">
import type { Chat } from "~/types/chat";

const props = defineProps<{
  chats: Chat[];
  selectedId: number | null;
}>();

const emit = defineEmits<{
  (e: "select", chat: Chat): void;
}>();

const createSafeDate = (dateString: string): Date => {
  try {
    if (!dateString) return new Date(0);

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateString);
      return new Date(0);
    }

    return date;
  } catch (error) {
    console.error("Date parsing error:", error, "for date:", dateString);
    return new Date(0);
  }
};

const getStartOfDay = (date: Date): Date => {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
};

const today = computed(() => {
  const now = getStartOfDay(new Date());
  return props.chats.filter((chat) => {
    const chatDate = getStartOfDay(createSafeDate(chat.created_at));
    return chatDate.getTime() === now.getTime();
  });
});

const week = computed(() => {
  const now = new Date();
  const startOfToday = getStartOfDay(now);
  const oneWeekAgo = new Date(now);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return props.chats.filter((chat) => {
    const chatDate = createSafeDate(chat.created_at);
    return (
      chatDate > oneWeekAgo &&
      getStartOfDay(chatDate).getTime() < startOfToday.getTime()
    );
  });
});

const month = computed(() => {
  const now = new Date();
  const oneWeekAgo = new Date(now);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const oneMonthAgo = new Date(now);
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

  return props.chats.filter((chat) => {
    const chatDate = createSafeDate(chat.created_at);
    return chatDate > oneMonthAgo && chatDate <= oneWeekAgo;
  });
});

const other = computed(() => {
  const now = new Date();
  const oneMonthAgo = new Date(now);
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

  return props.chats.filter((chat) => {
    const chatDate = createSafeDate(chat.created_at);
    return chatDate <= oneMonthAgo;
  });
});
</script>

<template>
  <div class="h-full overflow-y-scroll">
    <ChatSection
      label="Today"
      :chats="today"
      :selected-id="selectedId"
      @select="emit('select', $event)"
    />
    <hr />
    <ChatSection
      label="Previous Week"
      :chats="week"
      :selected-id="selectedId"
      @select="emit('select', $event)"
    />
    <hr />
    <ChatSection
      label="Previous Month"
      :chats="month"
      :selected-id="selectedId"
      @select="emit('select', $event)"
    />
    <hr />
    <ChatSection
      :label="$t('chat.earlier')"
      :chats="other"
      :selected-id="selectedId"
      @select="emit('select', $event)"
    />
  </div>
</template>
