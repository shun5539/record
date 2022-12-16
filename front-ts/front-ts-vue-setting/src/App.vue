<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";

const title = ref("Hello World");
</script>

<template>
  <div>
    <Header :title="title"></Header>
  </div>
</template>
