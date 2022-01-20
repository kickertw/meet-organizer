import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestComponent from './TestComponent';

describe('<TestComponent />', () => {
  test('it should mount', () => {
    render(<TestComponent />);
    
    const testComponent = screen.getByTestId('TestComponent');

    expect(testComponent).toBeInTheDocument();
  });
});