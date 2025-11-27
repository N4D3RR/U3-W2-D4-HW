import { render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea"
import { describe, expect, it } from "vitest"

describe("Testing correct rendering of Comment Area", () => {
  it("checks if it renders CommentList correctly ", () => {
    render(<CommentArea asin={1234} />)
    const commentList = screen.getByTestId("comment-list")
    expect(commentList).toBeInTheDocument()
  })
  it("checks if it renders input area correctly ", () => {
    render(<CommentArea asin={1234} />)
    const input = screen.getByPlaceholderText(/inserisci/i)
    expect(input).toBeInTheDocument()
  })
  it("checks if it renders loading correctly", () => {
    render(<CommentArea asin={1234} />)
    const spinner = screen.getByTestId("loading-spinner")
    expect(spinner).toBeInTheDocument()
  })
})
