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

    <div class="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]">
      <div class="space-y-4 text-white p-[80px]">
        <h2 class="text-5xl font-semibold">
          {{ university.scholarship_name }} 
        </h2>
        <p class="text-4xl font-normal">
          {{ university.name }}
        </p>
        <p class="text-xl font-normal">
          {{ university.description }}
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
        class="relative rounded bg-[#DE6161] p-2 text-center text-white"
      >
      <NuxtImg
          :src="[
            '/Hat.png', 
            '/Money.png', 
            '/Plane.png', 
            '/Sick.png', 
            '/university/korea/flag.png', 
            '/Dormitory.png', 
            '/Meal.png'
          ][index]"
          class="absolute -left-7 -top-7 h-14 w-14 -rotate-12"
       />

        <p>{{ item }}</p>
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

    <div class="flex items-center justify-around gap-16">
      <div
        v-for="(item, index) in university.application_steps"
        :key="index"
        class="flex max-w-64 flex-col items-center space-y-4"
      >
        <div
          :class="['h-40 w-40 rounded-full border p-4', getStepColor(index).border]"
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
</template>
    <div v-else class="flex h-[50vh] items-center justify-center">
      <p class="text-xl">University not found</p>
      <p>here</p>
    </div>
  </div>
</template>
