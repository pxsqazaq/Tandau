import type { University } from "~/types/university";

export const useFavoriteStore = defineStore(
  "favorite",
  () => {
    const favorites = ref<University[]>([]);

    const addToFavorites = (item: University) => {
      favorites.value.push(item);
    };

    const removeFavorite = (id: number) => {
      favorites.value = favorites.value.filter((item) => item.id !== id);
    };

    return {
      favorites,
      addToFavorites,
      removeFavorite,
    };
  },
  { persist: true },
);
