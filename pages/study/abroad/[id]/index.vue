<script setup lang="ts">
const route = useRoute();
const id = computed(() => route.params.id);

const universityStore = useUniversityStore();
const { university, isLoading, errorMessage } = storeToRefs(universityStore);

const stepColors = [
  { border: "border-indigo-500", bg: "bg-indigo-500" },
  { border: "border-pink-500", bg: "bg-pink-500" },
  { border: "border-teal-500", bg: "bg-teal-500" },
  { border: "border-amber-500", bg: "bg-amber-500" },
  { border: "border-purple-500", bg: "bg-purple-500" },
  { border: "border-emerald-500", bg: "bg-emerald-500" },
  { border: "border-red-500", bg: "bg-red-500" },
  { border: "border-blue-500", bg: "bg-blue-500" },
];

const getStepColor = (index: number) => {
  return stepColors[index % stepColors.length];
};

onMounted(async () => {
  if (id.value) {
    await universityStore.getUniversity(Number(id.value));
  }
});

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      await universityStore.getUniversity(Number(newId));
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="space-y-8">
    <div v-if="isLoading" class="flex h-[50vh] items-center justify-center">
      <p class="text-xl">Loading university information...</p>
    </div>

    <div
      v-else-if="errorMessage"
      class="flex h-[50vh] items-center justify-center"
    >
      <p class="text-xl text-red-500">{{ errorMessage }}</p>
    </div>

    <template v-else-if="university">
      <section class="relative h-[80vh] w-full overflow-hidden">
        <NuxtImg
          :src="university.image"
          class="absolute left-0 right-0 top-0 -z-50 h-full w-full object-cover"
        />

        <div
          class="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]"
        >
          <div class="space-y-4 text-white">
            <h2 class="text-5xl font-semibold">
              {{ university.name }} ({{ university.country_name }})
            </h2>
            <p class="text-lg font-normal">
              {{ university.description }}
            </p>
            <p class="text-lg font-normal">
              {{ university.scholarship_name }}
            </p>
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-20 p-20">
        <h2 class="text-center text-4xl font-bold">
          {{ $t("abroad.cover") }}
        </h2>

        <div class="m-auto grid w-full max-w-6xl grid-cols-2 gap-10">
          <div
            v-for="(item, index) in university.scholarship_benefits"
            :key="index"
          >
            <div
              v-if="item.includes('tuition')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/Hat.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>

            <div
              v-if="item.includes('stipend') || item.includes('scholarship')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/Money.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>

            <div
              v-if="item.includes('flight')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/Plane.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>

            <div
              v-if="item.includes('health')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/Sick.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>

            <div
              v-if="item.includes('language')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/university/korea/flag.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>

            <div
              v-if="item.includes('dormitory')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/Dormitory.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>

            <div
              v-if="item.includes('meal')"
              class="relative rounded bg-[#DE6161] p-2 text-center text-white"
            >
              <NuxtImg
                src="/Meal.png"
                class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
              />
              <p>{{ item }}</p>
            </div>
          </div>
        </div>

        <div class="w-full rounded-lg bg-[#D3DEFF] p-6 text-center">
          <p>{{ university.scholarship_description }}</p>
        </div>
      </section>

      <section class="flex flex-col gap-20 p-20">
        <h2 class="text-center text-4xl font-bold">
          {{ $t("abroad.apply") }}
        </h2>

        <!-- <div class="flex items-center justify-center gap-10">
          <div class="h-40 w-40 rounded-full border border-indigo-500 p-4">
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-indigo-500 text-2xl text-white"
            >
              1
            </div>
          </div>
          <hr class="border-1 w-[20%] border-black" />
          <div class="h-40 w-40 rounded-full border border-pink-500 p-2">
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-pink-500 text-2xl text-white"
            >
              2
            </div>
          </div>
          <hr class="border-1 w-[20%] border-black" />
          <div class="h-40 w-40 rounded-full border border-teal-500 p-2">
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-teal-500 text-2xl text-white"
            >
              3
            </div>
          </div>
        </div> -->

        <div class="flex items-center justify-around gap-16">
          <div
            v-for="(item, index) in university.application_steps"
            :key="index"
            class="flex max-w-64 flex-col items-center space-y-4"
          >
            <!-- <h4 class="text-lg font-semibold">{{ item }}</h4> -->
            <div
              :class="[
                'h-40 w-40 rounded-full border p-4',
                getStepColor(index).border,
              ]"
            >
              <div
                :class="[
                  'flex h-full w-full items-center justify-center rounded-full text-2xl text-white',
                  getStepColor(index).bg,
                ]"
              >
                {{ index + 1 }}
              </div>
            </div>

            <p>{{ item }}</p>
          </div>
        </div>
      </section>

      <!-- <section class="flex flex-col gap-20 p-20">
        <div class="space-y-10">
          <h2 class="flex items-center justify-center gap-4 text-4xl font-bold">
            <NuxtImg :src="university.flag" class="w-24" />
            {{ university.top_universities.title }}
          </h2>

          <p class="text-center text-lg font-normal">
            {{ university.top_universities.description }}
          </p>
        </div>

        <div class="grid grid-cols-3 gap-24">
          <div
            v-for="university in university.universities"
            :key="university.id"
            class="flex flex-col gap-4 text-center"
          >
            <div class="h-64 overflow-hidden rounded-xl">
              <NuxtImg
                :src="university.image"
                class="h-full w-full object-cover"
              />
            </div>
            <p class="text-center text-lg font-normal">{{ university.name }}</p>
          </div>
        </div>
      </section> -->

      <!-- <div class="flex justify-center pb-20">
        <UiButton variant="soft" class="w-1/2">
          {{ university.list }}
        </UiButton>
      </div> -->
    </template>

    <div v-else class="flex h-[50vh] items-center justify-center">
      <p class="text-xl">University not found</p>
    </div>
  </div>
</template>
