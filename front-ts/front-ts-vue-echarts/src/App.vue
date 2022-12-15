<script setup lang="ts">
import { ref } from "vue";
import Chart from "./components/chart.vue";
const title = ref("Hello World");
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <Suspense>
      <Chart />
    </Suspense>
  </div>
</template>
