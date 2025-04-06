<script setup lang="ts">
import * as z from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const errors = reactive<{ email?: string; password?: string }>({});
const showPassword = ref(false);

const isFocused = reactive<{ email: boolean; password: boolean }>({
  email: false,
  password: false,
});

const handleSubmit = async () => {
  errors.email = undefined;
  errors.password = undefined;

  const result = schema.safeParse(state);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      if (issue.path[0] === "email") errors.email = issue.message;
      if (issue.path[0] === "password") errors.password = issue.message;
    });
    return;
  }

  console.log("result: ", state.email, state.password);
};
</script>

<template>
  <div class="flex h-dvh w-full items-center justify-center">
    <form
      class="m-auto flex w-full max-w-3xl flex-col items-center gap-4 border border-[#514FD5] p-24"
      @submit.prevent="handleSubmit"
    >
      <h3 class="text-center text-2xl font-semibold text-[#00356F]">
        Log In to Tan’dau
      </h3>

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

      <fieldset
        :class="{ 'border-gray-900': isFocused.password }"
        class="w-full border border-gray-400 p-2"
      >
        <legend class="uppercase">password</legend>
        <div class="flex items-center gap-2 pr-2">
          <UiInput
            v-model="state.password"
            :type="showPassword ? 'text' : 'password'"
            class="border-none outline-none focus:ring-0"
            @focus="isFocused.password = true"
            @blur="isFocused.password = false"
          />
          <UiButton
            type="button"
            variant="icon"
            :padded="false"
            @click="showPassword = !showPassword"
          >
            <Icon
              :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'"
              size="24"
            />
          </UiButton>
        </div>
        <p v-if="errors.password" class="mt-1 text-sm text-red-500">
          {{ errors.password }}
        </p>
      </fieldset>

      <NuxtLink to="https://t.me/Shrekbek" target="_blank" class="underline">
        Forgot Password?
      </NuxtLink>

      <fieldset class="w-full">
        <label for="" class="flex gap-2 underline">
          <UiInput
            type="checkbox"
            class="!w-4 border-none outline-none focus:ring-0"
          />
          Remember me
        </label>
      </fieldset>

      <UiButton class="uppercase" type="submit" variant="secondary" block>
        Proceed
      </UiButton>

      <span class="flex items-center gap-2">
        <p>Don’t have an Account?</p>
        <NuxtLink to="/sign-up" class="text-[#514FD5] underline">
          Sign Up
        </NuxtLink>
      </span>

      <UiButton type="button" class="flex items-center gap-2">
        <NuxtImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          class="h-8 w-8"
        />
        Sign In with Google
      </UiButton>
    </form>
  </div>
</template>
