import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/home"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Home className="w-5 h-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link
              to="/shop"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Store className="w-5 h-5 mr-1" />
              <span>Shop</span>
            </Link>
          </div>
          <Link
            to="/cart"
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};