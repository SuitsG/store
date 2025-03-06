import ProductModel from '../models/Product.js';

class ProductController {
    constructor() {
        this.productModel = new ProductModel();
    }

    async fetchProducts(req, res) {
        try {
            await this.productModel.fetchProducts();
            res.status(200).json(this.productModel.products);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching products' });
        }
    }

    async addProduct(req, res) {
        try {
            const product = req.body;
            await this.productModel.addProduct(product);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Error adding product' });
        }
    }

    async getProducts(req, res) {
        try {
            res.status(200).json(this.productModel.products);
        } catch (error) {
            res.status(500).json({ error: 'Error getting products' });
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const updatedProduct = req.body;
            await this.productModel.updateProduct(id, updatedProduct);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ error: 'Error updating product' });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            await this.productModel.deleteProduct(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error deleting product' });
        }
    }
}

export default ProductController;