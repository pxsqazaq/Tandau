<script setup lang="ts">
interface CarouselItem {
  title: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

const props = defineProps<{
  items: CarouselItem[];
  autoplay?: number;
  loop?: boolean;
}>();

const current = ref<number>(0);
let interval: ReturnType<typeof setInterval> | null = null;
const carouselRef = ref<HTMLDivElement | null>(null);

const startAutoplay = () => {
  stopAutoplay();
  interval = setInterval(() => {
    next();
  }, props.autoplay);
};

const stopAutoplay = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

onMounted(() => {
  startAutoplay();
  carouselRef.value?.focus();
});

onBeforeUnmount(stopAutoplay);

watch(
  () => props.autoplay,
  () => {
    startAutoplay();
  },
);

const next = () => {
  if (current.value < props.items.length - 1) {
    current.value++;
  } else if (props.loop) {
    current.value = 0;
  }
};

const prev = () => {
  if (current.value > 0) {
    current.value--;
  } else if (props.loop) {
    current.value = props.items.length - 1;
  }
};

// const goTo = (index: number) => {
//   current.value = index;
// };

let startX = 0;
let endX = 0;

const onTouchStart = (e: TouchEvent) => {
  startX = e.touches[0].clientX;
};

const onTouchMove = (e: TouchEvent) => {
  endX = e.touches[0].clientX;
};

const onTouchEnd = () => {
  if (startX - endX > 50) next();
  else if (endX - startX > 50) prev();
};
</script>

<template>
  <div
    ref="carouselRef"
    class="relative overflow-hidden"
    tabindex="0"
    @keydown.left="prev"
    @keydown.right="next"
  >
    <div
      class="flex transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${current * 100}%)` }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative w-full shrink-0"
      >
        <slot :item="item" :index="index" />
      </div>
    </div>

    <!-- 
    <button
      class="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
      @click="prev"
    >
      ‹
    </button>
    <button
      class="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
      @click="next"
    >
      ›
    </button>

    <div
      class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2"
    >
      <button
        v-for="(item, index) in items"
        :key="index"
        class="h-2 w-2 rounded-full"
        :class="{
          'bg-primary': index === current,
          'bg-gray-300': index !== current,
        }"
        @click="goTo(index)"
      />
    </div> 
    -->
  </div>
</template>
