import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Shop } from '../pages/Shop';
import { CartProvider } from '../context/CartContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderShop = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Shop />
      </CartProvider>
    </QueryClientProvider>
  );

describe('Shop', () => {
  test('shows loading state initially', () => {
    renderShop();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays error message when API fails', async () => {
    // Mock failed API call
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('API is not available'))
    );

    renderShop();
    const errorMessage = await screen.findByText(
      /Error loading products. Please try again later./i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});