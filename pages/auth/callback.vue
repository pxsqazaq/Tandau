<script setup lang="ts">
const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
  await userStore.initUser();
  if (userStore.isAuthenticated) {
    router.replace("/");
  } else {
    router.replace("/sign-in");
  }
});
</script>

<template>
  <div>Logging in...</div>
</template>
