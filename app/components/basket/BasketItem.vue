<template>
    <div
      class="flex items-center justify-between py-3 md:px-5 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-center gap-3">
        <div class="flex flex-col">
          <p class="font-koodak text-base">{{ item.name }}</p>
          <p class="text-sm text-gray-600">
            {{ (item.price).toLocaleString("fa-IR") }} تومان
          </p>
        </div>
      </div>
  
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md">
          <button
            class="text-lg px-2 cursor-pointer"
            @click="basketStore.decreaseQuantity(item.id)"
          >
            -
          </button>
          <span class="w-6 text-center">{{ item.quantity }}</span>
          <button
            class="text-lg px-2 cursor-pointer"
            @click="basketStore.increaseQuantity(item.id)"
          >
            +
          </button>
        </div>
  
        <button class="text-red-500 text-sm cursor-pointer" @click="basketStore.removeItem(item.id)">
          <Trash2/>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useBasket } from "~/stores/useBasket";
  import { Trash2 } from 'lucide-vue-next';
  
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
  
  const basketStore = useBasket();
  
  </script>
  