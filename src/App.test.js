import { render, screen } from '@testing-library/react';
import App from './App';

test('sanity test', () => {
  render(<App />)
   const headingElement = screen.getByText(/Michaiah Bos/i);
   expect(headingElement).toBeInTheDocument();
})

