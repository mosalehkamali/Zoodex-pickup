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

const ui = useUiStore();


</script>
