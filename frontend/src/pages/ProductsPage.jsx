import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import ShareButton from '../Components/ShareButton';
import BackButton from '../Components/BackButton';
import Loader from '../Components/Loader';

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const location = useLocation();
  const navigate = useNavigate();

const searchParams = new URLSearchParams(location.search);
const searchQuery = searchParams.get('search') || '';
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  // Sync category filter with the ?category= URL param (e.g. clicking a
  // category tile on the home page, or navigating here again with a
  // different category while already on this page).
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    setCategory(cat || 'All');
  }, [location.search]);

  // Fetch products
  useEffect(() => {
    axios
      .get('https://giftora-7mmv.onrender.com/api/products')
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // Apply filters
  useEffect(() => {

    let data = [...products];

    // Category filter
    if (category !== 'All') {
      data = data.filter((item) => item.category === category);
    }


  // Search by product name only
if (searchQuery.trim() !== '') {
  data = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}


    // Stock filter
    if (stockFilter === 'InStock') {
      data = data.filter((item) => item.stock > 0);
    } else if (stockFilter === 'OutOfStock') {
      data = data.filter((item) => item.stock === 0);
    }

    // Price sorting
    if (priceFilter === 'LowToHigh') {
      data.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'HighToLow') {
      data.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(data);

  }, [category, stockFilter, priceFilter, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-35">

      {/* Back */}
      <div className="mb-4">
        <BackButton fallback="/" />
      </div>

      {/* Luxury Heading */}
      <div className="text-center pb-10 border-b border-pink-100 mb-8">

        <p className="text-pink-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-2">
          Eshaal D'signs
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
          Timeless Elegance
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
          Discover handcrafted jewelry designed to add sparkle, grace, and elegance
          to every special moment.
        </p>

        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-12 bg-pink-200"></span>
          <span className="text-pink-400 text-xl">✦</span>
          <span className="h-px w-12 bg-pink-200"></span>
        </div>

      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          <option value="All">All Categories</option>
          <option value="Necklace">Necklace</option>
          <option value="Bracelet">Bracelet</option>
          <option value="Anklet">Anklet</option>
          <option value="Neck Chain">Neck Chain</option>
          <option value="Mobile Charm">Mobile Charm</option>
          <option value="Keychain">Keychain</option>
          <option value="Earring">Earring</option>
          <option value="Hairband">Hairband</option>
          <option value="Ring">Ring</option>
          <option value="Bangles">Bangles</option>
          <option value="Others">Others</option>
        </select>

        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          className="border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          <option value="All">All Stock</option>
          <option value="InStock">In Stock</option>
          <option value="OutOfStock">Out of Stock</option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          <option value="All">Sort by Price</option>
          <option value="LowToHigh">Low to High</option>
          <option value="HighToLow">High to Low</option>
        </select>

      </div>

      {searchQuery && (
  <p className="text-center text-gray-600 mb-6">
    Showing results for
    <span className="font-semibold text-pink-600">
      {' '}"{searchQuery}"
    </span>
  </p>
)}

      {/* Products Grid */}
      {loading ? (
        <Loader label="Loading our jewelry collection..." />
      ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">

        {filteredProducts.map((product) => (
          <div
            key={product.productId}
            onClick={() => navigate(`/product/${product.productId}`)}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-pink-100 hover:-translate-y-1 cursor-pointer"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-48 sm:h-60 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {/* Wishlist */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                  className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                  <Heart
                    size={20}
                    className={
                      isInWishlist(product.productId)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-500'
                    }
                  />
                </button>

                <ShareButton product={product} />
              </div>

              {/* Stock Badge */}
              {product.stock > 0 ? (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  In Stock
                </span>
              ) : (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Out of Stock
                </span>
              )}

            </div>

            {/* Content */}
            <div className="p-4 flex flex-col h-[220px]">

              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 line-clamp-2 min-h-[48px] mb-1">
                {product.name}
              </h3>

              <p className="text-pink-600 font-bold text-lg">
                ₹ {product.price}
              </p>

              <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2 flex-grow">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">

                {/* Add to Cart */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition text-sm font-medium shadow-sm"
                >
                  <ShoppingCart size={18} />
                  <span className="hidden sm:inline">Add</span>
                </button>

                {/* Details */}
                <Link
                  to={`/product/${product.productId}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 border border-pink-300 text-pink-700 py-2 rounded-xl hover:bg-pink-50 transition text-sm font-medium">
                    <Eye size={18} />
                    <span className="hidden sm:inline">Details</span>
                  </button>
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>
      )}

      {/* Empty State */}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No products found ✨
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try changing the filters to discover more beautiful pieces.
          </p>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;