import { render, screen } from "@testing-library/react";
import HomePage from "../home/index.js";

test("renders learn react link", () => {
  render(<HomePage />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
