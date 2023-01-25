import { render, screen } from "@testing-library/react";
import Header from "./Header";
test("renders Header Test", () => {
  render(<Header />);
  const linkElement = screen.getByTestId("test01");
  expect(linkElement).toBeInTheDocument();
});
