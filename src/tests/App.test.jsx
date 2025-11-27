import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "../App.jsx"

describe("Testing absence of Single Comment", () => {
  it("doesn't render SingleComment", () => {
    render(<App />)
    const comments = screen.queryAllByTestId("comment-list")
    expect(comments.length).toBe(0)
  })
})
