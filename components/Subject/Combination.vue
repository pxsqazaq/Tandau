<script setup lang="ts">
import type { Subject, subjectCombinations } from "~/types/subject";

const props = defineProps<{
  isOpen: boolean;
  selectedSubject: Subject | null;
}>();

const emit = defineEmits<{
  "update:isOpen": [value: boolean];
}>();

const subjectStore = useSubjectStore();
const { subjectCombinations, isLoading } = storeToRefs(subjectStore);

const searchQuery = ref("");

const close = () => {
  emit("update:isOpen", false);
  searchQuery.value = "";
};

const filteredCombinations = computed(() => {
  if (!props.selectedSubject) return [];

  const relevantCombinations = subjectCombinations.value.filter(
    (combo) =>
      combo.subject1.id === props.selectedSubject?.id ||
      combo.subject2.id === props.selectedSubject?.id,
  );

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    return relevantCombinations.filter(
      (combo) =>
        combo.subject1.name.toLowerCase().includes(query) ||
        combo.subject2.name.toLowerCase().includes(query),
    );
  }

  return relevantCombinations;
});

const getPairedSubject = (combo: subjectCombinations) => {
  if (combo.subject1.id === props.selectedSubject?.id) {
    return combo.subject2;
  }
  return combo.subject1;
};
</script>

<template>
  <UiModal
    :model-value="isOpen"
    @update:model-value="emit('update:isOpen', $event)"
  >
    <div class="flex flex-col gap-8 p-6">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl font-semibold">
          {{ $t("kz.combinations") }} {{ selectedSubject?.name }}
        </h3>
        <UiButton variant="icon" @click="close">
          <i class="ri-close-line text-2xl" />
        </UiButton>
      </div>

      <div class="mb-4">
        <UiInput
          v-model="searchQuery"
          :placeholder="$t('kz.search')"
          class="w-full"
        >
          <template #prefix>
            <i class="ri-search-line" />
          </template>
        </UiInput>
      </div>

      <div v-if="isLoading" class="flex flex-col gap-4">
        <UiButton v-for="i in 5" :key="i" variant="soft"> {{ $t("header.loading") }} </UiButton>
      </div>
      <div
        v-else-if="filteredCombinations.length === 0"
        class="py-4 text-center"
      >
        No subject combinations found
      </div>
      <div v-else class="flex max-h-[60vh] flex-col gap-4 overflow-y-auto">
        <UiButton
          v-for="combo in filteredCombinations"
          :key="combo.id"
          variant="soft"
          @click="
            $router.push(
              `/study/kz/specialties?subject1=${selectedSubject?.id}&subject2=${getPairedSubject(combo).id}`,
            )
          "
        >
          {{ getPairedSubject(combo).name }}
        </UiButton>
      </div>
    </div>
  </UiModal>
</template>
