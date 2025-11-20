<template>
  <button :class="btnClass">
    {{ label }}
    <slot/>
  </button>
</template>
<script setup>
const props = defineProps({
  label: { default: "" },
  class: { default: "" },
});

const btnClass = [
  "rounded-full shadow-md py-2 px-5 text-black",
  props.class,
];
</script>
