<script setup lang="ts">
const opportunities = [
  {
    image: "/opportunities/opportunity-1.png",
    color: "bg-[#514FD5]",
    title: "Personalized Career Recommendations",
    text: "AI-driven guidance to help you choose the best career path based on your strengths and interests.",
  },
  {
    image: "/opportunities/opportunity-2.png",
    color: "bg-[#F7AB00]",
    title: "University and Program Matching",
    text: "Find the most suitable universities and programs worldwide for your chosen career.",
  },
  {
    image: "/opportunities/opportunity-3.png",
    color: "bg-[#F7AB00]",
    title: "Insights into Future Professions",
    text: "Stay ahead with expert insights on in-demand careers and emerging industries.",
  },
  {
    image: "/opportunities/opportunity-4.png",
    color: "bg-[#514FD5]",
    title: "Stress-Free Decision-Making",
    text: "We analyze all the options for you—so you can focus on your future with confidence",
  },
];

const stages = [
  {
    title: "Take a test",
    text: "Answer a few simple questions about your interests and strengths.",
  },
  {
    title: "Get Personalized Results",
    text: "Receive AI-driven recommendations tailored to your potential.",
  },
  {
    title: "Explore Career Paths",
    text: "Learn about different professions and the skills required.",
  },
];

const items = [
  {
    text: "Can a career be chosen based on strengths?",
  },
  {
    text: "Is career suitability determined with the help of Tan'dau?",
  },
  {
    text: "Is preparation for a future profession provided while still in school?",
  },
  {
    text: "Is support given at every stage of career orientation?",
  },
  {
    text: "Are chances of making the right career choice increased through testing?",
  },
  {
    text: "Is the path to a dream profession guided by Tan'dau?",
  },
];
</script>

<template>
  <div class="space-y-2">
    <section class="flex h-dvh w-full">
      <div
        class="m-auto flex h-full w-[60%] flex-col justify-center gap-6 p-16"
      >
        <h2 class="text-6xl font-bold">
          Find Your Dream Career with a Smart Assistant
        </h2>
        <p class="text-3xl">
          Tan'dau is an AI-powered career guidance platform that helps students
          choose the right profession, university, and skills based on their
          strengths and market trends—making career decisions simple and
          data-driven. 🚀
        </p>

        <div class="mt-16 flex w-full items-center justify-evenly">
          <NuxtLink to="/sign-up">
            <UiButton class="uppercase" variant="secondary">Register</UiButton>
          </NuxtLink>
          <NuxtLink to="chat">
            <UiButton class="uppercase" variant="primary">Ask ai now</UiButton>
          </NuxtLink>
        </div>
      </div>

      <div class="relative flex h-full w-[40%] items-center justify-center">
        <NuxtImg
          src="/bg-hero.png"
          class="absolute bottom-0 right-0 top-0 -z-10 h-full w-full"
        />

        <NuxtImg src="/hero.png" class="h-[60%] w-[60%] object-contain" />
      </div>
    </section>

    <section class="flex w-full flex-col items-center gap-8 p-20">
      <h2 class="text-center text-4xl font-semibold">
        🌟 Feeling Lost About Your Future Career?
      </h2>
      <p class="text-center">
        You’re not alone - choosing the <strong>right</strong> path can be
        confusing, stressful, even scary. But it doesn't have to be.
      </p>

      <div class="flex items-center justify-center">
        <div class="w-[50%] space-y-4">
          <p>
            <strong>Tan'dau</strong> is here to turn your uncertainty into
            confidence. Let our smart AI dive deep into your strengths,
            passions, and hidden potential - and guide you to a future where you
            thrive, not just survive.
          </p>

          <p>
            Because you deserve more than “just a job”. You deserve a path that
            inspires you every day.
          </p>

          <p>Start your journey now. Discover who you're meant to be.</p>
        </div>

        <div class="flex h-72 w-[40%] items-end justify-center">
          <NuxtImg src="/AI.png" class="h-[150%] w-[150%] object-contain" />
        </div>
      </div>

      <UiButton variant="primary" class="flex items-center"
        >Find My Career Path</UiButton
      >
    </section>

    <section class="flex h-[80vh] w-full flex-col gap-10 p-20">
      <h2 class="text-center text-4xl font-semibold">
        With Tan'dau, You Will Get:
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
        Tan'dau is with you at every stage
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
          <strong class="text-2xl text-[#F7AB00]"> YES </strong>
        </div>
      </div>
      <NuxtImg
        src="/Question.png"
        class="absolute bottom-10 left-10 w-28 -rotate-45"
      />
    </section>

    <section class="flex w-full flex-col gap-20 p-20">
      <h2 class="m-auto flex items-center gap-4 text-4xl font-semibold">
        Partner Schools & Universities
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
