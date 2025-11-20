<template>

<div class="flex gap-3 border-1 border-gray-200 rounded-2xl">
    <div class="w-30 h-30">
      <img
        :src="food.image"
        class="w-full h-full object-cover rounded-r-lg"
        alt="rest-pic"
      />
    </div>
    <div class="p-2 w-[100%]">
        <p class="text-[18px] font-bold">{{ food.name }}</p>
        <p class="text-gray-600">{{ food.description }}</p>
        <div class="flex items-center justify-between">
            <span class="font-bold">{{ (food.price).toLocaleString("fa-IR") }} تومان</span>
            <UiBaseBadge @click="basket.addItem(food)" class="w-15 h-15 bg-white border-1 border-gray-300 cursor-pointer" >
                <Plus class="text-blue-700"/>
            </UiBaseBadge>
        </div>
    </div>
</div>

</template>

<script setup>

import { useBasket } from '~/stores/useBasket';
import { Plus } from 'lucide-vue-next';

const props = defineProps({food:{}})
const food = props.food

const basket= useBasket()

</script>