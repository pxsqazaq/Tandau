
<script setup lang="ts">
import type { Subject } from "~/types/subject";
import { useI18n } from 'vue-i18n';

const subjectStore = useSubjectStore();
const { subjects, isLoading } = storeToRefs(subjectStore);

const isModalOpen = ref(false);
const selectedSubject = ref<Subject | null>(null);

const openModal = (subject: Subject) => {
  selectedSubject.value = subject;
  isModalOpen.value = true;
};

onMounted(() => {
  subjectStore.getSubjectCombinations();
});

</script>

<template>
  <div>
    <section class="relative h-[80vh] w-full overflow-hidden">
      <NuxtImg
        src="/university/image.png"
        class="absolute left-0 right-0 top-0 -z-50 h-full w-full object-cover"
      />

      <div class="flex h-full w-full items-center bg-[rgba(0,0,0,0.6)] p-20">
        <div class="space-y-10 text-white">
          <h2 class="text-5xl font-semibold">
            {{ $t("kz.title") }}
          </h2>
          <p class="text-2xl font-normal">
            {{ $t("kz.subtitle") }}
          </p>
        </div>
      </div>
    </section>

    <div class="space-y-8 p-20">
      <h2 class="text-center text-4xl font-bold">
        {{ $t("kz.select") }}
      </h2>
      <p class="text-center text-lg font-normal">
        {{ $t("kz.description") }}
      </p>
    </div>

    <section class="mb-20 grid grid-cols-3 gap-20 px-20">
      <div class="flex flex-col justify-between p-10">
        <NuxtImg width="64" src="/Scale.png" class="-rotate-12" />
        <NuxtImg width="64" src="/Monitor.png" class="ml-auto" />
        <NuxtImg width="64" src="/Bank.png" class="rotate-12" />
      </div>

      <div v-if="isLoading" class="flex flex-col gap-6">
        <UiButton v-for="i in 14" :key="i" variant="soft">Loading...</UiButton>
      </div>

      <div v-else class="flex flex-col gap-6">
        <UiButton
          v-for="subject in subjects"
          :key="subject.id"
          variant="soft"
          @click="openModal(subject)"
        >
          {{ subject.name }}
        </UiButton>
      </div>

      <div class="flex flex-col justify-between p-10">
        <NuxtImg width="64" src="/Dna.png" class="ml-auto -rotate-12" />
        <NuxtImg width="64" src="/Letter.png" class="rotate-12" />
        <NuxtImg width="64" src="/Earth.png" class="ml-auto" />
      </div>
    </section>

    <SubjectCombination
      v-model:is-open="isModalOpen"
      :selected-subject="selectedSubject"
    />
  </div>
</template>
