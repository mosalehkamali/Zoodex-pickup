<template>
    <div :class="wrapperClasses" :style="wrapperStyle"></div>
  </template>
  
  <script setup>
  const props = defineProps({
    width: { type: String, default: null },
    height: { type: String, default: null },
    radius: { type: String, default: "8px" },
    circle: { type: Boolean, default: false },
    animated: { type: Boolean, default: true },
    class: { type: String, default: "" },
  })
  
  const wrapperClasses = computed(() => {
    return [
      "bg-gray-700 dark:bg-stone-300",
      props.animated ? "animate-pulse" : "",
      props.class,
    ]
  })
  
  const wrapperStyle = computed(() => {
    const style = {}
  
    if (props.width) style.width = props.width
    if (props.height) style.height = props.height
  
    if (props.circle) {
      style.borderRadius = "50%"
    } else {
      style.borderRadius = props.radius
    }
  
    return style
  })
  </script>
  