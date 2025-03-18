const ProductCategory = require('../models/modelProductCategory');

// Obtener todas las categorías de productos
exports.getProductCategories = async (req, res) => {
    try {
        const productCategories = await ProductCategory.find();
        res.status(200).json(productCategories);
    } catch (error) {
        res.status(500).json({ message: 'Error getting product categories', error });
    }
};

// Obtener una categoría de producto por ID
exports.getProductCategoryById = async (req, res) => {
    try {
        const productCategory = await ProductCategory.findById(req.params.id);
        if (!productCategory) {
            return res.status(404).json({ message: 'Product category not found' });
        }
        res.status(200).json(productCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error getting product category', error });
    }
};

// Crear una nueva categoría de producto
exports.createProductCategory = async (req, res) => {
    try {
        const newProductCategory = new ProductCategory(req.body);
        await newProductCategory.save();
        res.status(201).json(newProductCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product category', error });
    }
};

// Actualizar una categoría de producto
exports.updateProductCategory = async (req, res) => {
    try {
        const updatedProductCategory = await ProductCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProductCategory) {
            return res.status(404).json({ message: 'Product category not found' });
        }
        res.status(200).json(updatedProductCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product category', error });
    }
};

// Eliminar una categoría de producto
exports.deleteProductCategory = async (req, res) => {
    try {
        const deletedProductCategory = await ProductCategory.findByIdAndDelete(req.params.id);
        if (!deletedProductCategory) {
            return res.status(404).json({ message: 'Product category not found' });
        }
        res.status(200).json({ message: 'Product category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product category', error });
    }
};
