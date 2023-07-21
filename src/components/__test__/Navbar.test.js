import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('should render a component', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    // Use toMatchSnapshot() to create or compare snapshots
    expect(container).toMatchSnapshot();
  });
});
