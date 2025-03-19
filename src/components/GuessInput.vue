<script setup lang="ts">
import { ref } from "vue";
import englishWords from "../englishWordsWith5Letters.json";
import { WORD_SIZE } from "../settings"

const guessInProgress = ref("")
const emit= defineEmits<{
    "guess-submitted": [guess:string]
}>()

function onInput(event: Event): void {
const target = event.target as HTMLInputElement
const value = target.value
guessInProgress.value = value
.slice(0, WORD_SIZE)
.toUpperCase()
.replace(/[^A-Z]+/gi, "")
}

function onSubmit() {
if (!englishWords.includes(guessInProgress.value)) {
return
}
emit("guess-submitted", guessInProgress.value)
}
</script>

<template>
  <input :maxlength="WORD_SIZE" v-model="guessInProgress" @input="onInput" @keydown.enter="onSubmit" type="text">
</template>
