import express from 'express';
import LoginController from '../controllers/loginController.js';

const router = express.Router();
const loginController = new LoginController();

// Ruta para mostrar la vista de login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});

// Ruta para manejar el login
router.post('/login', (req, res) => {
    loginController.login(req, res);
});

export default router;