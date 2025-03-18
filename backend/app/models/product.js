const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true }, // Cambiado de String a [String]
  images: { type: [String], required: true },
  gender: { type: String, required: true },
  amount: { type: Number, required: true },
  productCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true }
});

module.exports = mongoose.model('Product', productSchema);