<script setup lang="ts">
import { ref } from "vue";
import englishWords from "../englishWordsWith5Letters.json";
import { DEFEAT_MESSAGE, VICTORY_MESSAGE, WORD_SIZE } from "../settings"

defineProps({ wordOfTheDay:{
type: String,
validator:  (wordGiven: string) => englishWords.includes(wordGiven)
}
})
const guessInProgress = ref("")
const guessSubmitted = ref("")

function onInput(event: Event): void {
const target = event.target as HTMLInputElement
const value = target.value
guessInProgress.value = value
.slice(0, WORD_SIZE)
.toUpperCase()
.replace(/[^A-Z]+/gi, "")
}

function onSubmit() {
console.log("Submitted guess:", guessInProgress.value)
if (!englishWords.includes(guessInProgress.value)) {
return
}
guessSubmitted.value = guessInProgress.value
}
</script>

<template>
  <input :maxlength="WORD_SIZE" v-model="guessInProgress" @input="onInput" @keydown.enter="onSubmit" type="text">
  <p v-if="guessSubmitted.length > 0" v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"></p>
  </template>
