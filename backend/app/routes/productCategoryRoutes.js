const express = require('express');
const router = express.Router();
const productCategoryController = require('../controllers/ProductCategoryController');

router.get('/', productCategoryController.getProductCategories);
router.get('/:id', productCategoryController.getProductCategoryById);
router.post('/', productCategoryController.createProductCategory);
router.put('/:id', productCategoryController.updateProductCategory);
router.delete('/:id', productCategoryController.deleteProductCategory);

module.exports = router;
