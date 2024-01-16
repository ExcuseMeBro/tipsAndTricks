<script setup lang="ts">
import {ref, watch} from "vue";

const msg = ref<string>('Clear me')
const numbers = ref<number[]>([])

// Bad way
// watch(numbers, () => console.log('New numbers'))

// Best way
// ** Using { deep: true } watch non-primitive types **
watch(numbers, () => console.log('New numbers'), {deep: true})

const randomNum = () => numbers.value.push(Math.random())

watch(() => msg.value, (nv, ov) => {
  console.log('New Value: ', nv)
  console.log('Old Value: ', ov)
})
</script>

<template>
  <input type="text" v-model="msg"/>
  <button @click="randomNum">Add random number</button>
</template>

<style scoped>

</style>