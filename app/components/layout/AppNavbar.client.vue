<template>
  <div
    class="fixed top-0 w-full bg-white shadow-md z-[10000] overflow-visible lg:overflow-y-auto px-4 py-3 flex justify-between items-center"
  >
    <NuxtLink to="/">
      <img src="/zoodex-logo.svg" alt="zoodex-logo" />
    </NuxtLink>
    <div class="btns flex justify-center items-center gap-5">
      <div @click="toggleBasketVisibility" class="cursor-pointer relative">
        <ShoppingCart />
        <UiBaseBadge
          :label="basketStore.items.length"
          class="absolute bottom-3 left-3"
        />
      </div>
      <div class="auth">
        <p v-if="authStore.isLoggedIn">{{ authStore.user }}</p>
        <UiBaseButton
          class="cursor-pointer"
          @click="showLogin = true"
          v-else
          label="ورود"
        />
      </div>
    </div>
  </div>

  <BasketModal
    @closeModal="isHideBasket = true"
    :class="[
      isHideBasket ? hideBasketClass : showBasketClass,
      ' duration-300 ease-in-out',
    ]"
  />
  <LoginModal
    v-if="showLogin"
    @close="showLogin = false"
    @login="handleLogin"
  />
</template>

<script setup>
import { ShoppingCart, CircleUserRound } from "lucide-vue-next";
import { useBasket } from "~/stores/useBasket";
import { useAuth } from "~/stores/useAuth";
import BasketModal from "../basket/BasketModal.vue";
import LoginModal from "./LoginModal.vue";

const basketStore = useBasket();
const authStore = useAuth();

const isHideBasket = ref(true);
const hideBasketClass = "left-[-100vw]";
const showBasketClass = "left-0";

const toggleBasketVisibility = () => {
  isHideBasket.value = !isHideBasket.value;
};

const showLogin = ref(false);

const handleLogin = (data) => {
  authStore.login(data.email, data.password);
  console.log([data.email, data.password]);

  showLogin.value = false;
};
</script>
