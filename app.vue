<script setup lang="ts">
const userStore = useUserStore();

onMounted(async () => {
  await userStore.initUser();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <NuxtRouteAnnouncer />
  </NuxtLayout>
</template>
