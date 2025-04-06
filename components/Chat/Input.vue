<script setup lang="ts">
const emit = defineEmits<{
  (e: "send", text: string): void;
}>();

const input = ref("");

const handleSubmit = () => {
  if (input.value.trim()) {
    emit("send", input.value.trim());
    input.value = "";
  }
};
</script>

<template>
  <div
    class="fixed bottom-0 left-[336px] right-4 flex flex-col items-center justify-center bg-white p-4"
  >
    <form
      class="flex w-full max-w-[1200px] items-center gap-2 rounded-full border p-2 px-3 shadow"
      @submit.prevent="handleSubmit"
    >
      <UiButton variant="icon">
        <Icon name="lucide:paperclip" class="text-gray-500" />
      </UiButton>

      <UiInput
        v-model="input"
        type="text"
        placeholder="Message Tan'dau..."
        class="border-none outline-none focus:ring-0"
      />

      <UiButton variant="icon">
        <Icon name="lucide:mic" class="text-gray-500" />
      </UiButton>

      <UiButton
        type="submit"
        variant="primary"
        class="flex h-8 w-9 !rounded-full !p-0"
      >
        <Icon name="lucide:arrow-up" />
      </UiButton>
    </form>
    <small class="text-gray-400">
      Tan’dau AI can make mistakes. Check our Terms & Conditions.
    </small>
  </div>
</template>
