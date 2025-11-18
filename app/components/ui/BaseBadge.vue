<template>
  <div :class="wrapperClasses">
    {{ label }}
  </div>
</template>

<script setup>
const props = defineProps({
  label: { default: "" },
  customClass: { default: "" },
});

const wrapperClasses = computed(() => {
  return [
    "inline-flex items-center bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs font-medium",
    props.customClass,
  ];
});
</script>
