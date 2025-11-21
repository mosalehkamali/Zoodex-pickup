// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css", "leaflet/dist/leaflet.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@pinia/nuxt"],

  app: {
    head: {
      title: "Zoodex - Pickup",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
    },
  },
});
