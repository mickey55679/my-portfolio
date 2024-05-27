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
  const homePageHeading = screen.getByText(/Welcome to my website!/i);
  expect(homePageHeading).toBeInTheDocument();
});
test("Clicking the About button will show the About Me page", () => {
  render(<App />);
  //define the button
  const aboutButton = screen.getByRole("link", { name: /About Me/i });
  // simulate a click on the about button
  fireEvent.click(aboutButton);
  //Assert that the about page content is visible on the screen
  const aboutPageHeading = screen.getByText(/Michaiah Bos/i);
  expect(aboutPageHeading).toBeInTheDocument();
});
test("Clicking the contact button will show the contact page", () => {
  render(<App />);

  // Find the contact link and click it
  const contactButton = screen.getByRole("link", { name: /contact/i });
  fireEvent.click(contactButton);

  // Assert that the contact form is shown
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});

test("Clicking the logo will bring the user back to the home page", () => {
  render(<App />);

  // Simulate clicking on the logo
  const logoLink = screen.getByRole("link", { name: /logo/i });
  fireEvent.click(logoLink);

  // Assert that you are back on the home page by checking for the "Home" link,
  // assuming "Home" is visible only when you are on the home page or is styled differently when active.
  expect(screen.getByText("Home")).toBeInTheDocument();
});