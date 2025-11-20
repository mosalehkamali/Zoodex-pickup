<template>
    <p class="text-2xl pr-5 mt-10 font-bold">منو مجموعه</p>
    <div class="grid mt-5 p-3 md:grid-cols-2 gap-5">
        <MenuItem
            v-for="item in menu"
            :key="item.id"
            :food="item"
        />

    </div>
</template>
<script setup>
import MenuItem from './MenuItem.vue';
const props = defineProps({menu:{}})

const menu = props.menu

</script>