<script setup lang="ts">
import * as z from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
});

const errors = reactive<{ email?: string }>({});

const isFocused = reactive<{ email: boolean }>({
  email: false,
});

const handleSubmit = async () => {
  errors.email = undefined;

  const result = schema.safeParse(state);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      if (issue.path[0] === "email") errors.email = issue.message;
    });
    return;
  }

  console.log("result: ", state.email);
};
</script>

<template>
  <div class="flex h-dvh w-full items-center justify-center">
    <form
      class="relative m-auto flex w-full max-w-3xl flex-col items-center gap-4 border border-[#514FD5] p-24"
      @submit.prevent="handleSubmit"
    >
      <NuxtLink to="/sign-in" class="absolute left-8 top-8">
        <Icon name="lucide:arrow-left" class="h-6 w-6 hover:text-[#514FD5]" />
      </NuxtLink>

      <h3 class="text-center text-2xl font-semibold text-[#00356F]">
        Forgot Password
      </h3>
      <p class="text-center text-gray-500">
        Please enter your email address so we can send you an email to reset
        your password.
      </p>

      <fieldset
        :class="{ 'border-gray-900': isFocused.email }"
        class="w-full border border-gray-400 p-2"
      >
        <legend class="uppercase">email address</legend>
        <UiInput
          v-model="state.email"
          type="email"
          class="border-none outline-none focus:ring-0"
          @focus="isFocused.email = true"
          @blur="isFocused.email = false"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-500">
          {{ errors.email }}
        </p>
      </fieldset>

      <UiButton class="uppercase" type="submit" variant="secondary" block>
        Send
      </UiButton>
    </form>
  </div>
</template>
