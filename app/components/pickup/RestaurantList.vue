<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UiBaseSkeletonBox
        v-if="store.loading"
        v-for="n in 6"
        :key="'load' + n"
        class="w-full h-[160px] rounded-xl"
      />
  
      <RestaurantCard
        v-else
        v-for="res in store.filteredRestaurants"
        :key="res.id"
        :restaurant="res"
      />
    </div>
  </template>
  
  <script setup>
  import { useRestaurants } from "~/stores/useRestaurants";
  import RestaurantCard from "./RestaurantCard.vue";
  
  const store = useRestaurants();
  store.fetchRestaurants();
  </script>
  
  