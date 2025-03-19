
import {mount} from "@vue/test-utils"
import {describe, expect, it} from "vitest"
import WordleBoard from "../components/WordleBoard.vue"


describe("WordleBoard", () => {
  it("renders properly", () => {
    const wrapper = mount(WordleBoard, {props:{msg:"Hello Vitest"}})
    expect(wrapper.text()).toContain("Hello Vitest")
  })
})