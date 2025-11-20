<template>
  <div class="mt-[5rem] md:px-18 px-5">
    <RestaurantHeader :restaurant="restaurant"/>
    <MenuList :menu="restaurant.menu"/>
    <RestaurantReviews :comments="restaurant.comments"/>
  </div>
</template>

<script setup>
import RestaurantHeader from "~/components/restaurant/RestaurantHeader.vue"
import MenuList from "~/components/restaurant/MenuList.vue"
import RestaurantReviews from "~/components/restaurant/RestaurantReviews.vue"
import { useUiStore } from "~/stores/useUiStore";
import { useRestaurants } from "~/stores/useRestaurants";

const route = useRoute()
const id = route.params.id

const store = useRestaurants();
const ui = useUiStore();
const { data } = await useFetch(`/api/restaurants/${id}`);

const restaurant = data.value;


onMounted(async () => {
  await store.setSelectedRestaurant(id);
  ui.hideLoader();
});
</script>
