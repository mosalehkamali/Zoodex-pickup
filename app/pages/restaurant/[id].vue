<template>
  <div class="mt-[5rem]">
    <RestaurantHeader :id="id"/>
  </div>
</template>
<script setup>
import RestaurantHeader from "~/components/restaurant/RestaurantHeader.vue"
import { useUiStore } from "~/stores/useUiStore";
import { useRestaurants } from "~/stores/useRestaurants";

const route = useRoute()
const id = route.params.id

const store = useRestaurants();
const ui = useUiStore();

onMounted(async () => {
  await store.setSelectedRestaurant(id);
  ui.hideLoader();
});
</script>
