
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    productType: 'Ornament',
    category: 'Necklace',
    color: '',
    description: '',
    price: '',
    originalPrice: '',
    discountPercent: '',
    stock: '',
    featured: false,
    deliveryDays: '3 - 5 Days',
    images: ['']
  });

  // Ornament categories vs Material categories - shown depending on
  // which Product Type is selected below.
  const ORNAMENT_CATEGORIES = [
    'Necklace', 'Bracelet', 'Anklet', 'Neck Chain', 'Mobile Charm',
    'Keychain', 'Earring', 'Ring', 'Bangles', 'Hairband', 'Others'
  ];

  const MATERIAL_CATEGORIES = [
    'Beads', 'Thread & Cord', 'Chains & Findings',
    'Tools & Accessories', 'Other Materials'
  ];

  const [loading, setLoading] = useState(false);
const [selectedFiles, setSelectedFiles] = useState([]);
const [previewImages, setPreviewImages] = useState([]);
  // Handle input change
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    // When switching Product Type, jump category to the first valid
    // option for that type so an Ornament category can't get saved
    // against a Material product (or vice versa).
    if (name === 'productType') {
      setFormData((prev) => ({
        ...prev,
        productType: value,
        category: value === 'Material' ? 'Beads' : 'Necklace'
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {

  const files = Array.from(e.target.files);

  if (files.length > 10) {
    alert('Maximum 10 images allowed');
    return;
  }

  setSelectedFiles(files);

  const previews = files.map((file) =>
    URL.createObjectURL(file)
  );

  setPreviewImages(previews);
};

  // Handle image URL change
  const handleImageChange = (index, value) => {

    const updatedImages = [...formData.images];
    updatedImages[index] = value;

    setFormData((prev) => ({
      ...prev,
      images: updatedImages
    }));
  };

  // Add image field
  const addImageField = () => {

    if (formData.images.length >= 10) {
      alert('Maximum 10 images allowed');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const removeSelectedImage = (indexToRemove) => {

  const updatedFiles = selectedFiles.filter(
    (_, index) => index !== indexToRemove
  );

  const updatedPreviews = previewImages.filter(
    (_, index) => index !== indexToRemove
  );

  setSelectedFiles(updatedFiles);
  setPreviewImages(updatedPreviews);
};


const uploadImagesToCloudinary = async () => {

  const uploadedUrls = [];

  for (const file of selectedFiles) {

    const data = new FormData();

    data.append('file', file);

    // Your Cloudinary upload preset
    data.append('upload_preset', 'eshaal_designs');

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/jap7a9uk/image/upload',
      data
    );

    uploadedUrls.push(res.data.secure_url);
  }

  return uploadedUrls;
};
  // Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // Upload selected images to Cloudinary first
const imageUrls = await uploadImagesToCloudinary();

const payload = {
  ...formData,
  price: Number(formData.price),
  originalPrice: formData.originalPrice
    ? Number(formData.originalPrice)
    : 0,
  discountPercent: formData.discountPercent
    ? Number(formData.discountPercent)
    : 0,
  stock: Number(formData.stock),
  images: imageUrls
};

      await axios.post(
        'https://giftora-7mmv.onrender.com/api/products',
        payload
      );

      alert('Product added successfully ✨');

      navigate('/admin/dashboard');

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message || 'Failed to add product'
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 px-4 py-8 md:px-8">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-pink-100 p-6 md:p-8">

        <div className="text-center mb-8">

          <p className="text-pink-500 uppercase tracking-[4px] text-xs font-semibold mb-2">
            Eshaal D'signs
          </p>

          <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
            Add New Product
          </h1>

          <p className="text-gray-500 mt-3">
            Add a new jewelry item to your collection
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Product Type */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Product Type
            </label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="Ornament">Ornament (finished jewelry)</option>
              <option value="Material">Material (used to make ornaments)</option>
            </select>
            <p className="text-sm text-gray-500 mt-2">
              Materials show up only on the "Materials" page, not in the regular Shop.
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              {(formData.productType === 'Material'
                ? MATERIAL_CATEGORIES
                : ORNAMENT_CATEGORIES
              ).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Color (optional) */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Color <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="e.g. Gold, Rose Gold, Silver — leave blank if not applicable"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Price Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Discount %
              </label>
              <input
                type="number"
                name="discountPercent"
                value={formData.discountPercent}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

          </div>

          {/* Stock */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Delivery Days */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Delivery Days
            </label>
            <input
              type="text"
              name="deliveryDays"
              value={formData.deliveryDays}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Featured */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-5 h-5 accent-pink-600"
            />
            <span className="text-gray-700 font-medium">
              Mark as Featured Product
            </span>
          </label>

         {/* Images */}
<div>

  <label className="block font-medium text-gray-700 mb-3">
    Product Images
  </label>

  <input
    type="file"
    multiple
    accept="image/*"
    onChange={handleFileChange}
    className="w-full border border-gray-300 rounded-xl px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
  />

  <p className="text-sm text-gray-500 mt-2">
    Select up to 10 images
  </p>

  {previewImages.length > 0 && (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">

    {previewImages.map((img, index) => (
  <div key={index} className="relative">

    <img
      src={img}
      alt={`preview-${index}`}
      className="w-full h-32 object-cover rounded-xl border border-pink-100"
    />

    <button
      type="button"
      onClick={() => removeSelectedImage(index)}
      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm shadow-md"
    >
      ×
    </button>

  </div>
))}

    </div>
  )}

</div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-xl font-semibold shadow-lg transition disabled:opacity-50">
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProductPage;

