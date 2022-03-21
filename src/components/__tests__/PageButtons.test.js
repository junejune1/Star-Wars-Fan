import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageButtons from '../PageButtons';
import userEvent from "@testing-library/user-event";


// make sure everything cleaned up after testing
afterEach(() => {
  cleanup();
});

test("should render Buttons component - previous or next button", () => {
  const changePage = ["Previous", "Next"];
  render(<PageButtons changePage={changePage[1]}/>);
  const buttonElement = screen.getByTestId("page-Next");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Next");
  expect(buttonElement).not.toContainHTML('<div>')
});

test("should render Buttons component - 1 to 9 button", () => {
  const changePage = [1,2,3,4,5,6,7,8,9];
  render(<PageButtons changePage={changePage[6]}/>);
  const buttonElement = screen.getByTestId("page-7");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("7");
});


