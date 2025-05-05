<script setup lang="ts">
defineProps({
  label: String,
  content: String,
});

const isOpen = ref(true);
</script>

<template>
  <div class="py-2">
    <button
      class="flex w-full items-end justify-between text-left text-lg font-semibold"
      @click="isOpen = !isOpen"
    >
      <slot name="label">
        {{ label }}
      </slot>
      <span
        :class="{ 'rotate-180': isOpen }"
        class="px-4 transition-transform duration-300"
      >
        <Icon name="lucide:chevron-down" />
      </span>
    </button>
    <transition name="accordion">
      <div v-show="isOpen" class="mt-3 text-base text-gray-700">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </transition>
  </div>
</template>
