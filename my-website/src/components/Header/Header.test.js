import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('renders Experience link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Experience/i);
  expect(linkElement).toBeInTheDocument();
});