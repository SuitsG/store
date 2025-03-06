const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const productsRouter = require('./app/routes/productRoutes');
const { MONGO_URI } = require('./config/database');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Configurar CORS para aceptar solicitudes desde http://localhost:3001
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // Habilitar CORS con opciones específicas

app.use(express.json());
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));