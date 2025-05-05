<script setup lang="ts">
const userStore = useUserStore();
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const opportunities = [
  {
    image: "/opportunities/opportunity-1.png",
    color: "bg-[#514FD5]",
    title: t('main.personalized'),
    text: t('main.personalized_description'),
  },
  {
    image: "/opportunities/opportunity-2.png",
    color: "bg-[#F7AB00]",
    title:t('main.universities'),
    text: t('main.universities_description'),
  },
  {
    image: "/opportunities/opportunity-3.png",
    color: "bg-[#F7AB00]",
    title: t('main.insights'),
    text: t('main.insights_description'),
  },
  {
    image: "/opportunities/opportunity-4.png",
    color: "bg-[#514FD5]",
    title: t('main.stress'),
    text:  t('main.stress_description'),
  },
];

const stages = [
  {
    title: t('main.test'),
    text: t('main.test_description'),
  },
  {
    title: t('main.personalizedResults'),
    text: t('main.personalizedResults_description'),
  },
  {
    title: t('main.exploreCareers'),
    text: t('main.exploreCareers_description'),
  },
];

const items = [
  {
    text: t('main.question1'),
  },
  {
    text: t('main.question2'),
  },
  {
    text: t('main.question3'),
  },
  {
    text: t('main.question4'),
  },
  {
    text: t('main.question5'),
  },
  {
    text: t('main.question6'),
  },
];
</script>

<template>
  <div class="space-y-2">
    <section class="flex h-dvh w-full">
      <div
        class="m-auto flex h-full w-[60%] flex-col justify-center gap-16 p-16"
      >
        <h2 class="text-6xl font-bold">
          {{ $t("main.title") }}
        </h2>
        <p class="text-3xl">
          {{ $t("main.description") }}
        </p>

        <NuxtLink v-if="!userStore.isAuthenticated" to="/sign-up">
          <UiButton class="uppercase" variant="primary" size="lg">
            {{ $t("main.register") }}
          </UiButton>
        </NuxtLink>
        <NuxtLink v-else to="chat">
          <UiButton variant="secondary" size="lg">
            {{ $t("main.find_career") }}
          </UiButton>
        </NuxtLink>
      </div>

      <div class="relative flex h-full w-[40%] items-center justify-center">
        <NuxtImg src="/hero.png" class="h-[70%] w-[70%] object-contain" />
      </div>
    </section>

    <section class="flex w-full flex-col items-center gap-16 p-20">
      <div class="flex flex-col gap-8">
        <h2 class="text-center text-4xl font-semibold">
          {{ $t("main.feeling_lost") }}
        </h2>
        <p class="text-center">
          {{ $t("main.not_alone") }}
        </p>
      </div>

      <div class="flex items-center justify-center">
        <div class="w-[50%] space-y-4">
          <p>
            <strong>Tan'dau</strong> {{ $t("main.feeling_lost_description1") }}
          </p>

          <p>
            {{ $t("main.feeling_lost_description2") }}
          </p>

          <p>
            {{ $t("main.feeling_lost_description3") }}
          </p>
        </div>

        <div class="flex h-72 w-[40%] items-end justify-center">
          <NuxtImg src="/AI.png" class="h-[150%] w-[150%] object-contain" />
        </div>
      </div>

      <UiButton variant="primary" class="flex items-center">
        {{ $t("main.find_career") }}
      </UiButton>
    </section>

    <section class="flex h-[80vh] w-full flex-col gap-10 p-20">
      <h2 class="text-center text-4xl font-semibold">
        {{ $t("main.withTandau") }}
      </h2>

      <div class="grid grid-cols-2 gap-16">
        <div
          v-for="(opportunity, index) in opportunities"
          :key="index"
          class="flex flex-col items-start gap-4"
        >
          <div
            class="mx-4 mt-4 flex items-center justify-center rounded-xl p-4"
            :class="opportunity.color"
          >
            <NuxtImg :src="opportunity.image" />
          </div>

          <h4 class="text-lg font-semibold">{{ opportunity.title }}</h4>
          <p>{{ opportunity.text }}</p>
        </div>
      </div>
    </section>

    <section class="flex w-full flex-col gap-20 p-20">
      <h2 class="m-auto flex items-center gap-4 text-4xl font-semibold">
        <NuxtImg src="/Rocket.png" />
        {{ $t("main.stage") }}
      </h2>

      <div class="flex items-center justify-center gap-10">
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
      </div>

      <div class="flex items-center justify-around gap-16">
        <div
          v-for="(stage, index) in stages"
          :key="index"
          class="flex max-w-64 flex-col items-center text-center"
        >
          <h4 class="text-lg font-semibold">{{ stage.title }}</h4>
          <p>{{ stage.text }}</p>
        </div>
      </div>
    </section>

    <section class="relative flex w-full flex-col gap-20 overflow-hidden p-20">
      <NuxtImg
        src="/Think.png"
        class="absolute right-10 top-10 w-28 -rotate-45"
      />
      <div class="grid grid-cols-3 gap-16">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center justify-between gap-4 rounded-lg border-2 border-[#F7AB00] p-6 text-center"
        >
          <p class="max-w-80">• {{ item.text }}</p>
          <strong class="text-2xl text-[#F7AB00]"> {{ $t("main.yes") }} </strong>
        </div>
      </div>
      <NuxtImg
        src="/Question.png"
        class="absolute bottom-10 left-10 w-28 -rotate-45"
      />
    </section>

    <section class="flex w-full flex-col gap-20 p-20">
      <h2 class="m-auto flex items-center gap-4 text-4xl font-semibold">
        {{ $t("main.partners") }}
      </h2>

      <div class="grid grid-cols-4 justify-items-center gap-16">
        <NuxtImg
          src="/partners/partner-1.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-2.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-3.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-4.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-5.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-6.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-7.png"
          class="h-40 w-40 object-contain"
        />
        <NuxtImg
          src="/partners/partner-8.png"
          class="h-40 w-40 object-contain"
        />
      </div>
    </section>
  </div>
</template>
