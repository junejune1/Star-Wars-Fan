import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

// make sure everything cleaned up after testing
afterEach(() => {
  cleanup();
});

test("should render header component", () => {
  render(<Header />);
  const buttonElement = screen.getByTestId("header-p-1");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Star Wars");
})