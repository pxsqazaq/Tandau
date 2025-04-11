interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
  text: string[];
  to: string;
}

interface FavoriteState {
  favorites: Item[];
}

export const useFavoriteStore = defineStore("favorite", {
  state: (): FavoriteState => ({
    favorites: [],
  }),
  actions: {
    addToFavorites(item: Item) {
      this.favorites.push(item);
    },
    removeFavorite(id: number) {
      this.favorites = this.favorites.filter((item) => item.id !== id);
    },
  },
});
