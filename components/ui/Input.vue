<script setup>
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const _emit = defineEmits(["update:modelValue"]);

const classes = computed(() => {
  return [
    "w-full rounded-lg border border-gray-300 focus:ring focus:ring-opacity-50 transition-all",
    "text-gray-900 bg-white placeholder-gray-400",
    {
      "px-2 py-1 text-sm": props.size === "sm",
      "px-3 py-2 text-base": props.size === "md",
      "px-4 py-3 text-lg": props.size === "lg",
      "opacity-50 cursor-not-allowed": props.disabled,
    },
  ];
});
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    :disabled="disabled"
    @input="_emit('update:modelValue', $event.target.value)"
  />
</template>
