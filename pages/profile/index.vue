<script setup lang="ts">
import * as z from "zod";

const schema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  username: z.string().min(1, "Username is required"),
  gender: z.string(),
  country: z.string(),
  language: z.string(),
  date_of_birth: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  full_name: "Moldabek Arystan",
  username: "pxs_qazaq",
  gender: "male",
  country: "Kazakhstan",
  language: "Kazakh",
  date_of_birth: undefined,
});

const errors = reactive<{ full_name?: string; username?: string }>({});

const handleSubmit = async () => {
  errors.full_name = undefined;
  errors.username = undefined;

  const result = schema.safeParse(state);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      if (issue.path[0] === "full_name") errors.full_name = issue.message;
      if (issue.path[0] === "username") errors.username = issue.message;
    });
    return;
  }

  console.log(
    "result: ",
    state.full_name,
    state.username,
    state.gender,
    state.country,
    state.language,
    state.date_of_birth,
  );
};

const edit = ref(false);

const emails = [
  {
    email: "arystan@gmail.com",
    time: "1 month ago",
  },
];
</script>

<template>
  <div class="mt-20 flex h-[calc(100vh-80px)] w-full flex-col">
    <div class="flex w-full items-center gap-3 bg-[#514FD5] p-4 text-white">
      <Icon name="lucide:circle-user" class="text-5xl" />
      <div class="flex flex-col gap-1">
        <h4 class="text-lg font-semibold">Welcome {{ "Arystan" }}</h4>
        <span>Tue, 18 FEB 2025</span>
      </div>
    </div>

    <div class="container mx-auto mt-16 space-y-16">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <Icon name="lucide:circle-user" class="text-5xl text-gray-600" />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">{{ "Moldabek Arystan" }}</h4>
            <span class="text-gray-600">{{ "arystan@gmail.com" }}</span>
          </div>
        </div>

        <UiButton variant="primary" @click="edit = !edit">{{
          edit ? "Save" : "Edit"
        }}</UiButton>
      </div>

      <form
        class="grid grid-cols-2 gap-x-8 gap-y-4"
        @submit.prevent="handleSubmit"
      >
        <fieldset>
          <legend>Full Name</legend>
          <UiInput v-model="state.full_name" type="text" :disabled="!edit" />
          <p v-if="errors.full_name" class="mt-1 text-sm text-red-500">
            {{ errors.full_name }}
          </p>
        </fieldset>

        <fieldset>
          <legend>Username</legend>
          <UiInput v-model="state.username" type="text" :disabled="!edit" />
          <p v-if="errors.username" class="mt-1 text-sm text-red-500">
            {{ errors.username }}
          </p>
        </fieldset>

        <fieldset>
          <legend>Gender</legend>
          <UiInput v-model="state.gender" type="text" :disabled="!edit" />
        </fieldset>

        <fieldset>
          <legend>Country</legend>
          <UiInput v-model="state.country" type="text" :disabled="!edit" />
        </fieldset>

        <fieldset>
          <legend>Language</legend>
          <UiInput v-model="state.language" type="text" :disabled="!edit" />
        </fieldset>

        <fieldset>
          <legend>Date of Birth</legend>
          <UiInput
            v-model="state.date_of_birth"
            type="text"
            :disabled="!edit"
          />
        </fieldset>
      </form>

      <div class="space-y-4">
        <h3 class="font-medium">My email Addresses</h3>

        <div
          v-for="(email, index) in emails"
          :key="index"
          class="flex items-center gap-4"
        >
          <div
            class="flex items-center justify-center rounded-full bg-blue-100 p-3"
          >
            <Icon name="lucide:mail" class="text-xl text-[#514FD5]" />
          </div>

          <div class="flex flex-col">
            <span>{{ email.email }}</span>
            <small class="text-gray-600">{{ email.time }}</small>
          </div>
        </div>

        <UiButton variant="soft">Add Email Address</UiButton>
      </div>
    </div>
  </div>
</template>
