<script setup lang="ts">
const props = defineProps<{
  chats: { id: number; name: string; time: string }[];
  selectedId: number | null;
}>();

const emit = defineEmits<{
  (e: "select", chat: { id: number; name: string; time: string }): void;
}>();

const isSameDay = (d1: Date, d2: Date) => {
  return d1.toDateString() === d2.toDateString();
};

const isWithinLastDays = (date: Date, days: number) => {
  const now = new Date();
  const target = new Date(date);
  const diffTime = now.getTime() - target.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  return diffDays <= days;
};

const today = props.chats.filter((chat) =>
  isSameDay(new Date(chat.time), new Date()),
);
const week = props.chats.filter(
  (chat) =>
    isWithinLastDays(new Date(chat.time), 7) &&
    !isSameDay(new Date(chat.time), new Date()),
);
const month = props.chats.filter(
  (chat) =>
    isWithinLastDays(new Date(chat.time), 30) &&
    !isWithinLastDays(new Date(chat.time), 7),
);
const other = props.chats.filter(
  (chat) => !isWithinLastDays(new Date(chat.time), 30),
);
</script>

<template>
  <div class="h-full w-80 overflow-y-scroll border-r">
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
      label="Earlier"
      :chats="other"
      :selected-id="selectedId"
      @select="emit('select', $event)"
    />
  </div>
</template>
