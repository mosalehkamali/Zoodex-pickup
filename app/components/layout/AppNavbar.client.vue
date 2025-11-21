<template>
  <div
    class="fixed top-0 w-full bg-white shadow-md z-[10000] overflow-visible lg:overflow-y-auto px-4 py-3 flex justify-between items-center"
  >
    <img src="/zoodex-logo.svg" alt="zoodex-logo" />
    <div class="btns flex justify-center items-center gap-5">
      <div class="">
        <UiBaseBadge
          :label="basketStore.items.length"
          class="absolute top-5 left-30"
        />
        <ShoppingCart />
      </div>
      <div class="auth">
        <p v-if="authStore.isLoggedIn">{{ authStore.user }}</p>
        <UiBaseButton v-else label="ورود" />
      </div>
    </div>
  </div>
  <BasketModal/>
</template>

<script setup>
import { ShoppingCart } from "lucide-vue-next";
import { useBasket } from "~/stores/useBasket";
import { useAuth } from "~/stores/useAuth";
import BasketModal from "../basket/BasketModal.vue";
const basketStore = useBasket();
const authStore = useAuth();
</script>
