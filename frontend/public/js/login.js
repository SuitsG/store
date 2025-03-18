document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.submit');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    
    // Change password input type to password for security
    passwordInput.type = 'password';
    
    // Handle blind mode toggle
    const blindCheck = document.querySelector('.blind-check');
    blindCheck.addEventListener('change', function() {
        passwordInput.type = this.checked ? 'text' : 'password';
    });
    
    // Handle login
    loginButton.addEventListener('click', async function() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Basic validation
        if (!email || !password) {
            showMessage('Por favor ingrese email y contraseña', 'error');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            
            // Find user with matching credentials
            const user = users.find(user => 
                user.email === email && user.password === password
            );
            
            if (user) {
                // Store user info in session storage
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                showMessage('Login exitoso, redireccionando...', 'success');
                
                // Redirect to admin page
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 1000);
            } else {
                showMessage('Email o contraseña incorrectos', 'error');
            }
        } catch (error) {
            showMessage('Error de conexión al servidor', 'error');
            console.error('Error:', error);
        }
    });
    
    // Helper function to show messages
    function showMessage(message, type) {
        // Check if message element already exists
        let messageElement = document.querySelector('.message-alert');
        
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'message-alert';
            document.querySelector('.form').appendChild(messageElement);
        }
        
        messageElement.textContent = message;
        messageElement.className = `message-alert ${type}`;
        
        // Remove message after 3 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
});