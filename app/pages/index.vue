<template>
 <div class="lg:h-screen grid grid-cols-1 lg:grid-cols-[60%_40%]">
     <div class="overflow-visible lg:overflow-y-auto lg:h-screen">
        <RestaurantList/>
     </div>
  <div class="h-auto lg:sticky lg:top-0 lg:h-screen"></div>
 </div>
  
</template>

<script setup>
import RestaurantList from '~/components/pickup/RestaurantList.vue';
</script>
