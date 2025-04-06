<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  showCloseButton?: boolean;
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
            class="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
          >
            <slot />
            <div v-if="showCloseButton" class="mt-4 text-right">
              <button
                class="text-sm text-gray-500 hover:text-gray-800"
                @click="emitClose"
              >
                Close
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.95);
}
</style>
