<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main>
    <Header />
    <Suspense>
      <slot />
    </Suspense>
    <Footer
      v-if="route.path === '/' || route.path === '/kz' || route.path === '/ru'"
    />
  </main>
</template>
