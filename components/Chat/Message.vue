<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();

const formattedContent = computed(() => {
  if (!props.content) return "";

  let formatted = props.content;

  // Обработка markdown заголовков (h1-h6)
  formatted = formatted.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold my-3">$1</h3>');
  formatted = formatted.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold my-3">$1</h2>');
  formatted = formatted.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold my-4">$1</h1>');
  formatted = formatted.replace(/^#### (.*?)$/gm, '<h4 class="text-lg font-bold my-2">$1</h4>');
  formatted = formatted.replace(/^##### (.*?)$/gm, '<h5 class="text-base font-bold my-2">$1</h5>');
  formatted = formatted.replace(/^###### (.*?)$/gm, '<h6 class="text-sm font-bold my-2">$1</h6>');

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

  // Проверяем, есть ли уже HTML-теги заголовков в тексте перед разделением на параграфы
  const hasHeadings = /<h[1-6]/.test(formatted);

  if (!hasHeadings) {
    formatted = formatted
      .split("\n\n")
      .map((p) => `<p>${p}</p>`)
      .join("");
  } else {
    // Если есть заголовки, то обрабатываем абзацы более аккуратно
    formatted = formatted
      .split("\n\n")
      .map((p) => {
        // Не оборачиваем в <p> контент, который уже содержит заголовки
        return p.startsWith('<h') ? p : `<p>${p}</p>`;
      })
      .join("");
  }

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

/* Стили для markdown заголовков */
.message-content :deep(h1),
.message-content :deep(h2),
.message-content :deep(h3),
.message-content :deep(h4),
.message-content :deep(h5),
.message-content :deep(h6) {
  @apply text-indigo-800 font-semibold;
}
</style>
