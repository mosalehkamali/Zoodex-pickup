<template>
  <div class="lg:h-screen mt-[5rem] flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-[60%_40%]">
    <div class="overflow-visible lg:overflow-y-auto lg:h-screen">
      <CategorySlider />
      <RestaurantList />
    </div>
    <div class="h-[60vh] lg:h-auto lg:sticky lg:top-0 lg:h-screen">
      <PickupMap />
    </div>
  </div>
</template>

<script setup>
import RestaurantList from "~/components/pickup/RestaurantList.vue";
import CategorySlider from "~/components/pickup/CategorySlider.vue";
import PickupMap from "~/components/pickup/PickupMap.client.vue";
import { useRestaurants } from "~/stores/useRestaurants";
import { useUiStore } from "~/stores/useUiStore";

const store = useRestaurants();
const ui = useUiStore();

onMounted(async () => {
  await store.fetchRestaurants();
  ui.hideLoader();
});
</script>
