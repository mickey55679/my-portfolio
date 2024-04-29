import { render, screen, fireEvent } from "@testing-library/react";
import { About } from "./Components";
import App from "./App";

test("sanity test", () => {
  render(<App />);
  const headingElement = screen.getByText(/Michaiah Bos/i);
  expect(headingElement).toBeInTheDocument();
});
test("clicking the home button will show the home page", () => {
  render(<App />);

  const homeButton = screen.getByRole("link", { name: /Home/i });

  // Simulate a click on the home button
  fireEvent.click(homeButton);

  // Assert that the home page content is visible on the screen
  const homePageHeading = screen.getByText(/My name is Michaiah, it is nice to meet you!/i);
  expect(homePageHeading).toBeInTheDocument();
});
test("clicking the about button will show the about page", () => {
  render(<About />)
});
