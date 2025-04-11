<script setup lang="ts">
const route = useRoute();
const hideNavPages = ["/sign-in", "/sign-up", "/forgot-password"];

const signOut = ref(false);
</script>

<template>
  <header
    class="absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-4 text-lg font-semibold"
  >
    <NuxtLink to="/" class="flex items-center gap-2">
      <NuxtImg
        :src="
          route.path.startsWith('/study/') ? '/Logo-white.png' : '/Logo.png'
        "
        width="40"
        height="40"
      />
      <span
        class="text-lg font-bold"
        :class="{ 'text-white': route.path.startsWith('/study/') }"
      >
        Tan'dau
      </span>
    </NuxtLink>

    <nav v-if="!hideNavPages.includes(route.path)">
      <ul class="flex items-center gap-8">
        <li>
          <NuxtLink
            to="/chat"
            :class="{ 'text-white': route.path.startsWith('/study/') }"
          >
            Find My Path with AI
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/study/kz"
            :class="{ 'text-white': route.path.startsWith('/study/') }"
          >
            Study in Kazakhstan
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/study/abroad"
            :class="{ 'text-white': route.path.startsWith('/study/') }"
          >
            Study Abroad
          </NuxtLink>
        </li>

        <li>
          <UiDropdownMenu>
            <template #trigger>
              <Icon
                name="lucide:circle-user"
                class="text-xl font-semibold"
                :class="{
                  'text-white': route.path.startsWith('/study/'),
                }"
              />
            </template>

            <template #menu="close">
              <NuxtLink to="/profile" @click="close.closeDropdown">
                <UiButton variant="ghost" block class="!justify-start gap-2">
                  <Icon name="lucide:circle-user" /> Profile
                </UiButton>
              </NuxtLink>

              <NuxtLink to="/favorites" @click="close.closeDropdown">
                <UiButton variant="ghost" block class="!justify-start gap-2">
                  <Icon name="lucide:bookmark" /> Bookmarks
                </UiButton>
              </NuxtLink>

              <UiButton
                variant="ghost"
                block
                class="!justify-start gap-2"
                @click="
                  close.closeDropdown();
                  signOut = true;
                "
              >
                <Icon name="lucide:log-out" /> Sign Out
              </UiButton>
            </template>
          </UiDropdownMenu>
        </li>
      </ul>
    </nav>

    <UiModal v-if="signOut" v-model="signOut" class="p-8">
      <h2 class="my-4 text-center text-xl font-medium">
        Are you sure you want to sign out?
      </h2>
      <div class="my-4 flex items-center justify-center gap-4">
        <UiButton variant="outline" @click="signOut = false">Sign Out</UiButton>
        <UiButton variant="primary" @click="signOut = false">Cancel</UiButton>
      </div>
    </UiModal>
  </header>
</template>
