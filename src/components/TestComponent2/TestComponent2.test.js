import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestComponent2 from './TestComponent2';

describe('<TestComponent2 />', () => {
  test('it should mount', () => {
    render(<TestComponent2 />);
    
    const testComponent2 = screen.getByTestId('TestComponent2');

    expect(testComponent2).toBeInTheDocument();
  });
});