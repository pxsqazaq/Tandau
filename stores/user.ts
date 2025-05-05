import type { SignInDTO, signInResponse, SignUpDTO } from "~/types/auth";
import type { UpdateUserDTO, User } from "~/types/user";

export const useUserStore = defineStore("user", () => {
  const { $userService } = useNuxtApp();

  const token: Ref<string | null> = ref(null);
  const isAuthenticated = ref(!!useCookie("access_token").value);

  const userData: Ref<User> = ref({
    id: 0,
    email: "",
    username: "",
    gender: "",
    first_name: "",
    last_name: "",
    country: "",
    language: "",
    date_of_birth: "",
    profile_picture: "",
  });

  const errorMessage: { message: string | null } = reactive({ message: null });

  const signUp = async (payload: SignUpDTO) => {
    try {
      const data = await $userService.signUp(payload);

      // console.log("data", data);

      const router = useRouter();
      router.push({ path: "/sign-in" });

      return data;
    } catch (error) {
      errorMessage.message = "Sign-up failed. Please try again.";
      console.log("Error while sign up:", error);
    }
  };

  const signIn = async (payload: SignInDTO) => {
    try {
      const data = await $userService.signIn(payload);

      if (!data.access_token) return;

      setUserData(data);

      if (isAuthenticated.value) {
        const router = useRouter();
        router.push({ path: "/" });
      }
    } catch (error) {
      errorMessage.message = "Sign-in failed. Please try again.";
      console.log("Error while sign in:", error);
    }
  };

  const signOut = async () => {
    try {
      await $userService.signOut();
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      isAuthenticated.value = false;
      userData.value = {
        id: 0,
        email: "",
        username: "",
        gender: "",
        first_name: "",
        last_name: "",
        country: "",
        language: "",
        date_of_birth: "",
        profile_picture: "",
      };
      useCookie("access_token").value = null;
      const router = useRouter();
      await router.push({ path: "/sign-in" });
    }
  };

  const getMe = async () => {
    const data = await $userService.getMe();

    return data;
  };

  const updateMe = async (payload: UpdateUserDTO) => {
    const data = await $userService.updateMe(payload);

    return data;
  };

  const setUserData = (payload: signInResponse) => {
    if (!payload.access_token) return;

    isAuthenticated.value = true;
    userData.value = payload.user;
    useCookie("access_token").value = payload.access_token;
    useCookie("refresh_token").value = payload.refresh_token;
  };

  const initUser = async () => {
    const access_token = useCookie("access_token").value;
    const refresh_token = useCookie("refresh_token").value;

    if (access_token && refresh_token) {
      isAuthenticated.value = true;

      try {
        const user = await getMe();
        setUserData({ access_token, refresh_token, user });

        console.log("user", user);
      } catch (error) {
        isAuthenticated.value = false;
        useCookie("access_token").value = null;
        useCookie("refresh_token").value = null;
        errorMessage.message = "Initializing user is failed. Please try again.";
        console.log("Error while init User:", error);
      }
    }
  };

  return {
    token,
    isAuthenticated,
    userData,
    errorMessage,
    signUp,
    signIn,
    signOut,
    updateMe,
    initUser,
  };
});
