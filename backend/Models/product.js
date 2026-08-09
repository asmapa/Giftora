const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({

  productId: {
  type: String,
  unique: true
  },

  name: {
    type: String,
    required: true
  },

  category: {
    type: String,
    enum: [
      'Necklace',
      'Bracelet',
      'Anklet',
      'Neck Chain',
      'Mobile Charm',
      'Keychain',
      'Earring',
      'Ring',
      'Bangles',
      'others'
    ],
    required: true
  },

  description: {
    type: String,
    default: ''
  },

  price: {
    type: Number,
    required: true
  },

  originalPrice: {
    type: Number,
    default: 0
  },

  discountPercent: {
    type: Number,
    default: 0
  },

  stock: {
    type: Number,
    default: 0
  },

  inStock: {
    type: Boolean,
    default: true
  },

  images: [{
    type: String
  }],

  featured: {
    type: Boolean,
    default: false
  },

  deliveryDays: {
    type: String,
    default: '3 - 5 Days'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

// Auto-generate Product ID
productSchema.pre('save', async function(next) {

  if (!this.productId) {

    const lastProduct = await mongoose.models.Product
      .findOne()
      .sort({ createdAt: -1 });

    let nextNumber = 1;

    if (lastProduct && lastProduct.productId) {

      const lastNumber = parseInt(
        lastProduct.productId.replace('P', '')
      );

      nextNumber = lastNumber + 1;
    }

    this.productId = `P${String(nextNumber).padStart(3, '0')}`;
  }

  
});

module.exports = mongoose.model('Product', productSchema);
