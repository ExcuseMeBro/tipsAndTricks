<script setup>
import { ref, computed } from 'vue'

const msg = ref('Hello World!')

const test = computed(() => {
  return (param) => msg.value + param
})

const cNow = computed(() => {
  return Date.now()
})

const fnNow = () => {
  return Date.now()
}

function taste() {
  console.log(cNow.value)
  console.log(fnNow())
}

const a = ref(1);
const b = computed({
  get: () => a.value + 1,
  set: (v) => (a.value = v - 1),
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <p>{{ test('very amazing') }}</p>
  <button @click="taste()">Computed very taste</button>
  <hr>
  <p>a={{ a }} b={{ b }}</p>
  <button @click="b = 3">Click me</button>
</template>