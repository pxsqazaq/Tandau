<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { reloadPage } from "@/utils/reloadPage";

const route = useRoute();
const userStore = useUserStore();
const { locales, locale, setLocale } = useI18n();

const signOut = ref(false);
const hideNavPages = ["/sign-in", "/sign-up", "/forgot-password"];

const getLocalizedPath = (path: string) => {
  return locale.value === 'en' ? path : `/${locale.value}${path}`;
};

const handleSignOut = async () => {
  await userStore.signOut();
  signOut.value = false;
};
</script>

<template>
  <header
    class="absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-4 text-lg font-semibold"
  >
    <NuxtLink :to="getLocalizedPath('/')" class="flex items-center gap-2">
      <NuxtImg
        :src="
          route.path.startsWith('/study/') ||
          route.path.startsWith('/kk/study/') ||
          route.path.startsWith('/ru/study/')
            ? '/Logo-white.png'
            : '/Logo.png'
        "
        width="40"
        height="40"
      />
      <span
        class="text-lg font-bold"
        :class="{
          'text-white':
            route.path.startsWith('/study/') ||
            route.path.startsWith('/kk/study/') ||
            route.path.startsWith('/ru/study/'),
        }"
      >
        Tan'dau
      </span>
    </NuxtLink>

    <nav v-if="!hideNavPages.includes(route.path)">
      <ul class="flex items-center gap-8">
        <li>
          <NuxtLink
            :to="getLocalizedPath('/chat')"
            :class="{
              'text-white':
                route.path.startsWith('/study/') ||
                route.path.startsWith('/kk/study/') ||
                route.path.startsWith('/ru/study/'),
              'text-yellow-500': 
                route.path.startsWith('/chat')
            }"
          >
            {{ $t("header.ai") }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="getLocalizedPath('/study/kz')"
            :class="{
              'text-white':
                route.path.startsWith('/study/abroad') ||
                route.path.startsWith('/kk/study/abroad') ||
                route.path.startsWith('/ru/study/abroad'),
              'text-yellow-500': 
                route.path.startsWith('/study/kz') || 
                route.path.startsWith('/kk/study/kz') || 
                route.path.startsWith('/ru/study/kz')
            }"
          >
            {{ $t("header.kk") }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="getLocalizedPath('/study/abroad')"
            :class="{
              'text-white': 
                route.path.startsWith('/study/kz') || 
                route.path.startsWith('/kk/study/kz') || 
                route.path.startsWith('/ru/study/kz'),
              'text-yellow-500': 
                route.path.startsWith('/study/abroad') || 
                route.path.startsWith('/kk/study/abroad') || 
                route.path.startsWith('/ru/study/abroad')
            }"
          >
            {{ $t("header.abroad") }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            v-if="!userStore.isAuthenticated"
            :to="getLocalizedPath('/sign-in')"
            :class="{
              'text-white':
                route.path.startsWith('/study/') ||
                route.path.startsWith('/kk/study/') ||
                route.path.startsWith('/ru/study/'),
            }"
          >
            {{ $t("header.signIn") }}
          </NuxtLink>
          <UiDropdownMenu v-else>
            <template #trigger>
              <Icon
                name="lucide:circle-user"
                class="mt-2 text-xl font-semibold"
                :class="{
                  'text-white':
                    route.path.startsWith('/study/') ||
                    route.path.startsWith('/kk/study/') ||
                    route.path.startsWith('/ru/study/'),
                }"
              />
            </template>

            <template #menu="close">
              <NuxtLink :to="getLocalizedPath('/profile')" @click="close.closeDropdown">
                <UiButton variant="ghost" block class="!justify-start gap-2">
                  <Icon name="lucide:circle-user" /> {{ $t("header.profile") }}
                </UiButton>
              </NuxtLink>

              <NuxtLink
                :to="getLocalizedPath('/favorites')"
                @click="close.closeDropdown"
              >
                <UiButton variant="ghost" block class="!justify-start gap-2">
                  <Icon name="lucide:bookmark" /> {{ $t("header.bookmarks") }}
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
                <Icon name="lucide:log-out" /> {{ $t("header.signOut") }}
              </UiButton>
            </template>
          </UiDropdownMenu>
        </li>

        <li>
          <UiDropdownMenu>
            <template #trigger>
              <span
                class="flex items-center justify-between rounded-lg border-2 border-black px-2"
                :class="{
                  'border-white text-white':
                    route.path.startsWith('/study/') ||
                    route.path.startsWith('/kk/study/') ||
                    route.path.startsWith('/ru/study/'),
                }"
              >
                {{ locale }}
              </span>
            </template>
            <template #menu="close">
              <UiButton
                v-for="(loc, index) in locales"
                :key="index"
                variant="ghost"
                block
                class="!justify-start"
                @click="
                  () => {
                    setLocale(loc.code).then(() => {
                      close.closeDropdown();
                    }).finally(() => {
                      reloadPage();
                    });
                  }
                "
              >
                {{ loc.name }}
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
        <UiButton variant="outline" @click="handleSignOut">Sign Out</UiButton>
        <UiButton variant="primary" @click="signOut = false">Cancel</UiButton>
      </div>
    </UiModal>
  </header>
</template>