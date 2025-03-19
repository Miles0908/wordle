
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

  it("if a word of the day provided does not have exactly 5 letters, a waring message appears", async () => {
    console.warn = vi.fn()
    mount(WordleBoard, {props:{wordOfTheDay: "FLY"}})
    expect(console.warn).toHaveBeenCalled()
  })
  it("if a word of the day is not all in uppercase, a warning message appears", async () => {
    console.warn = vi.fn()
    mount(WordleBoard, {props:{wordOfTheDay: "tests"}})
    expect(console.warn).toHaveBeenCalled()
  })
  it("if a word of the day is not a real English word, a warning message appears", async () => {
    console.warn = vi.fn()
    mount(WordleBoard, {props:{wordOfTheDay: "QWERT"}})
    expect(console.warn).toHaveBeenCalled()
  })

  it("no warning are emitted if the word of the day is valid", async () => {
    console.warn = vi.fn()
    mount(WordleBoard, {props:{wordOfTheDay: "TESTS"}})
    expect(console.warn).not.toHaveBeenCalled()
  })

})