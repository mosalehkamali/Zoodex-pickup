<template>
  <div class="grid grid-cols-4 md:grid-cols-8">

    <div
      v-for="(value, key) in categorys"
      :key="key"
      @click="store.setCategory(value)"
      class="flex flex-col justify-center items-center"
    >
      <img
        :src="`/images/category/${key}.png`"
        class="size-20 object-contain"
        alt="category-pic"
      />
      <span>{{ value }}</span>
    </div>
  </div>
  
</template>
<script setup>
import { useRestaurants } from "~/stores/useRestaurants";
const store = useRestaurants();
console.log(store.loading);

const categorys = {
  Asian: "آسیایی",
  Burgers: "برگر",
  Coffee: "قهوه",
  Dessert: "دسر",
  Fastfood: "فست‌فود",
  Iranian: "ایرانی",
  Pizza: "پیتزا",
  Sandwich: "ساندویچ",
};
</script>
