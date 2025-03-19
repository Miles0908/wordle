<script setup lang="ts">
import { ref,computed } from "vue";
import englishgWords from "../englishWordsWith5Letters.json";
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from "../settings"
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
    guessInProgress.value=  rawValue.slice(0, 5)
  }
})
</script>

<template>
  <input 
  maxlength="5"
   v-model="formattedGuessInProgress" type="text" @keydown.enter="guessSubmitted = guessInProgress">
   <p v-if="guessSubmitted.length > 0" v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"/>

</template>
