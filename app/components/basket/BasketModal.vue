<template>
  <div
    class="fixed z-[9999] top-[4rem] bg-[#fff] h-screen w-[70vw] md:w-[30vw] p-3 pt-5 shadow-md"
  >
    <div v-if="items.length" class="h-screen">
      <div class="flex-1 overflow-y-auto pr-1 h-[60%] overflow-hidden">
        <div>
          <BasketItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
          />
        </div>
      </div>
        <div class="">
          <div>
            <p class="text-gray-400">مبلغ قابل پرداخت:</p>
            <span class="text-xl font-bold">{{ totalPrice.toLocaleString("fa-IR") }}</span>
          </div>
          <UiBaseBadge label="پرداخـــــت" class="text-[18px] font-bold py-3 px-8 cursor-pointer"/>
        </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center h-[80%]">
      <ShoppingBasket size="80" class="text-[#f0b100]" />
      <span class="text-2xl font-bold text-blue-800">سبد خرید شما خالیست</span>
    </div>
  </div>
</template>

<script setup>
import BasketItem from "./BasketItem.vue";
import { ShoppingBasket } from "lucide-vue-next";

const basket = useBasket();
const items = reactive(basket.items);

const totalPrice = ref(basket.totalPrice);

watch(items, () => {
  totalPrice.value = basket.totalPrice;
});
</script>
