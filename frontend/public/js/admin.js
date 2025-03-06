document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];

    // Fetch and display products
    fetch('/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                addProductToTable(product);
            });
        });

    // Add or update product
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const productId = document.getElementById('productId').value;

        const product = {
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            size: document.getElementById('size').value,
            colors: document.getElementById('colors').value.split(','),
            images: document.getElementById('images').value.split(',')
        };

        if (productId) {
            // Update product
            fetch(`http://localhost:3000/products/${productId}`, {
                // mode: 'no-cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(response => response.json())
                .then(updatedProduct => {
                    updateProductInTable(updatedProduct);
                    productForm.reset();
                });
        } else {
            // Add new product
            fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(response => response.json())
                .then(newProduct => {
                    addProductToTable(newProduct);
                    productForm.reset();
                });
        }
    });

    // Edit or delete product
    productTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            const productId = event.target.dataset.id;
            const row = event.target.closest('tr');
            document.getElementById('productId').value = productId;
            document.getElementById('name').value = row.cells[1].textContent;
            document.getElementById('price').value = row.cells[2].textContent;
            document.getElementById('description').value = row.cells[3].textContent;
            document.getElementById('size').value = row.cells[4].textContent;
            document.getElementById('colors').value = row.cells[5].textContent;
            document.getElementById('images').value = row.cells[6].textContent;
        }

        if (event.target.classList.contains('delete-btn')) {
            const productId = event.target.dataset.id;
            fetch(`http://localhost:3000/products/${productId}`, {
                method: 'DELETE'
            })
                .then(() => {
                    removeProductFromTable(productId);
                });
        }
    });

    function addProductToTable(product) {
        const row = productTable.insertRow();
        row.setAttribute('data-id', product._id);
        row.innerHTML = `
            <td>${product._id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>${product.size}</td>
            <td>${product.colors.join(', ')}</td>
            <td>${product.images.join(', ')}</td>
            <td>
                <button class="edit-btn" data-id="${product._id}">Editar</button>
                <button class="delete-btn" data-id="${product._id}">Eliminar</button>
            </td>
        `;
    }

    function updateProductInTable(product) {
        const row = productTable.querySelector(`tr[data-id='${product._id}']`);
        row.innerHTML = `
            <td>${product._id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>${product.size}</td>
            <td>${product.colors.join(', ')}</td>
            <td>${product.images.join(', ')}</td>
            <td>
                <button class="edit-btn" data-id="${product._id}">Editar</button>
                <button class="delete-btn" data-id="${product._id}">Eliminar</button>
            </td>
        `;
    }

    function removeProductFromTable(productId) {
        const row = productTable.querySelector(`tr[data-id='${productId}']`);
        row.remove();
    }
});
