import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Routes>
              <Route path="/odin-shopping-cart" element={<Navigate to="/odin-shopping-cart/home" />} />
                <Route path="/odin-shopping-cart/home" element={<Home />} />
                <Route path="/odin-shopping-cart/shop" element={<Shop />} />
                <Route path="/odin-shopping-cart/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;