<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 3,
  },
  maxRows: Number,
  id: {
    type: String,
    default: () => `textarea-${Math.random().toString(36).substring(2, 10)}`,
  },
});

const emit = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);
const textarea = ref<HTMLTextAreaElement | null>(null);

watch(
  () => props.modelValue,
  (val) => {
    internalValue.value = val;
    nextTick(adjustHeight);
  },
);

watch(internalValue, () => {
  emit("update:modelValue", internalValue.value);
  nextTick(adjustHeight);
});

onMounted(() => {
  nextTick(adjustHeight);
});

function adjustHeight() {
  if (!textarea.value) return;

  textarea.value.style.height = "auto";

  const lineHeight = getLineHeight(textarea.value);
  const scrollHeight = textarea.value.scrollHeight;
  const maxHeight = props.maxRows ? props.maxRows * lineHeight : Infinity;

  textarea.value.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
}

function getLineHeight(el: HTMLElement): number {
  const computedStyle = window.getComputedStyle(el);
  const lineHeight = parseFloat(computedStyle.lineHeight || "20");
  return isNaN(lineHeight) ? 20 : lineHeight;
}

const classes = computed(() => [
  "w-full rounded-lg border border-gray-300 focus:ring focus:ring-opacity-50 transition-all resize-none px-3 py-2 text-base",
  "text-gray-900 bg-white placeholder-gray-400",
  {
    "bg-gray-100 cursor-not-allowed": props.disabled,
    "bg-white": !props.disabled,
  },
]);
</script>

<template>
  <div class="w-full">
    <textarea
      :id="id"
      ref="textarea"
      v-model="internalValue"
      :rows="rows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :class="classes"
      :style="{ overflowY: maxRows ? 'hidden' : 'auto' }"
    />
  </div>
</template>
