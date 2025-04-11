<script setup lang="ts">
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const closeDropdownOnClick = () => {
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeMenu);
});
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <button type="button" @click="toggleMenu">
      <slot name="trigger">Dropdown</slot>
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white px-2 shadow-xl"
    >
      <div class="flex flex-col py-2">
        <slot name="menu" :close-dropdown="closeDropdownOnClick" />
      </div>
    </div>
  </div>
</template>
