const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Definir las rutas para los productos
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
