<script setup lang="ts">
import { VICTORY_MESSAGE } from "../settings"
defineProps<{ msg: string, wordOfTheDay?: string }>()

</script>

<template>
  <p>{{ msg }}</p>
  <input type="text">
  <!-- <p>{{ wordOfTheDay }}</p> -->
   <p>{{ VICTORY_MESSAGE }}</p>
</template>
