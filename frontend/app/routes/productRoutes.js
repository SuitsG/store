import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();
const productController = new ProductController();

// Ruta para obtener todos los productos
router.get('/products', async (req, res) => {
    await productController.fetchProducts(req, res);
});

// Ruta para obtener un producto por ID
router.get('/products/:id', async (req, res) => {
    const product = await productController.productModel.getProductById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// Ruta para agregar un nuevo producto
router.post('/products', async (req, res) => {
    await productController.addProduct(req, res);
});

// Ruta para actualizar un producto por ID
router.put('/products/:id', async (req, res) => {
    await productController.updateProduct(req, res);
});

// Ruta para eliminar un producto por ID
router.delete('/products/:id', async (req, res) => {
    await productController.deleteProduct(req, res);
});

export default router;