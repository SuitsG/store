

const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: [String],
  colors: [String],
  imagen: String,
});

module.exports = mongoose.model('Producto', ProductoSchema);