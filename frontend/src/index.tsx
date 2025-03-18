import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductTable from '../public/product/table';
import CategoryTable from '../public/category/Table';
import Modal from '../public/category/modal'
import ModalProduct from '../public/product/modal';


/* Productos */
const productContainer = document.getElementById('product-table-product');
if (productContainer) {
    const rootProduct = createRoot(productContainer);
    rootProduct.render(
        <React.StrictMode>
            <h2>CRUD Productos</h2>
            <div>
                <ModalProduct />
            </div>
            <ProductTable />
        </React.StrictMode>
    );
}

/* Categorias */
const categoryContainer = document.getElementById('category-table-category');
if (categoryContainer) {
    const rootCategory = createRoot(categoryContainer);
    rootCategory.render(
        <React.StrictMode>
            <h2>CRUD Categorias</h2>
            <div>
                <Modal />
            </div>
            <CategoryTable />
        </React.StrictMode>
    );
}