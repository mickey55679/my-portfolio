import { render, screen, fireEvent } from "@testing-library/react";
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
 const homePageHeading = screen.getByText(/Welcome to My Website!/i);
 expect(homePageHeading).toBeInTheDocument();
});