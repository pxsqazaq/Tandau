<script setup lang="ts">
const handleModal = ref(false);
const secondSubject = ref(false);
const rural = ref(false);
const score = ref(0);

const slides = [
  {
    title: "SDU",
    description: "Making your dreams a reality - SDU University",
    image: "https://orda.kz/uploads/posts/2024-04/1693930293_222.jpg",
  },
  {
    title: "KBTU",
    description:
      "A place where long-standing traditions and innovative ideas intertwine.",
    image: "https://kbtu.edu.kz/images/KBTU_2018.jpg",
  },
  {
    title: "NU",
    description: "Step Into Your Future",
    image:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/dpr_2.0/element/18/180761_Panolowheight4k.jpg",
  },
];

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Economics",
  "History",
  "Geography",
  "Literature",
  "Art",
];

watch(handleModal, (newVal) => {
  if (newVal === false) {
    secondSubject.value = false;
  }
});
</script>

<template>
  <div class="min-h-dvh w-full space-y-8">
    <div class="flex h-[50vh] bg-[#00356F]">
      <UiCarousel
        :items="slides"
        :autoplay="4000"
        :loop="true"
        class="relative h-full w-1/3"
      >
        <template #default="{ item }">
          <div class="text-white">
            <NuxtImg
              :src="item.image"
              class="mb-2 h-[50dvh] w-full object-cover"
            />
            <div
              class="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-black/50 p-4 text-center text-white backdrop-blur-md"
            >
              <h3 class="text-xl font-bold">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </template>
      </UiCarousel>

      <div
        class="flex w-2/3 flex-col items-center justify-center gap-4 p-8 text-white"
      >
        <h2 class="text-5xl font-semibold">
          Can You Get a Grant? Check Your Probability Now!
        </h2>
        <p>
          Enter your scores and preferences to see your chances of studying on a
          grant in Kazakhstan.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center gap-6 p-8">
      <h3 class="text-4xl font-medium">1st specialized subject</h3>

      <ul class="w-full max-w-5xl space-y-4">
        <li
          v-for="(subject, index) in subjects"
          :key="index"
          class="flex w-full cursor-pointer items-center justify-between text-lg hover:underline"
          @click="handleModal = true"
        >
          {{ subject }}
          <Icon name="lucide:chevron-right" size="24" />
        </li>
      </ul>

      <UiModal v-model="handleModal" class="p-8">
        <div v-if="!secondSubject" class="space-y-6">
          <h3 class="text-2xl font-semibold">2nd specialized subject</h3>
          <ul class="w-full max-w-5xl space-y-4">
            <li
              v-for="(subject, index) in subjects"
              :key="index"
              class="flex w-full cursor-pointer items-center justify-between text-lg hover:underline"
              @click="secondSubject = true"
            >
              {{ subject }}
              <Icon name="lucide:chevron-right" size="24" />
            </li>
          </ul>
        </div>

        <div v-if="secondSubject" class="space-y-6">
          <h3 class="text-2xl font-semibold">UNT score</h3>
          <div class="flex flex-col items-center gap-2">
            <input
              v-model="score"
              type="range"
              min="0"
              max="140"
              class="w-full"
            />
            <input
              v-model="score"
              type="number"
              class="w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div
            class="flex items-center justify-between rounded-lg bg-gray-400 p-4"
          >
            <div>
              <strong class="text-xl uppercase">Rural quota</strong>
              <p>
                If you are from a rural school, there will be a separate
                competition
              </p>
            </div>

            <input v-model="rural" type="checkbox" />
          </div>

          <UiButton block variant="primary">VIEW THE PROBABILITY</UiButton>
        </div>
      </UiModal>
    </div>
  </div>
</template>
