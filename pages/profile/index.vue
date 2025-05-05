<script setup lang="ts">
import * as z from "zod";

const userStore = useUserStore();

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  gender: z.string(),
  country: z.string(),
  language: z.string(),
  date_of_birth: z.string(),
  profile_picture: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  first_name: userStore.userData.first_name || "First Name",
  last_name: userStore.userData.last_name || "Last Name",
  username: userStore.userData.username || "Username",
  gender: userStore.userData.gender || "Gender",
  country: userStore.userData.country || "Country",
  language: userStore.userData.language || "Language",
  date_of_birth: userStore.userData.date_of_birth || "Date of birth",
  profile_picture: userStore.userData.profile_picture,
});

const errors = reactive<{
  first_name?: string;
  last_name?: string;
  username?: string;
}>({});

const handleSubmit = async () => {
  errors.first_name = undefined;
  errors.last_name = undefined;
  errors.username = undefined;

  const result = schema.safeParse(state);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      if (issue.path[0] === "first_name") errors.first_name = issue.message;
      if (issue.path[0] === "last_name") errors.last_name = issue.message;
      if (issue.path[0] === "username") errors.username = issue.message;
    });
    return;
  }

  await userStore.updateMe(result.data);
};

const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileUpload = () => {
  fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      state.profile_picture = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }
};

const edit = ref(false);
</script>

<template>
  <div class="mt-20 flex h-[calc(100vh-80px)] w-full flex-col">
    <div class="flex w-full items-center gap-3 bg-[#514FD5] p-4 text-white">
      <Icon name="lucide:circle-user" class="text-5xl" />
      <div class="flex flex-col gap-1">
        <h4 class="text-lg font-semibold">
          Welcome {{ userStore.userData.username }}
        </h4>
        <span>Tue, 18 FEB 2025</span>
      </div>
    </div>

    <div class="container mx-auto mt-16 space-y-16">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div
            class="h-18 w-18 group relative flex items-center justify-center overflow-hidden rounded-full border-2"
          >
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleFileUpload"
            />

            <NuxtImg
              v-if="state.profile_picture && edit"
              :src="state.profile_picture"
              width="72"
              height="72"
              alt="Profile"
            />

            <Icon
              v-else
              name="lucide:circle-user"
              class="text-7xl text-gray-600"
            />

            <div
              v-if="edit"
              class="absolute flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] opacity-0 duration-150 group-hover:opacity-100"
              @click="triggerFileUpload"
            >
              <Icon name="lucide:upload" class="text-2xl text-white" />
            </div>
          </div>

          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">
              {{ userStore.userData.first_name || "First Name" }}
              {{ userStore.userData.last_name || "Last Name" }}
            </h4>
            <span class="text-gray-600">{{ userStore.userData.email }}</span>
          </div>
        </div>

        <UiButton :variant="edit ? 'primary' : 'soft'" @click="edit = !edit">
          {{ edit ? "Save" : "Edit" }}
        </UiButton>
      </div>

      <form
        class="grid grid-cols-2 gap-x-8 gap-y-4"
        @submit.prevent="handleSubmit"
      >
        <fieldset>
          <legend>Full Name</legend>
          <div class="flex gap-4">
            <span class="w-full">
              <UiInput
                v-model="state.first_name"
                type="text"
                :disabled="!edit"
                placeholder="First Name"
              />
              <p v-if="errors.first_name" class="mt-1 text-sm text-red-500">
                {{ errors.first_name }}
              </p>
            </span>
            <span class="w-full">
              <UiInput
                v-model="state.last_name"
                type="text"
                :disabled="!edit"
                placeholder="Last Name"
              />
              <p v-if="errors.last_name" class="mt-1 text-sm text-red-500">
                {{ errors.last_name }}
              </p>
            </span>
          </div>
        </fieldset>

        <fieldset>
          <legend>Username</legend>
          <UiInput
            v-model="state.username"
            type="text"
            :disabled="!edit"
            placeholder="Username"
          />
          <p v-if="errors.username" class="mt-1 text-sm text-red-500">
            {{ errors.username }}
          </p>
        </fieldset>

        <fieldset>
          <legend>Gender</legend>
          <UiInput
            v-model="state.gender"
            type="text"
            :disabled="!edit"
            placeholder="Gender"
          />
        </fieldset>

        <fieldset>
          <legend>Country</legend>
          <UiInput
            v-model="state.country"
            type="text"
            :disabled="!edit"
            placeholder="Country"
          />
        </fieldset>

        <fieldset>
          <legend>Language</legend>
          <UiInput
            v-model="state.language"
            type="text"
            :disabled="!edit"
            placeholder="Language"
          />
        </fieldset>

        <fieldset>
          <legend>Date of Birth</legend>
          <UiInput
            v-model="state.date_of_birth"
            type="text"
            :disabled="!edit"
            placeholder="Date of Birth"
          />
        </fieldset>
      </form>

      <div class="space-y-4">
        <h3 class="font-medium">My email Addresses</h3>

        <div class="flex items-center gap-4">
          <div
            class="flex items-center justify-center rounded-full bg-blue-100 p-3"
          >
            <Icon name="lucide:mail" class="text-xl text-[#514FD5]" />
          </div>

          <div class="flex flex-col">
            <span>{{ userStore.userData.email }}</span>
            <small class="text-gray-600">1 month ago</small>
          </div>
        </div>

        <UiButton variant="soft" type="button">Add Email Address</UiButton>
      </div>
    </div>
  </div>
</template>
