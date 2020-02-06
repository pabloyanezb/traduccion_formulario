var h2 = document.getElementById('form-signin-heading');
h2.innerHTML='Por favor inicia sesión';

var email = document.getElementById('inputEmail').placeholder='Correo Electrónico';

var password = document.getElementById('inputPassword').placeholder='Contraseña';

var checkbox = document.getElementsByTagName('span')[0];
checkbox.innerHTML='Recordar datos';

var button = document.getElementsByTagName('button')[0];
button.innerHTML='Iniciar Sesión';