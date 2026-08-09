import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaBoxOpen,
  FaFilter
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {


  const [showEditModal, setShowEditModal] = useState(false);
const [editingProduct, setEditingProduct] = useState(null);
const [selectedFiles, setSelectedFiles] = useState([]);
const [previewImages, setPreviewImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://giftora-7mmv.onrender.com/api/products');
      setProducts(res.data);
    } catch (err) {
      console.log(err);
      alert('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (productId) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `https://giftora-7mmv.onrender.com/api/products/${productId}`
      );

      alert('Product deleted successfully');

      fetchProducts();

    } catch (err) {
      console.log(err);
      alert('Delete failed');
    }
  };



  const handleFileChange = (e) => {

  const files = Array.from(e.target.files);

  if (files.length + previewImages.length > 10) {
    alert('Maximum 10 images allowed');
    return;
  }

  setSelectedFiles((prev) => [...prev, ...files]);

  const previews = files.map((file) =>
    URL.createObjectURL(file)
  );

  setPreviewImages((prev) => [...prev, ...previews]);
};

const removeImage = (indexToRemove) => {

  setPreviewImages((prev) =>
    prev.filter((_, index) => index !== indexToRemove)
  );
};


const uploadNewImages = async () => {

  const existingImages = previewImages.filter((img) =>
    img.startsWith('http')
  );

  const uploadedUrls = [];

  for (const file of selectedFiles) {

    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'eshaal_designs');

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/jap7a9uk/image/upload',
      data
    );

    uploadedUrls.push(res.data.secure_url);
  }

  return [...existingImages, ...uploadedUrls];
};


const handleUpdateProduct = async () => {

  try {

    const imageUrls = await uploadNewImages();

    const payload = {
      ...editingProduct,
      images: imageUrls,
      price: Number(editingProduct.price),
      stock: Number(editingProduct.stock),
      originalPrice: editingProduct.originalPrice
        ? Number(editingProduct.originalPrice)
        : 0,
      discountPercent: editingProduct.discountPercent
        ? Number(editingProduct.discountPercent)
        : 0
    };

    await axios.put(
      `https://giftora-7mmv.onrender.com/api/products/${editingProduct.productId}`,
      payload
    );

    alert('Product updated successfully ✨');

    // Refresh product list
    const res = await axios.get(
      'https://giftora-7mmv.onrender.com/api/products'
    );

    setProducts(res.data);

    setShowEditModal(false);

  } catch (err) {

    console.log(err);
    alert('Failed to update product');
  }
};

  // Filtered products
  const filteredProducts = useMemo(() => {

    let data = [...products];

    // Search
    if (search.trim() !== '') {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== 'All') {
      data = data.filter((item) => item.category === category);
    }

    // Stock
    if (stockFilter === 'InStock') {
      data = data.filter((item) => item.stock > 0);
    } else if (stockFilter === 'OutOfStock') {
      data = data.filter((item) => item.stock === 0);
    }

    return data;

  }, [products, search, category, stockFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 px-4 py-8 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 p-6 md:p-8 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <p className="text-pink-500 uppercase tracking-[4px] text-xs font-semibold mb-2">
                Eshaal D'signs
              </p>

              <h1 className="text-3xl md:text-5xl font-serif text-gray-800">
                Product Management
              </h1>

              <p className="text-gray-600 mt-3 max-w-2xl">
                Manage your jewelry collection, inventory, pricing, and featured products.
              </p>

            </div>

           <button
  onClick={() => navigate('/admin/products/add')}
  className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white px-5 py-3 rounded-xl font-medium shadow-lg transition self-start md:self-auto"
>
  <FaPlus />
  Add Product
</button>

          </div>

        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-4 md:p-6 mb-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Search */}
            <div className="relative">

              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search product name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />

            </div>

            {/* Category */}
            <div className="relative">

              <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                <option value="All">All Categories</option>
                <option value="Necklace">Necklace</option>
                <option value="Bracelet">Bracelet</option>
                <option value="Anklet">Anklet</option>
                <option value="Neck Chain">Neck Chain</option>
                <option value="Mobile Charm">Mobile Charm</option>
                <option value="Keychain">Keychain</option>
                <option value="Earring">Earring</option>
                <option value="Ring">Ring</option>
                <option value="Bangles">Bangles</option>
                <option value="Others">Others</option>
              </select>

            </div>

            {/* Stock */}
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="All">All Stock</option>
              <option value="InStock">In Stock</option>
              <option value="OutOfStock">Out of Stock</option>
            </select>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-sm">
            <p className="text-sm text-gray-500">Total Products</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {products.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-sm">
            <p className="text-sm text-gray-500">Filtered</p>
            <p className="text-2xl font-bold text-pink-700 mt-1">
              {filteredProducts.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-sm">
            <p className="text-sm text-gray-500">In Stock</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {products.filter(p => p.stock > 0).length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-sm">
            <p className="text-sm text-gray-500">Out of Stock</p>
            <p className="text-2xl font-bold text-red-600 mt-1">
              {products.filter(p => p.stock === 0).length}
            </p>
          </div>

        </div>

        {/* Products List */}
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">

          <div className="p-6 border-b border-pink-100 flex items-center gap-3">

            <FaBoxOpen className="text-pink-600 text-xl" />

            <h2 className="text-xl font-semibold text-gray-800">
              Products
            </h2>

          </div>

          {loading ? (

            <p className="p-6 text-gray-500">
              Loading products...
            </p>

          ) : filteredProducts.length === 0 ? (

            <p className="p-6 text-gray-500">
              No products found.
            </p>

          ) : (

            <div className="divide-y divide-pink-100">

              {filteredProducts.map((product) => (

                <div
                  key={product.productId}
                  className="p-4 md:p-6 hover:bg-pink-50 transition"
                >

                  <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

                    {/* Left */}
                    <div className="flex gap-4 items-start">

                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="w-24 h-24 rounded-2xl object-cover border border-pink-100"
                      />

                      <div>

                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          ID: {product.productId}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">

                          <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                            {product.category}
                          </span>

                          {product.stock > 0 ? (
                            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                              In Stock ({product.stock})
                            </span>
                          ) : (
                            <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                              Out of Stock
                            </span>
                          )}

                          {product.featured && (
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}

                        </div>

                      </div>

                    </div>

                    {/* Right */}
                    <div className="flex flex-col md:items-end gap-4">

                      <div className="text-right">

                        <p className="text-2xl font-bold text-pink-700">
                          ₹{product.price}
                        </p>

                        {product.originalPrice > 0 && (
                          <p className="text-sm text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </p>
                        )}

                      </div>

                      <div className="flex gap-2">

                        <button
  onClick={() => {
    setEditingProduct(product);
    setPreviewImages(product.images || []);
    setSelectedFiles([]);
    setShowEditModal(true);
  }}
  className="flex items-center gap-2 border border-pink-200 text-pink-700 px-4 py-2 rounded-xl hover:bg-pink-50 transition text-sm font-medium"
>
  Edit
</button>
                        <button
                          onClick={() => handleDelete(product.productId)}
                          className="flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 rounded-xl hover:bg-red-50 transition text-sm font-medium">
                          <FaTrash />
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>


      {showEditModal && editingProduct && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-pink-900">
          Edit Product
        </h2>

        <button
          onClick={() => setShowEditModal(false)}
          className="text-gray-500 hover:text-black text-2xl">
          ×
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

  <input
    type="text"
    value={editingProduct.name}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        name: e.target.value
      })
    }
    className="border rounded-xl px-4 py-3"
    placeholder="Product Name"
  />

  <select
    value={editingProduct.category}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        category: e.target.value
      })
    }
    className="border rounded-xl px-4 py-3"
  >
    <option value="Necklace">Necklace</option>
    <option value="Bracelet">Bracelet</option>
    <option value="Anklet">Anklet</option>
    <option value="Neck Chain">Neck Chain</option>
    <option value="Mobile Charm">Mobile Charm</option>
    <option value="Keychain">Keychain</option>
    <option value="Earring">Earring</option>
    <option value="Ring">Ring</option>
    <option value="Bangles">Bangles</option>
    <option value="Others">Others</option>
  </select>

  <input
    type="number"
    value={editingProduct.price}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        price: e.target.value
      })
    }
    className="border rounded-xl px-4 py-3"
    placeholder="Price"
  />

  {/* NEW - Original Price */}
  <input
    type="number"
    value={editingProduct.originalPrice || ''}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        originalPrice: e.target.value
      })
    }
    className="border rounded-xl px-4 py-3"
    placeholder="Original Price"
  />

  {/* NEW - Discount Percentage */}
  <input
    type="number"
    value={editingProduct.discountPercent || ''}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        discountPercent: e.target.value
      })
    }
    className="border rounded-xl px-4 py-3"
    placeholder="Discount %"
  />

  <input
    type="number"
    value={editingProduct.stock}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        stock: e.target.value
      })
    }
    className="border rounded-xl px-4 py-3"
    placeholder="Stock"
  />

</div>

      <textarea
        rows="4"
        value={editingProduct.description}
        onChange={(e) =>
          setEditingProduct({
            ...editingProduct,
            description: e.target.value
          })
        }
        className="border rounded-xl px-4 py-3 w-full mt-4"
        placeholder="Description"
      />

      {/* Images */}
      <div className="mt-6">

        <label className="font-medium text-gray-700 block mb-3">
          Product Images
        </label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border rounded-xl px-4 py-3"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">

          {previewImages.map((img, index) => (
            <div key={index} className="relative">

              <img
                src={img}
                alt="preview"
                className="w-full h-32 object-cover rounded-xl border"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">
                ×
              </button>

            </div>
          ))}

        </div>

      </div>

      <div className="flex justify-end gap-3 mt-8">

        <button
          onClick={() => setShowEditModal(false)}
          className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-50">
          Cancel
        </button>

        <button
          onClick={handleUpdateProduct}
          className="px-6 py-3 rounded-xl bg-pink-700 text-white hover:bg-pink-800 shadow-lg">
          Update Product
        </button>

      </div>

    </div>

  </div>
)}

    </div>
  );
};

export default AdminDashboard;