<script setup lang="ts">
interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
  text: string[];
  to: string;
}

const favoriteStore = useFavoriteStore();

const items = [
  {
    id: 0,
    image: "/university/germany/hero.png",
    title: "🇩🇪 DAAD (Germany)",
    description: "📌 Study in one of the most innovative education systems!",
    text: [
      "✅ Covers tuition, monthly stipend, health insurance, and travel costs.",
      "✅ Open to bachelor's, master's, and Ph.D. students.",
      "✅ Best for students in STEM, social sciences, and business.",
    ],
    to: "/study/abroad/germany",
  },
  {
    id: 1,
    image: "/university/korea/hero.png",
    title: "🇰🇷 GKS (South Korea)",
    description: "📌 Study in South Korea with full funding!",
    text: [
      "✅ Covers tuition, airfare, monthly stipend, and settlement allowance.",
      "✅ Available for undergraduate and graduate students.",
      "✅ Great for those interested in technology, business, and humanities.",
    ],
    to: "/study/abroad/korea",
  },
  {
    id: 2,
    image: "/university/china/hero.png",
    title: "🇨🇳 CSC (China)",
    description: "📌 Fully funded scholarship to study in China!",
    text: [
      "✅ Covers tuition, accommodation, medical insurance, and monthly allowance.",
      "✅ Open to all degree levels.",
      "✅ Ideal for science, engineering, and language studies.",
    ],
    to: "/study/abroad/china",
  },
  {
    id: 3,
    image: "/university/uk/hero.png",
    title: "🇬🇧 Chevening (UK)",
    description: "📌 Become a future leader with a master’s degree in the UK!",
    text: [
      "✅ Full funding for tuition, living expenses, and travel costs.",
      "✅ Requires leadership experience and strong academic background.",
      "✅ Perfect for those in politics, economics, and business.",
    ],
    to: "/study/abroad/uk",
  },
  {
    id: 4,
    image: "/university/bolashak/hero.png",
    title: "🇰🇿 Bolashak (Kazakhstan)",
    description:
      "📌 Kazakhstan's prestigious scholarship for international studies!",
    text: [
      "✅ Covers tuition, living expenses, and travel.",
      "✅ Requires graduates to return and work in Kazakhstan.",
      "✅ Open to various study fields.",
    ],
    to: "/study/abroad/bolashak",
  },
  {
    id: 5,
    image: "/university/eu/hero.png",
    title: "🇪🇺 Erasmus Mundus (EU)",
    description: "📌 Study in multiple European countries!",
    text: [
      "✅ Covers full tuition, travel, and living expenses.",
      "✅ Joint master’s programs across several universities.",
      "✅ Ideal for global-minded students in various fields.",
    ],
    to: "/study/abroad/eu",
  },
  {
    id: 6,
    image: "/university/hungary/hero.png",
    title: "🇭🇺 Stipendium Hungaricum (Hungary)",
    description:
      "📌 Hungary's government-funded scholarship for international students!",
    text: [
      "✅ Covers tuition, monthly stipend, housing, and health insurance.",
      "✅ Open to bachelor's, master's, and PhD programs in various fields.",
      "✅ No mandatory return requirement after graduation.",
    ],
    to: "/study/abroad/hungary",
  },
  {
    id: 7,
    image: "/university/italy/hero.png",
    title: "🇮🇹 DSU Scholarship (Italy)",
    description: "📌 Italy’s regional scholarship for international students!",
    text: [
      "✅ Covers tuition, accommodation, monthly stipend, and meals.",
      "✅ Available for bachelor's, master's, and PhD programs in various fields.",
      "✅ No mandatory return requirement after graduation.",
    ],
    to: "/study/abroad/italy",
  },
];

const addToFavorites = (item: Item) => {
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
            Unlock Global Education Opportunities
          </h2>
          <p class="text-lg font-normal">
            Dreaming of studying abroad? These top scholarships can cover your
            tuition, living expenses, and even travel costs!
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <h2 class="text-center text-4xl font-bold">
        Why Apply for Scholarships?
      </h2>

      <ul class="mx-auto text-lg font-normal">
        <li>🎯 Reduce financial burden</li>
        <li>🎯 Get access to world-class education</li>
        <li>🎯 Experience new cultures and expand your network</li>
        <li>🎯 Boost your career with international degrees</li>
      </ul>
    </section>

    <section class="flex flex-col gap-20 p-20">
      <h2 class="text-center text-4xl font-bold">🎓 Featured Scholarships</h2>

      <div class="flex flex-col gap-8">
        <div
          v-for="item in items"
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
            <h4 class="text-lg font-medium">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <ul>
              <li v-for="(i, j) in item.text" :key="j">
                {{ i }}
              </li>
            </ul>

            <NuxtLink :to="item.to">
              <UiButton variant="secondary" class="!px-12">
                Learn more
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
                favoriteStore.favorites.some((i) => i.id === item.id)
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
