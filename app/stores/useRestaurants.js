import { defineStore } from "pinia";

export const useRestaurants = defineStore("restaurants", {
  state: () => ({
    restaurants: [],
    selectedRestaurant: null,
    selectedCategory: "",
    loading: false,
    error: null,
  }),
  actions: {
    async fetchRestaurants() {
      this.loading = true;
      if (this.restaurants.length > 0) {
        this.loading = false;
        this.error = null;
        return;
      }
      try {
        const data = await $fetch("/api/restaurants");
        this.restaurants = data;
        this.error = null;
      } catch {
        this.error = "مشکلی پیش آمده، دوباره تلاش کنید";
      }
      this.loading = false;
    },

    setSelectedRestaurant(id) {
      const restaurant = this.restaurants.find((item) => item.id === id);
      if (restaurant) {
        this.selectedRestaurant = restaurant;
      } else {
        this.selectedRestaurant = null
        this.error = "مشکلی پیش آمده، دوباره تلاش کنید";
      }
    },

    setCategory(category) {
      this.selectedCategory = category;
      this.error = null
    },
  },

  getters: {
    filteredRestaurants() {
      if (this.selectedCategory) {
        const filteredRestaurants = this.restaurants.filter(
          (item) => item.category === this.selectedCategory
        );
        return filteredRestaurants;
      } else {
        return this.restaurants;
      }
    },

    getRestaurantById: (state) => {
      return (id) => state.restaurants.find((item) => item.id === id) || null
    }
  },
});
