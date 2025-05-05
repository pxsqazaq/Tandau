<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();

const formattedContent = computed(() => {
  if (!props.content) return "";

  let formatted = props.content;

  if (formatted.startsWith("Here are")) {
    const introEnd = formatted.indexOf("1.");
    if (introEnd > 0) {
      const intro = formatted.substring(0, introEnd);
      const rest = formatted.substring(introEnd);
      formatted = `<div class="intro">${intro}</div>${rest}`;
    }
  }

  formatted = formatted.replace(
    /(\d+\.\s+\*\*.*?\*\*.*?)(?=\d+\.|<div class="intro">|$)/gs,
    '<div class="university-item">$1</div>',
  );

  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  formatted = formatted.replace(
    /- \*\*Scholarship\*\*:(.*?)(?=- \*\*|$)/gs,
    '<div class="scholarship-item"><span class="label">Scholarship:</span>$1</div>',
  );

  formatted = formatted.replace(
    /- \*\*Specialties\*\*:(.*?)(?=\d+\.|$)/gs,
    '<div class="specialties-item"><span class="label">Specialties:</span>$1</div>',
  );

  if (formatted.includes("Since the specific offerings")) {
    const conclusionStart = formatted.indexOf("Since the specific offerings");
    if (conclusionStart > 0) {
      const before = formatted.substring(0, conclusionStart);
      const conclusion = formatted.substring(conclusionStart);
      formatted = `${before}<div class="conclusion">${conclusion}</div>`;
    }
  }

  formatted = formatted
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("");

  return formatted;
});
</script>

<template>
  <div class="message-content prose -mt-5">
    <div v-html="formattedContent" />
  </div>
</template>

<style scoped>
.message-content {
  @apply text-gray-700;
}

.message-content :deep(.intro),
.message-content :deep(.conclusion) {
  @apply mb-4 rounded-md p-3 text-gray-700;
}

.message-content :deep(.intro) {
  @apply border-l-4 border-teal-300 bg-teal-50;
}

.message-content :deep(.conclusion) {
  @apply mt-3 border-l-4 border-amber-300 bg-amber-50;
}

.message-content :deep(.university-item) {
  @apply mb-4 rounded-md border-l-4 border-indigo-200 bg-indigo-50 p-3 pl-4 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md;
}

.message-content :deep(.scholarship-item),
.message-content :deep(.specialties-item) {
  @apply my-1 pl-4;
}

.message-content :deep(.label) {
  @apply mr-1 font-medium text-indigo-600;
}

.message-content :deep(strong) {
  @apply font-bold text-indigo-700;
}

.message-content :deep(p) {
  @apply mb-3;
}
</style>
