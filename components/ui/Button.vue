<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value: string) =>
      ["default", "primary", "secondary", "outline", "ghost", "icon"].includes(
        value,
      ),
  },
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["sm", "md", "lg"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  padded: {
    type: Boolean,
    default: true,
  },
  block: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => {
  return [
    "inline-flex items-center justify-center font-medium transition-all rounded-md",
    {
      "bg-gray-100 text-gray-900 hover:bg-gray-200":
        props.variant === "default",
      "bg-[#514FD5] text-white hover:bg-blue-600": props.variant === "primary",
      "bg-[#F7AB00] text-white hover:bg-gray-800":
        props.variant === "secondary",
      "bg-blue-200 text-blue-500 hover:bg-blue-400 hover:text-white":
        props.variant === "soft",
      "border border-[#514FD5] text-[#514FD5] hover:bg-[#514FD5] hover:text-white":
        props.variant === "outline",
      "text-gray-900 hover:bg-gray-100": props.variant === "ghost",
      "bg-transparent hover:text-blue-600 !p-2": props.variant === "icon",
      "opacity-50 cursor-not-allowed": props.disabled,
      "px-3 py-1 text-sm": props.padded && props.size === "sm",
      "px-4 py-2 text-base": props.padded && props.size === "md",
      "px-5 py-3 text-lg": props.padded && props.size === "lg",
      "p-0": !props.padded,
      "w-full": props.block,
    },
  ];
});
</script>

<template>
  <button :class="classes" :disabled="props.disabled">
    <slot />
  </button>
</template>
