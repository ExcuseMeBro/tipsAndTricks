<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import useDummyJSON from "../../composables/useDummyJSON";

const target = ref(null);
const items = ref();

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    console.log("Data");
    const { products } = useDummyJSON();
    items.value = products;
  }
});
</script>

<template>
  <div v-for="item in items">
    <pre>{{ item }}</pre>
  </div>
  <div ref="target">
    <h1>Hello world</h1>
  </div>
</template>
