<script setup lang="ts">
const subjects = [
  "Mathematics",
  "Physics",
  "Geography",
  "Biology",
  "World History",
  "Fundamentals of law",
  "Foreign language",
  "Creative exam",
  "Russian language",
  "Kazakh language",
  "Informatics",
];
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
            Can You Get a Grant? <br />
            Check Your Probability Now!
          </h2>
          <p class="text-2xl font-normal">
            Enter your scores and preferences to see your <br />
            chances of studying on a grant in Kazakhstan.
          </p>
        </div>
      </div>
    </section>

    <div class="space-y-8 p-20">
      <h2 class="text-center text-4xl font-bold">
        Select Your Specialized Subjects 🎯
      </h2>
      <p class="text-center text-lg font-normal">
        Select your first specialized subject and find out your chances of
        securing a study grant based on your chosen subjects and UNT scores
      </p>
    </div>

    <section class="mb-20 grid grid-cols-3 gap-20 px-20">
      <div class="flex flex-col justify-between p-10">
        <NuxtImg width="64" src="/Scale.png" class="-rotate-12" />
        <NuxtImg width="64" src="/Monitor.png" class="ml-auto" />
        <NuxtImg width="64" src="/Bank.png" class="rotate-12" />
      </div>

      <div class="flex flex-col gap-6">
        <UiButton
          v-for="(subject, index) in subjects"
          :key="index"
          variant="soft"
        >
          {{ subject }}
        </UiButton>
      </div>

      <div class="flex flex-col justify-between p-10">
        <NuxtImg width="64" src="/Dna.png" class="ml-auto -rotate-12" />
        <NuxtImg width="64" src="/Letter.png" class="rotate-12" />
        <NuxtImg width="64" src="/Earth.png" class="ml-auto" />
      </div>
    </section>
  </div>
</template>
