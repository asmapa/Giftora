import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import ProductsPage from './pages/ProductsPage';
import Navbar from './Components/Navbar';

import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import AddProductPage from './pages/AddProductPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './Components/AdminRoute';

// Scrolls to the matching section (Home / Shop / About / Contact) whenever
// the URL hash changes - works even when navigating from a different page
// (e.g. clicking "About" while on /products redirects home and scrolls there).
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      // Retry briefly since the target section may still be mounting
      // (e.g. HomePage just navigated to and its content is rendering).
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 10) {
          attempts += 1;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return null;
}

// Layout component
function AppLayout() {

  const location = useLocation();

  // Hide navbar on admin pages
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>

      {/* Show navbar only for customer pages */}
      {!isAdminRoute && <Navbar />}

      <ScrollToHash />

      {/* Add top padding only when navbar exists */}
      <main className={isAdminRoute ? '' : 'pt-24'}>

        <Routes>

          {/* Customer Routes */}
          <Route path="/" element={<HomePage />} />

          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/products" element={<ProductsPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />





          <Route
  path="/admin/products/add"
  element={
    <AdminRoute>
      <AddProductPage />
    </AdminRoute>
  }
/>

        </Routes>

      </main>

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;