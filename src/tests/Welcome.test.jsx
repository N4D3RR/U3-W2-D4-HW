import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Welcome from "../components/Welcome"

describe("Testing Welcome mounting", () => {
  it("checks if title is mounted", () => {
    render(<Welcome />)
    const title = screen.getByText(/benvenuti/i) //("Benvenuti in EpiBooks!")
    expect(title).toBeInTheDocument()
  })
})
