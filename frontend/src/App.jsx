import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (

    <BrowserRouter>

      {/* Navbar stays on every page */}
      <Navbar />

      {/* Space for fixed navbar */}
      <main className="pt-24">

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          />

        </Routes>

      </main>

    </BrowserRouter>

  );

}

export default App;