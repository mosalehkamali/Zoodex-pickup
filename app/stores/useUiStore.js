import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    appLoading: true, 
  }),

  actions: {
    showLoader() {
      this.appLoading = true;
    },
    hideLoader() {
      this.appLoading = false;
    }
  }
});
