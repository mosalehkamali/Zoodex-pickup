<template>
  <div class="px-5 md:px-18">
    <div class="relative w-full h-50 md:h-80">
      <Heart
        class="text-white absolute md:top-5 top-2 md:right-15 right-2 z-10"
      />
      <img
        :src="restaurant.image"
        class="w-full h-full object-cover rounded-2xl"
        alt="rest-pic"
      />
    </div>
    <div class="info mt-8 grid gap-8 md:gap-0 md:grid-cols-3">
      <div class="flex flex-col gap-3 justify-center items-center">
        <h3 class="text-3xl font-bold text-center">
          {{ restaurant.name }}
        </h3>
        <p class="text-gray-500">● {{ restaurant.category }}</p>
        <p class="text-center">{{ restaurant.description }}</p>
        <span class="flex">
          <MapPinned class="text-blue-800" /> : {{ restaurant.address }}
        </span>
      </div>
      <div
        class="md:h-full md:w-[2px] h-[1px] w-[80%] bg-gray-400 place-self-center"
      ></div>
      <div class="md:pt-5 flex flex-col gap-3 justify-center items-center">
        <UiBaseBadge :label="restaurant.rating" :customClass="bageClass">
          <Star color="yellow" fill="yellow" size="24" />
        </UiBaseBadge>
        <span class="text-gray-500"> از {{ restaurant.ratingCount }} نظر </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Heart, MapPinned } from "lucide-vue-next";
import { Star } from "lucide-vue-next";
const props = defineProps({ id: { type: String } });
const { data } = await useFetch(`/api/restaurants/${props.id}`);

const restaurant = data.value;

const bageClass =
  "h-27 w-27 bg-gray-200 text-3xl font-bold border-dashed border-2 border-gray-400";
</script>
