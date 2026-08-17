import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to My React App/i);
  expect(heading).toBeInTheDocument();
});

test('renders nginx message', () => {
  render(<App />);
  const paragraph = screen.getByText(/This app is running on Nginx!/i);
  expect(paragraph).toBeInTheDocument();
});
