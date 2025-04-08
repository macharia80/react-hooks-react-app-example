// src/__tests__/App.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  // Check that the dynamically formatted date is NOT in the DOM
  expect(
    screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
  ).not.toBeInTheDocument();

  // Check that "Now" IS in the DOM
  expect(screen.queryByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  // Check that "Whoa!" (rendered by ExampleComponent) is in the DOM
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  // Check that an element with title="time video" is in the DOM
  expect(screen.queryByTitle("time video")).toBeInTheDocument();
});