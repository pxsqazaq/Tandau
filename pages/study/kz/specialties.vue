<script setup lang="ts">
const route = useRoute();
const subjectStore = useSubjectStore();
const { isLoading, specialityBySubjects } = storeToRefs(subjectStore);

const subject1Id = computed(() => Number(route.query.subject1));
const subject2Id = computed(() => Number(route.query.subject2));

onMounted(async () => {
  if (subject1Id.value && subject2Id.value) {
    await subjectStore.getSpecialityBySubjects(
      subject1Id.value,
      subject2Id.value,
    );
  }
});

watch([subject1Id, subject2Id], async ([newSubject1Id, newSubject2Id]) => {
  if (newSubject1Id && newSubject2Id) {
    await subjectStore.getSpecialityBySubjects(newSubject1Id, newSubject2Id);
  } else {
    specialityBySubjects.value = null;
  }
});

onUnmounted(() => {
  specialityBySubjects.value = null;
});
</script>

<template>
  <div>
    <section class="relative h-[50vh] w-full overflow-hidden">
      <NuxtImg
        src="/university/image.png"
        class="absolute left-0 right-0 top-0 -z-50 h-full w-full object-cover"
      />

      <div class="flex h-full w-full items-center bg-[rgba(0,0,0,0.6)] p-20">
        <div class="space-y-10 text-white">
          <h2 class="text-5xl font-semibold">Available Specialties</h2>
          <p class="text-2xl font-normal">
            Explore specialties available with your chosen subject combination
          </p>
        </div>
      </div>
    </section>

    <div class="p-20">
      <div class="mb-10">
        <NuxtLink to="/study/kz" class="flex items-center gap-2 text-blue-600">
          <i class="ri-arrow-left-line" />
          <span>Back to subjects</span>
        </NuxtLink>
      </div>

      <div v-if="isLoading" class="flex flex-col gap-6">
        <div
          v-for="i in 5"
          :key="i"
          class="h-40 animate-pulse rounded-lg bg-gray-200 p-6"
        />
      </div>

      <div v-else-if="!specialityBySubjects" class="py-10 text-center">
        <p class="text-lg">No specialties found for this subject combination</p>
        <NuxtLink to="/study/kz" class="mt-4 inline-block text-blue-600">
          Try a different combination
        </NuxtLink>
      </div>

      <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="specialty in specialityBySubjects"
          :key="specialty.id"
          class="flex flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
        >
          <h3 class="mb-4 text-xl font-semibold">{{ specialty.name }}</h3>
          <p v-if="specialty.description" class="mb-4 text-gray-600">
            {{ specialty.description }}
          </p>
          <div class="mt-auto">
            <NuxtLink
              :to="`/specialty/${specialty.id}`"
              class="inline-flex items-center gap-2 text-blue-600"
            >
              View details
              <i class="ri-arrow-right-line" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
