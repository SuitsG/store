class ProductView {
    constructor(controller) {
        this.controller = controller;
    }

    displayProduct(product) {
        console.log(`Product: ${product.name}`);
        console.log(`Description: ${product.description}`);
        console.log(`Price: $${product.price}`);
        console.log(`Stock: ${product.stock}`);
        console.log(`Category: ${product.category}`);
    }

    // ...otros métodos necesarios...
}

module.exports = ProductView;
