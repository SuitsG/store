const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error getting products', error });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Middleware to get product by ID
exports.getProduct = async (req, res, next) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.delete(req.params.id);
    res.json({ message: 'Deleted Product' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};