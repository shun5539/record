<script setup lang="ts">
import { ref } from "vue";
import useStore from "./store/index";

const { api } = useStore();
const title = ref("Hello World");
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-for="data in api.data">{{ data.date }}</p>
  </div>
</template>
