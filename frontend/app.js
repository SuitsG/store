const express = require('express');
const path = require('path');
const ProductController = require('./app/controllers/ProductController');

const app = express();

const productController = new ProductController();

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Definir rutas
app.get('/products/:id', (req, res) => {
    const product = productController.getProductById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.post('/products', (req, res) => {
    const product = req.body;
    productController.addProduct(product);
    res.status(201).send('Product added');
});

// Ruta para la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


