<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  class?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modalRef = ref<HTMLDivElement | null>(null);

const emitClose = () => {
  emit("update:modelValue", false);
};

const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "";
};

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      lockScroll();
      nextTick(() => modalRef.value?.focus());
    } else {
      unlockScroll();
    }
  },
);

onBeforeUnmount(unlockScroll);
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        ref="modalRef"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        tabindex="0"
        @click.self="emitClose"
        @keydown.esc="emitClose"
      >
        <Transition name="scale">
          <div
            v-if="modelValue"
            :class="[
              'w-full max-w-lg rounded-xl bg-white p-6 shadow-xl',
              props.class,
            ]"
          >
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
