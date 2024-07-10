import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App'

test("sanity check", () => {
  expect(true).toBe(true);
});
test("renders App component", () => {
  render(<App />);
})
