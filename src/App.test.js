import { render, screen } from "@testing-library/react";
import App from "./App";
import { Form } from "./components/Form";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("renders Header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Style Guide/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders StyleGuide", () => {
  render(<App />);
  const styleGuideElement = screen.getByText(/Heading 1/i);
  expect(styleGuideElement).toBeInTheDocument();
});

test("fills out the form and submits", () => {
  render(<Form />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const ageInput = screen.getByLabelText(/Age/i);
  const phoneInput = screen.getByLabelText(/Phone/i);
  const passwordInput = screen.getByLabelText(/Password/i);

  const submitButton = screen.getByText(/Submit/i);

  firstNameInput.value = "Test";
  lastNameInput.value = "Test";
  emailInput.value = "test@test.com";
  ageInput.value = "30";
  phoneInput.value = "123-456-7890";
  passwordInput.value = "password";

  submitButton.click();
});
