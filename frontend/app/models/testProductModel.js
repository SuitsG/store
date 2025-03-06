import ProductModel from './Product.js';

async function testFetchProducts() {
    const productModel = new ProductModel();
    await productModel.fetchProducts();
    console.log('All products:', productModel.getAllProducts());
}

testFetchProducts();