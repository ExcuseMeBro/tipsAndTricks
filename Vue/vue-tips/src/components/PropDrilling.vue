<script setup>
// ** STOP using PROP DRILLING (use Provide/inject or Global State (pinia, vuex, etc...))
</script>
<template>
  <div :class="{ 'red': isError, 'text-bold': isActive }"></div>
</template>
<style scoped></style>