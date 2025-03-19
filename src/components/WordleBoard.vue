<script setup lang="ts">
import { ref } from "vue";
import englishWords from "../englishWordsWith5Letters.json";
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from "../settings"
import GuessInput from "./GuessInput.vue";

defineProps({ wordOfTheDay:{
type: String,
validator:  (wordGiven: string) => englishWords.includes(wordGiven)
}
})
const guessSubmitted = ref("")




</script>

<template>
  <GuessInput @guess-submitted="(guess: any) => guessSubmitted = guess"/>
  <p v-if="guessSubmitted.length > 0" v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"></p>
  </template>
