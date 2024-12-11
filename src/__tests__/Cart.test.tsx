import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../context/CartContext';
import { Cart } from '../pages/Cart';
import { BrowserRouter } from 'react-router-dom';

const renderCart = () =>
  render(
    <BrowserRouter>
      <CartProvider>
        <Cart />
      </CartProvider>
    </BrowserRouter>
  );

describe('Cart', () => {
  test('shows empty cart message when cart is empty', () => {
    renderCart();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.getByText('Add some items to get started!')).toBeInTheDocument();
  });

  test('displays continue shopping button when cart is empty', () => {
    renderCart();
    const continueButton = screen.getByText('Continue Shopping');
    expect(continueButton).toBeInTheDocument();
    expect(continueButton.closest('a')).toHaveAttribute('href', '/shop');
  });
});