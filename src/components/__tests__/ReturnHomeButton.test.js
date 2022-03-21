import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReturnHomeButton from '../ReturnHomeButton';

// make sure everything cleaned up after testing
afterEach(() => {
  cleanup();
});

test("should render return back to home component", () => {
  const result = render(<ReturnHomeButton />);
  const buttonElement = result.container.querySelector('#btn-click');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("btn btn-warning btn-outline-dark");
  expect(buttonElement).toHaveTextContent("Return Home")
})