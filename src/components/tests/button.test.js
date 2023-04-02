import { render, screen } from "@testing-library/react"
import Button from "../button"

test("renders button component", () => {
  render(<Button label="Click Me" handleClick={() => {}} />)
  const buttonElement = screen.getByRole("button")
  expect(buttonElement).toBeInTheDocument();
})
