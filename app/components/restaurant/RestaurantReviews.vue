<template>
  <p class="text-2xl pr-5 mt-10 font-bold">نظرات</p>
  <div class="w-full flex justify-center gap-3">
    <input
    @keydown.enter="addComment"
      type="text"
      v-model="text"
      class="bg-gray-300 w-[60%] px-5 py-2 rounded-xl"
      placeholder="نظر خود را وارد کنید"
    />
    <UiBaseBadge @click="addComment">
        <SendHorizontal class="rotate-180 cursor-pointer"/>
    </UiBaseBadge>
  </div>
  <div class="grid mt-5 md:px-[10rem] md:grid-cols-2 gap-x-10">
    <div
      class="border-1 border-gray-200 p-3 rounded-2xl"
      v-for="(comment,index) in comments"
      :key="index"
    >
      <div class="flex items-center gap-3">
        <CircleUserRound size="50" class="text-gray-500" />
        <p class="font-bold">{{ comment.user }}</p>
      </div>
      <div class="flex pr-5 items-center gap-3">
        <UiBaseBadge :label="comment.rating">
          <Star color="yellow" fill="yellow" size="12" />
        </UiBaseBadge>
        <p class="text-gray-500">{{ comment.time }}</p>
      </div>
      <p class="pr-5">
        {{ comment.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { CircleUserRound, Star,SendHorizontal } from "lucide-vue-next";

const props = defineProps({ comments: { default: [] } });
const comments = reactive(props.comments);
const text = ref("");

const addComment = ()=>{
    if (!text.value) return 
    const content=  {
        id: "c1_rest_3",
        user: "کاربر ناشناس",
        text: text.value,
        rating: 4,
        time: "2025-11-01"
      }
      comments.unshift(content)
      text.value = ""
}
</script>
