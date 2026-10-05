import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders account balance from profile', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/Account Balance: 100/i)).toBeInTheDocument();
  });
});
