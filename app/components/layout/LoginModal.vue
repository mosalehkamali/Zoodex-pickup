<template>
    <transition name="fade">
      <div
        class="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[20000]"
        @click.self="emit('close')"
      >
        <transition name="pop">
          <div
            class="bg-white w-[90%] max-w-[420px] rounded-2xl p-7 shadow-2xl flex flex-col gap-5 relative"
          >
            <h2 class="text-2xl font-bold text-center mb-2">ورود به حساب</h2>
  
            <div class="flex flex-col gap-4">
              <input
                v-model="email"
                type="email"
                placeholder="ایمیل"
                class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-xl px-4 py-3 outline-none transition-all"
              />
  
              <input
                v-model="password"
                type="password"
                placeholder="رمز عبور"
                class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>
  
            <button
              @click="submit"
              class="bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-xl text-lg font-semibold shadow-md cursor-pointer"
            >
              ورود
            </button>
  
            <button
              @click="emit('close')"
              class="text-gray-500 hover:text-gray-700 transition-all text-sm mt-2 cursor-pointer"
            >
              بستن
            </button>
          </div>
        </transition>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['close', 'login'])
  
  const email = ref('')
  const password = ref('')
  
  const submit = () => {
    if (!email.value || !password.value) {
      console.warn('Both fields required')
      return
    }
    emit('login', { email: email.value, password: password.value })
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .pop-enter-active {
    animation: pop-in 0.25s ease forwards;
  }
  .pop-leave-active {
    animation: pop-out 0.2s ease forwards;
  }
  
  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: scale(0.85);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes pop-out {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.85);
    }
  }
  </style>
  