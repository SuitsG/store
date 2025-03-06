import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './app/routes/productRoutes.js';
import loginRoutes from './app/routes/loginRoutes.js';
import adminRoutes from './app/routes/adminRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tiendavirtual', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3001' // Reemplaza con el origen de tu frontend
}));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas de productos
app.use('/', productRoutes);

// Usar las rutas de login
app.use('/', loginRoutes);

// Usar las rutas de administrador
app.use('/', adminRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});