import React from "react";
import { render } from "@testing-library/react";
import App from './App'

test("sanity check", () => {
  expect(true).toBe(true);
});
test("renders Navbar component", () => {
  const { getByTestId } = render(<App />);
  const navbarElement = getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();
});
