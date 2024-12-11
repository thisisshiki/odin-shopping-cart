import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../components/ProductCard';
import { CartProvider } from '../context/CartContext';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'Test Description',
  category: 'Test Category',
  image: 'test-image.jpg',
  rating: {
    rate: 4.5,
    count: 100,
  },
};

const renderProductCard = () =>
  render(
    <CartProvider>
      <ProductCard product={mockProduct} />
    </CartProvider>
  );

describe('ProductCard', () => {
  test('renders product information correctly', () => {
    renderProductCard();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
  });

  test('quantity controls work correctly', () => {
    renderProductCard();
    const input = screen.getByRole('spinbutton');
    const incrementButton = screen.getByLabelText('Increase quantity');
    const decrementButton = screen.getByLabelText('Decrease quantity');

    expect(input).toHaveValue(1);

    fireEvent.click(incrementButton);
    expect(input).toHaveValue(2);

    fireEvent.click(decrementButton);
    expect(input).toHaveValue(1);
  });

  test('add to cart button is enabled by default', () => {
    renderProductCard();
    const addToCartButton = screen.getByText('Add to Cart');
    expect(addToCartButton).toBeEnabled();
  });
});