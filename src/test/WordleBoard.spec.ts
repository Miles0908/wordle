
import {mount} from "@vue/test-utils"
import {describe, expect, it, beforeEach} from "vitest"
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