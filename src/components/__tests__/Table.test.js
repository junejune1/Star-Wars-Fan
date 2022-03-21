import React, {useState} from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from '../Table';

afterEach(() => {
  cleanup();
});


test('it should render Table Component', () => {


  const result = render (
     <Table />
    );

 const element = result.getByTestId('table-display');

  expect(element).toHaveClass('table table-dark table-striped margin-top table-hover shadows');
})