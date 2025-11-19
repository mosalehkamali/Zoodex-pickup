<template>
  <div :class="wrapperClasses">
    {{ label }}
  </div>
</template>

<script setup>
const props = defineProps({
  label: { default: "" },
  customClass: { default: "bg-emerald-500 text-white text-xs" },
});

const wrapperClasses = computed(() => {
  return [
    "inline-flex items-center rounded-full px-2 py-0.5 justify-center align-center",
    props.customClass,
  ];
});
</script>
