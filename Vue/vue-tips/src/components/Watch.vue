<script setup lang="ts">
import {ref, watch} from "vue";

const numbers = ref<number[]>([])

// Bad way
// watch(numbers, () => console.log('New numbers'))

// Best way
// ** Using { deep: true } watch non-primitive types **
watch(numbers, () => console.log('New numbers'), {deep: true})

const randomNum = () => numbers.value.push(Math.random())
</script>

<template>
  <button @click="randomNum">Add random number</button>
</template>

<style scoped>

</style>