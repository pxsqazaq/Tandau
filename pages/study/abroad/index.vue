<script setup lang="ts">
import type { University } from "~/types/university";

const universityStore = useUniversityStore();
const { locales, locale, setLocale } = useI18n();
const getLocalizedPath = (path: string) => {
  return locale.value === 'en' ? path : `/${locale.value}${path}`;
};

const favoriteStore = useFavoriteStore();

const addToFavorites = (item: University) => {
  if (favoriteStore.favorites.some((i) => i.id === item.id)) return;
  favoriteStore.addToFavorites(item);
};
</script>

<template>
  <div class="space-y-8">
    <section class="relative h-[80vh] w-full overflow-hidden">
      <NuxtImg
        src="/university/bolashak/hero.png"
        class="absolute left-0 right-0 top-0 -z-50 h-full w-full object-cover"
      />

      <div
        class="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]"
      >
        <div class="space-y-4 text-white">
          <h2 class="text-5xl font-semibold">
            {{ $t("abroad.title") }}
          </h2>
          <p class="text-lg font-normal">
            {{ $t("abroad.description") }}
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <h2 class="text-center text-4xl font-bold">
        {{ $t("abroad.why_apply") }}
      </h2>

      <ul class="mx-auto text-lg font-normal">
        <li>
          {{ $t("abroad.reduce") }}
        </li>
        <li>
          {{ $t("abroad.get_access") }}
        </li>
        <li>
          {{ $t("abroad.experience") }}
        </li>
        <li>
          {{ $t("abroad.boost_career") }}
        </li>
      </ul>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <h2 class="text-center text-4xl font-bold">🎓 {{ $t("abroad.scholarships") }}</h2>

      <div class="flex flex-col gap-8">
        <div
          v-for="item in universityStore.universities"
          :key="item.id"
          class="group relative overflow-hidden rounded-xl"
        >
          <NuxtImg
            :src="item.image"
            class="absolute left-0 top-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            class="flex flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,0.6)] p-8 text-white"
            :class="{ 'animate-pulse bg-gray-300': universityStore.isLoading }"
          >
          <h1 class="text-3xl text-semibold">{{ item.name }}</h1>
          <h1 class="text-xl">{{ item.scholarship_name }}</h1>
            <ul class="flex flex-col gap-3 items-center">
              <li v-for="(i, j) in item.scholarship_benefits" :key="j" class=" tracking-widest text-[18px] font-weight[10]">
                ✅ {{ i }}
              </li>
            </ul>

            <NuxtLink :to="`${getLocalizedPath('/')}study/abroad/${item.id}`">
              <UiButton variant="secondary" class="!px-12">
                {{ $t("abroad.learn_more") }}
              </UiButton>
            </NuxtLink>

          </div>

          <UiButton
            variant="icon"
            class="absolute right-4 top-4 !text-2xl text-white hover:text-[#F7AB00]"
            @click="addToFavorites(item)"
          >
            <Icon
              :name="
                favoriteStore.favorites.some(
                  (i: University) => i.id === item.id,
                )
                  ? 'lucide:bookmark-check'
                  : 'lucide:bookmark'
              "
            />
          </UiButton>
        </div>
      </div>
    </section>
  </div>
</template>
