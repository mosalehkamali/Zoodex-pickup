<template>
    <div class="px-[1.5rem] py-[1rem] fixed shadow-md w-full flex justify-between">
        <img src="/zoodex-logo.svg" alt="zoodex-logo">
        <div class="btns flex justify-center items-center gap-5">
            <div class="basket ">
                <ShoppingCart/>
            </div>
            <div class="auth">
                <UiBaseButton label="ورود"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ShoppingCart } from 'lucide-vue-next';
</script>