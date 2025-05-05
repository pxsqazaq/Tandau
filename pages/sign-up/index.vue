<script setup lang="ts">
import * as z from "zod";

const userStore = useUserStore();

const schema = z.object({
  username: z
    .string()
    .regex(
      /^[a-zA-Z0-9._]+$/,
      "Only letters, numbers, '.', and '_' are allowed",
    ),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  username: undefined,
  email: undefined,
  password: undefined,
});

const errors = reactive<{
  username?: string;
  email?: string;
  password?: string;
}>({});
const showPassword = ref(false);

const isFocused = reactive<{
  username: boolean;
  email: boolean;
  password: boolean;
}>({
  username: false,
  email: false,
  password: false,
});

const handleSubmit = async () => {
  errors.username = undefined;
  errors.email = undefined;
  errors.password = undefined;

  const result = schema.safeParse(state);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      if (issue.path[0] === "username") errors.username = issue.message;
      if (issue.path[0] === "email") errors.email = issue.message;
      if (issue.path[0] === "password") errors.password = issue.message;
    });
    return;
  }

  await userStore.signUp(result.data);
};
</script>

<template>
  <div class="flex h-dvh w-full items-center justify-center">
    <form
      class="m-auto flex w-full max-w-3xl flex-col items-center gap-4 border border-[#514FD5] p-24"
      @submit.prevent="handleSubmit"
    >
      <h3 class="text-center text-2xl font-semibold text-[#00356F]">
        {{ $t("auth.signUpTandau") }}
      </h3>

      <fieldset
        :class="{ 'border-gray-900': isFocused.email }"
        class="w-full border border-gray-400 p-2"
      >
        <legend class="uppercase">
          {{ $t("auth.username") }}
        </legend>
        <UiInput
          v-model="state.username"
          name="username"
          type="text"
          class="border-none outline-none focus:ring-0"
          @focus="isFocused.username = true"
          @blur="isFocused.username = false"
        />
        <p v-if="errors.username" class="mt-1 text-sm text-red-500">
          {{ errors.username }}
        </p>
      </fieldset>

      <fieldset
        :class="{ 'border-gray-900': isFocused.email }"
        class="w-full border border-gray-400 p-2"
      >
        <legend class="uppercase">
          {{ $t("auth.email") }}
        </legend>
        <UiInput
          v-model="state.email"
          name="email"
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
        <legend class="uppercase">
          {{ $t("auth.password") }}
        </legend>
        <div class="flex items-center gap-2 pr-2">
          <UiInput
            v-model="state.password"
            name="password"
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

      <fieldset class="w-full">
        <label for="" class="flex gap-2 underline">
          <UiInput
            type="checkbox"
            class="!w-4 border-none outline-none focus:ring-0"
          />
          {{ $t("auth.privacy") }}
        </label>
      </fieldset>

      <UiButton class="uppercase" type="submit" variant="secondary" block>
        {{ $t("auth.create") }}
      </UiButton>

      <span class="flex items-center gap-2">
        <p>
          {{ $t("auth.alreadyHaveAccount") }}
        </p>
        <NuxtLink to="/sign-in" class="text-[#514FD5] underline">
          {{ $t("auth.signIn") }}
        </NuxtLink>
      </span>

      <UiButton type="button" class="flex items-center gap-2">
        <NuxtImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          class="h-8 w-8"
        />
        {{ $t("auth.signUpWithGoogle") }}
      </UiButton>
    </form>
  </div>
</template>
