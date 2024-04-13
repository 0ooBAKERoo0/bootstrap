document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente
        
        // Validación del campo de correo electrónico
        var emailInput = document.getElementById('exampleInputEmail1');
        var emailValue = emailInput.value.trim();
        var emailError = document.getElementById('emailError');
        
        if (!emailValue) {
            emailError.textContent = 'Por favor, ingresa tu dirección de correo electrónico.';
            return;
        } else {
            emailError.textContent = '';
        }
        
        // Validación del campo de contraseña
        var passwordInput = document.getElementById('exampleInputPassword1');
        var passwordValue = passwordInput.value.trim();
        var passwordError = document.getElementById('passwordError');
        
        if (!passwordValue) {
            passwordError.textContent = 'Por favor, ingresa tu contraseña.';
            return;
        } else {
            passwordError.textContent = '';
        }
        
        // Si pasa todas las validaciones, puedes enviar el formulario
        form.submit();
    });
});
