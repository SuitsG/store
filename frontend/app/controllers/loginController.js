class LoginController {
    login(req, res) {
        const { username, password } = req.body;
        // Aquí puedes agregar la lógica para autenticar al usuario
        if (username === 'admin' && password === 'password') {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}

export default LoginController;