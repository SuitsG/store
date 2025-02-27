const Product = require('../models/Product');

class ProductController {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    // ...otros métodos necesarios...
}

module.exports = ProductController;
