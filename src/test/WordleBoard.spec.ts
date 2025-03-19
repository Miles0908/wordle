
import {mount} from "@vue/test-utils"
import {describe, expect, it} from "vitest"
import WordleBoard from "../components/WordleBoard.vue"
import { VICTORY_MESSAGE } from "../settings"


describe("WordleBoard", () => {
  it("renders properly", () => {
    const wrapper = mount(WordleBoard, {props:{msg:"Hello Vitest"}})
    expect(wrapper.text()).toContain("Hello Vitest")
  })
  it("A victory message appear when the user makes a guess that matches the word of the day", async () => {
    const wrapper = mount(WordleBoard, {props:{wordOfTheDay:"TESTS"}})
    const guessInput = wrapper.find("input[type='text']")
    await guessInput.setValue("TESTS")
    await guessInput.trigger("keydown.enter")


    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
})