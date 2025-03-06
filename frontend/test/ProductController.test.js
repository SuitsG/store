import { expect } from 'chai';
import sinon from 'sinon';
import ProductController from '../app/controllers/ProductController.js';
import ProductModel from '../app/models/Product.js';

describe('ProductController', () => {
    let productController;
    let req;
    let res;
    let productModelStub;

    beforeEach(() => {
        productModelStub = sinon.createStubInstance(ProductModel);
        productController = new ProductController();
        productController.productModel = productModelStub;

        req = {};
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
            send: sinon.stub()
        };
    });

    it('should fetch products and return them with status 200', async () => {
        const products = [{ name: 'Product 1' }, { name: 'Product 2' }];
        productModelStub.fetchProducts.resolves();
        productModelStub.getAllProducts.returns(products);

        await productController.fetchProducts(req, res);

        expect(res.status.calledWith(200)).to.be.true;
        expect(res.json.calledWith(products)).to.be.true;
    });

    it('should handle errors when fetching products', async () => {
        const error = new Error('Error fetching products');
        productModelStub.fetchProducts.rejects(error);

        await productController.fetchProducts(req, res);

        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWith({ error: 'Error fetching products' })).to.be.true;
    });
});