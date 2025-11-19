<template>
    <NuxtLink :to="`/restaurant/${restaurant.id}`" class="m-5 flex flex-col w-80 rounded-2xl overflow-hidden shadow-md bg-white">
      
      <div class="relative w-full h-40">
        <Heart class="text-white absolute top-2 right-2 z-10" />
        <img
        :src="restaurant.image"
        class="w-full h-full object-cover"
        alt="rest-pic"
        />
      </div>
      
      <div class="grid grid-cols-2 gap-2 p-3">
        <h4 class="font-bold text-xl col-span-2">{{ restaurant.name }}</h4>
        
        <div class="text-gray-600">{{ restaurant.category }}</div>
        
        <div class="flex justify-end">
          <baseBadge
          :label="restaurant.rating"
          customClass="bg-gray-200 text-black w-10 h-10 text-base flex items-center justify-center"
          />
        </div>
      </div>
  </NuxtLink>

</template>
<script setup>
import { Heart } from "lucide-vue-next";
import BaseBadge from "../ui/BaseBadge.vue";

const props = defineProps({
  restaurant:{default:{}}
})
</script>
