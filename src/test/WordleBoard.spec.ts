
import {mount} from "@vue/test-utils"
import {describe, expect, it, beforeEach, vi} from "vitest"
import WordleBoard from "../components/WordleBoard.vue"
import { VICTORY_MESSAGE , DEFEAT_MESSAGE} from "../settings"


describe("WordleBoard", () => {
  let wordOfTheDay = "TESTS"
  let wrapper: ReturnType<typeof mount>;
  beforeEach(() => {
    wrapper = mount(WordleBoard, {props:{wordOfTheDay}})

  })
  async function playerSubmitGuess(guess: string) {
    const guessInput = wrapper.find("input[type='text']")
    await guessInput.setValue(guess)
    await guessInput.trigger("keydown.enter")
  }
  describe("End of the game messages", () => {
    it("A victory message appear when the user makes a guess that matches the word of the day", async () => {

      await playerSubmitGuess(wordOfTheDay)
      expect(wrapper.text()).toContain(VICTORY_MESSAGE)
    
    })
    it("A defeat message appear when the user makes a guess that matches the word of the day", async () => {
  
      await playerSubmitGuess("WRONG")
      expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  
    })
    it("No end-of-game message appears if the user has not yet made a guess", async () => {
  
      expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
  
      expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
    })
  })

 

  describe("Rules for defining the word of the day", () => {
    it.each([
      {wordOfTheDay: "FLY", reason: 'word of the day must have exactly 5 characters'},
      {wordOfTheDay: "tests", reason: 'word of the day must be in uppercase'},
      {wordOfTheDay: "QWERT", reason: 'word of the day must be a valid English Word'},

    ])
    ("Since $reason:  $wordOfTheDay is invalid, therefore a warning ", async ({wordOfTheDay}) => {
      console.warn = vi.fn()
      mount(WordleBoard, {props:{wordOfTheDay}})
      expect(console.warn).toHaveBeenCalled()
    })
  
    it("no warning are emitted if the word of the day is valid", async () => {
      console.warn = vi.fn()
      mount(WordleBoard, {props:{wordOfTheDay: "TESTS"}})
      expect(console.warn).not.toHaveBeenCalled()
    })
  })
  describe("Player input", () => {
    it.todo("player guesses are limited to 5 characters")
    it.todo("player guesses can only be submitted if they are real English words")
    it.todo("player guesses are not case-sensitive")
    it.todo("player guesses can only contain letters")

  })

 

})