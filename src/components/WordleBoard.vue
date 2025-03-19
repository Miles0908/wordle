<script setup lang="ts">
import { ref,computed } from "vue";
import englishgWords from "../englishWordsWith5Letters.json";
import { DEFEAT_MESSAGE, VICTORY_MESSAGE, WORD_SIZE } from "../settings"
defineProps({ wordOfTheDay:{
type: String,
validator:  (wordGiven: string) => englishgWords.includes(wordGiven)
}
})



const guessInProgress = ref("")
const guessSubmitted = ref("")
const formattedGuessInProgress = computed({
  get(){
    return guessInProgress.value
  },
  set(rawValue:string){
    guessInProgress.value=  rawValue.slice(0, WORD_SIZE).toUpperCase()
  }
})
function onSubmit(){
  if(!englishgWords.includes(guessInProgress.value)){
  return
  }
  guessSubmitted.value = guessInProgress.value
}
</script>

<template>
  <input 
  maxlength="5"
  v-model="formattedGuessInProgress" type="text" @keydown.enter="onSubmit">
   <p v-if="guessSubmitted.length > 0" v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"/>

</template>
