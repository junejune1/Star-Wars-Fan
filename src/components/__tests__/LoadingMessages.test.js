import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingMessages from '../LoadingMessages';

// make sure everything cleaned up after testing
afterEach(() => {
  cleanup();
});

test("should render loading message component", () => {
  render(<LoadingMessages />);
  const buttonElement = screen.getByTestId("loading-message");
  expect(buttonElement).toBeInTheDocument();
  const buttonElement2 = screen.getByTestId("loading-message-button")
  expect(buttonElement2).toBeInTheDocument();
  expect(buttonElement2).toHaveClass("btn btn-warning");
})