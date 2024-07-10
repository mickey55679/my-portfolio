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
test("renders Homepage component", () => {
  const {getByTestId} = render(<App />);
  const homepageElement = getByTestId("homepage")
})
test("renders About component", () => {
  const { getByTestId } = render(<App />);
  const aboutElement = getByTestId("about");
  expect(aboutElement).toBeInTheDocument();
});
test('renders Carousel', () => {
  const {getByTestId} = render(<App />);
  const carouselElement = getByTestId('carousel')
})
test('renders Testimonials', () => {
  const {getByTestId} = render(<App />)
  const testimonialsElement = getByTestId('testimonials')
})
test('renders ContactForm', () => {
  const {getByTestId} = render(<App />)
  const contactFormElement = getByTestId('contactForm')
})
