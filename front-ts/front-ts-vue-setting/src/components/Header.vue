<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});
const name = ref("JavaScript");

const changeName = (word: string) => {
  name.value = word;
};
</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
    <p>{{ name }}</p>
    <button @click="changeName('TypeScript')">click</button>
  </div>
</template>
