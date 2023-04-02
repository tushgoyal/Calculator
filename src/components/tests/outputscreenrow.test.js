import { render, screen } from "@testing-library/react";
import OutputScreenRow from "../OutputScreenRow";

test("render output screen row", () => {
  render(<OutputScreenRow value={"1"} />);
  const outputScreenRow = screen.getByTestId("screen-row");
  expect(outputScreenRow).toBeInTheDocument();
  const inputEle = screen.getByTestId("input-text");
  expect(inputEle).toHaveValue("1");
});
