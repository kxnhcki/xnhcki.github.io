// Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", mostrarFormularioLogin);
document.getElementById("btn__registrarse").addEventListener("click", mostrarFormularioRegister);
document.getElementById("btn__login").addEventListener("click", iniciarSesion);
document.getElementById("btn__register").addEventListener("click", registrarUsuario);
window.addEventListener("resize", anchoPage);
document.getElementById("btn__login").addEventListener("click", iniciarSesion);


// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// Funciones de visualización
function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();

function mostrarFormularioLogin() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function mostrarFormularioRegister() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

// Funciones para registrar e iniciar sesión
function registrarUsuario() {
    const nombreCompleto = document.getElementById('regNombreCompleto').value;
    const correo = document.getElementById('regCorreo').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Validar campos vacíos
    if (!nombreCompleto || !correo || !username || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar si el usuario ya existe
    if (localStorage.getItem(username)) {
        alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
    } else {
        localStorage.setItem(username, password);
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        document.getElementById('regNombreCompleto').value = '';
        document.getElementById('regCorreo').value = '';
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
        mostrarFormularioLogin();  // Cambia al formulario de login después del registro
    }
}

function iniciarSesion() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === null) {
        alert('El usuario no existe. Por favor, regístrate.');
    } else if (storedPassword === password) {
        alert('Login exitoso.');
        localStorage.setItem('currentUser', username);  // Almacenar el usuario actual
        window.location.href = 'PaginaPrincipal.html';  // Redirigir a la página principal
    } else {
        alert('Contraseña incorrecta. Por favor, intenta nuevamente.');
    }
}

