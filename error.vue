<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center gap-4 text-center"
  >
    <h2 class="text-7xl font-bold text-[#F7AB00]">
      {{ props.error?.statusCode }}
    </h2>
    <h5 class="text-xl font-medium">Sorry, we were unable to find that page</h5>
    <p>
      Start from
      <NuxtLink to="/" class="text-[#514FD5] underline">home page</NuxtLink>
    </p>
  </div>
</template>
