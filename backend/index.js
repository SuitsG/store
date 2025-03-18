const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const productsRouter = require('./app/routes/productRoutes');
const productCategoryRouter = require('./app/routes/productCategoryRoutes');
const userRouter = require('./app/routes/userRoute');
const { MONGO_URI } = require('./config/database');

app.disable('x-powered-by');

// Conectar a MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// 🔹 Configuración de CORS CORRECTA
const allowedOrigins = ['http://localhost:3001', 'http://localhost:8080'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}));

// Middleware para manejar OPTIONS correctamente
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

// Rutas
app.use('/products', productsRouter);
app.use('/productCategory', productCategoryRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
