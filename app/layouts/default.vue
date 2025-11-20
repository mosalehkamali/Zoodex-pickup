<template>
     <AppLoader v-if="ui.appLoading" />
  <div
  class="font-koodak">
    <AppNavbar />
    <NuxtPage />
    <LayoutAppFooter/>
  </div>
</template>

<script setup>
import AppNavbar from "~/components/layout/AppNavbar.client.vue";
import AppLoader from "~/components/ui/AppLoader.vue";
import { useUiStore } from "~/stores/useUiStore";
import { useBasket } from "~/stores/useBasket";

const ui = useUiStore();
const basket = useBasket();
const nuxtApp = useNuxtApp()
const isHydrating = ref(true)

onMounted(() => {
  isHydrating.value = nuxtApp.isHydrating
  basket.setItems()
})
</script>
