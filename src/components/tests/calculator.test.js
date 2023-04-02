import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../Calculator";

describe("Calculator component", () => {
  test("renders output screen and buttons", async () => {
    const calculatorKeys = [
      ["AC", "Delete", "%", "/"],
      ["7", "8", "9", "*"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "="],
    ];

    render(<Calculator />);

    // Output screen
    const outputScreen = screen.getByTestId("screen");
    expect(outputScreen).toBeInTheDocument();

    // Calculator buttons
    for (const row of calculatorKeys) {
      for (const digit of row) {
        const button = screen.getAllByTestId("btn-input");
        expect(button[0]).toBeInTheDocument();
        userEvent.click(button[0]);
      }
    }
  });
});
