import React, {useState} from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../SearchBar';

afterEach(() => {
  cleanup();
});


test('it should render SearchBar Component', () => {


  const result = render (
     <SearchBar />
    );

 const element = result.getByTestId('search-bar');

  expect(element).toHaveClass('btn btn-warning btn-outline-dark');
  expect(element).toHaveTextContent("Search Characters");
})