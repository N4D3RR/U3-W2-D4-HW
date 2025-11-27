import { render, screen } from "@testing-library/react"
import BookList from "../components/BookList"
import fantasy from "../data/fantasy.json"
import { describe, expect, it } from "vitest"

describe("Testing correct rendering of book cards", () => {
  it("checks if it renders correct amount of cards", () => {
    render(<BookList books={fantasy} />)
    const books = screen.getAllByRole("img")
    expect(books.length).toBe(fantasy.length)
  })
})
