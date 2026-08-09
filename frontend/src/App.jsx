import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import ProductsPage from './Pages/ProductsPage';
import Navbar from './Components/Navbar';

import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import AddProductPage from './Pages/AddProductPage';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import AdminRoute from './Components/AdminRoute';

// Layout component
function AppLayout() {

  const location = useLocation();

  // Hide navbar on admin pages
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>

      {/* Show navbar only for customer pages */}
      {!isAdminRoute && <Navbar />}

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