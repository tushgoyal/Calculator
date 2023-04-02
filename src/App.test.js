import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App and calculator main container', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lets Calculate/i);
  expect(linkElement).toBeInTheDocument();
});
