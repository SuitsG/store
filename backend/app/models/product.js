const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  colors: { type: [String], required: true },
  images: { type: [String], required: true }
});

class Product {
  #model;

  constructor(model = mongoose.model('Product', productSchema)) {
    this.#model = model;
  }

  create(data) {
    const product = new this.#model(data);
    return product.save();
  }

  findById(id) {
    return this.#model.findById(id).exec();
  }

  findAll() {
    return this.#model.find().exec();
  }

  update(id, data) {
    return this.#model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id) {
    return this.#model.findByIdAndDelete(id).exec();
  }
}

module.exports = new Product();