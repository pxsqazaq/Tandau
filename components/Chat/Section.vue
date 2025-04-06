<script setup lang="ts">
const props = defineProps<{
  label: string;
  chats: { id: number; name: string; time: string }[];
  selectedId: number | null;
}>();

const emit = defineEmits<{
  (e: "select", chat: { id: number; name: string; time: string }): void;
}>();

const handleSelect = (chat: { id: number; name: string; time: string }) => {
  emit("select", chat);
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
        {{ chat.name }}
      </div>
    </template>
  </UiAccordion>
</template>
