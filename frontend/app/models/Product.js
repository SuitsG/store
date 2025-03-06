import fetch from 'node-fetch';

class ProductModel {
    constructor() {
        this.products = [];
    }

    async fetchProducts() {
        try {
            console.log('Fetching products...');
            const response = await fetch('http://localhost:3000/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.products = await response.json();
            console.log('Products fetched successfully:', this.products);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }

    async getProductById(id) {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch product:', error);
        }
    }

    async addProduct(product) {
        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const newProduct = await response.json();
            this.products.push(newProduct);
        } catch (error) {
            console.error('Failed to add product:', error);
        }
    }

    async updateProduct(id, updatedProduct) {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updated = await response.json();
            const index = this.products.findIndex(product => product._id === id);
            if (index !== -1) {
                this.products[index] = updated;
            }
        } catch (error) {
            console.error('Failed to update product:', error);
        }
    }

    async deleteProduct(id) {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.products = this.products.filter(product => product._id !== id);
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    }
}

export default ProductModel;
