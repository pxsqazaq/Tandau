<script setup lang="ts">
const route = useRoute();
const hideNavPages = ["/sign-in", "/sign-up"];
</script>

<template>
  <header
    class="absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-4 text-lg font-semibold"
  >
    <NuxtLink to="/" class="flex items-center gap-2">
      <NuxtImg src="/Logo.png" width="40" height="40" />
      <span class="text-lg font-bold">Tan'dau</span>
    </NuxtLink>

    <nav v-if="!hideNavPages.includes(route.path)">
      <ul class="flex items-center gap-8">
        <li>
          <NuxtLink to="/chat">Ask AI</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/study/kz">Study in Kazakhstan</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/study">Study Abroad</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/profile">
            <Icon name="lucide:circle-user" class="text-xl font-semibold" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
