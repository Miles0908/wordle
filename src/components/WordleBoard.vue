<script setup lang="ts">

defineProps<{ msg: string, wordOfTheDay?: string }>()

</script>

<template>
  <p>{{ msg }}</p>
  <input type="text">
  <!-- <p>{{ wordOfTheDay }}</p> -->
   <p>You've won!</p>
</template>
