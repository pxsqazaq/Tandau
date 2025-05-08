<script setup lang="ts">
const favoriteStore = useFavoriteStore();

const removeFavorites = (id: number) => {
  favoriteStore.removeFavorite(id);
};
</script>

<template>
  <section class="flex flex-col gap-20 p-20">
    <div class="flex flex-col gap-8">
      <div
        v-for="item in favoriteStore.favorites"
        :key="item.id"
        class="group relative overflow-hidden rounded-xl"
      >
        <NuxtImg
          :src="item.image"
          class="absolute left-0 top-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="flex flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,0.6)] p-8 text-white"
        >
        <h1 class="text-3xl text-semibold">{{ item.name }}</h1>
          <h1 class="text-xl">{{ item.scholarship_name }}</h1>
            <ul class="flex flex-col gap-3 items-center">
              <li v-for="(i, j) in item.scholarship_benefits" :key="j" class=" tracking-widest text-[15px] font-weight[10]">
                ✅ {{ i }}
              </li>
            </ul>
        </div>

        <UiButton
          variant="icon"
          class="absolute right-4 top-4 !text-2xl text-white hover:text-[#F7AB00]"
          @click="removeFavorites(item.id)"
        >
          <Icon name="lucide:bookmark-minus" />
        </UiButton>
      </div>
    </div>
  </section>
</template>
