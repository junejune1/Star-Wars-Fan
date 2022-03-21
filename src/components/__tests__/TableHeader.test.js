import React from 'react';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableHeader from '../TableHeader';

afterEach(() => {
  cleanup();
});


test('it should render TableHeader component', () => {

  const result = render (
      <table>
        <TableHeader />
      </table>
    );

  expect(result.getByTestId('table-header')).toHaveClass('table-warning');

})