<template>
  <div>
    <Header :title="title"></Header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: { Header },
  setup() {
    const title = ref("Hello World");
    return { title };
  },
});
</script>
