import userService from "~/service/userService";
import chatService from "~/service/chatService";
import universityService from "~/service/universityService";
import subjectService from "~/service/subjectService";
import specialityService from "~/service/specialityService";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const api = $fetch.create({
    baseURL,
    onRequest({ options }) {
      const access_token = useCookie("access_token").value;
      // const refresh_token = useCookie("refresh_token").value;
      const headers = options.headers || {};

      if (access_token) {
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer ${access_token}`]);
        } else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer ${access_token}`);
        } else {
          (headers as Record<string, string>).Authorization =
            `Bearer ${access_token}`;
        }
      }

      // if (refresh_token) {
      //   if (Array.isArray(headers)) {
      //     headers.push(["Authorization", `Bearer ${refresh_token}`]);
      //   } else if (headers instanceof Headers) {
      //     headers.set("Authorization", `Bearer ${refresh_token}`);
      //   } else {
      //     (headers as Record<string, string>).Authorization =
      //       `Bearer ${refresh_token}`;
      //   }
      // }

      options.headers = headers;
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        const userStore = useUserStore();
        await userStore.signOut();
        await nuxtApp.runWithContext(() => navigateTo("/sign-in"));
      }
    },

    async onRequestError({ error }) {
      console.error("Request error", error);
    },
  });

  return {
    provide: {
      api,
      userService: userService(api),
      chatService: chatService(api),
      universityService: universityService(api),
      subjectService: subjectService(api),
      specialityService: specialityService(api),
    },
  };
});
