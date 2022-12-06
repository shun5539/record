<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button @click="changeName('TypeScript')">click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  setup() {
    const name = ref("JavaScript");
    return { name };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
</script>
