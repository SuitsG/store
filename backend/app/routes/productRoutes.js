const express = require('express');
const router = express.Router();
const controllerProduct = require('../controllers/controllerProduct');

// GET all products
router.get('/', controllerProduct.getProducts);

// POST a new product
router.post('/', controllerProduct.createProduct);

// GET a single product
router.get('/:id', controllerProduct.getProduct, (req, res) => {
  res.json(res.product);
});

// PATCH update a product
router.patch('/:id', controllerProduct.getProduct, controllerProduct.updateProduct);

// DELETE a product
router.delete('/:id', controllerProduct.getProduct, controllerProduct.deleteProduct);

module.exports = router;