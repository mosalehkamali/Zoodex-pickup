<template>
  <footer class="w-full bg-gray-100 border-t border-gray-200 mt-10">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div
        class="flex flex-col gap-8 md:flex-row md:justify-between md:items-start"
      >
        <div class="flex flex-col gap-3">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            Zoodex
          </NuxtLink>
          <p class="text-sm text-gray-600 leading-6">
            زوداکس | سفارش آنلاین غذا و سرویس پیک‌آپ
          </p>
        </div>

        <div class="flex flex-col gap-2 text-sm text-gray-700">
          <NuxtLink to="/" class="hover:text-gray-900 transition"
            >صفحه اصلی</NuxtLink
          >
          <NuxtLink to="/" class="hover:text-gray-900 transition"
            >رستوران‌ها</NuxtLink
          >
          <NuxtLink to="/" class="hover:text-gray-900 transition"
            >درباره ما</NuxtLink
          >
          <NuxtLink to="/" class="hover:text-gray-900 transition"
            >تماس با ما</NuxtLink
          >
        </div>

        <div class="flex items-center gap-4">
          <a href="#" class="text-gray-600 hover:text-gray-900 transition">
            <Youtube size="24" />
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition">
            <Instagram size="24" />
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition">
            <Twitter size="24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Instagram, Twitter, Youtube } from "lucide-vue-next";
</script>
