const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;
    const confirmar_contraseña = document.getElementById('confirmar_password').value;
    const inputPassword = document.getElementById('password');
    const inputConfirmarPassword = document.getElementById('confirmar_password');
    const inputNombre = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const error_nombre = document.getElementById('error_nombre');
    const error_email = document.getElementById('error_email');
    const error_contraseña = document.getElementById('password_error');
    const error_confirmar_contraseña = document.getElementById('error_confirmar_password');
    const mensaje_exito = document.getElementById('mensaje_exito');
    

    let esValido = true;
    //Validación de contraseña
    if(contraseña.length < 8){
        error_contraseña.textContent = "La contraseña debe tener 8 caracteres minimo";
        inputPassword.style.borderColor = "red"; 
        esValido = false;
    }else{
        error_contraseña.textContent = "";
        inputPassword.style.borderColor = "green";
    }
    if(contraseña != confirmar_contraseña || confirmar_contraseña == ""){
        error_confirmar_contraseña.textContent = "La contraseña introducida no coincide";
        inputConfirmarPassword.style.borderColor = "red";
        esValido=false;
    }else{
        error_confirmar_contraseña.textContent = "";
        inputConfirmarPassword.style.borderColor = "green";
    }

    //Validación de nombre
    if (nombre == ""){
        error_nombre.textContent = "El nombre no puede estar vacío";
        inputNombre.style.borderColor = "red";
        esValido = false;
    }else{
        error_nombre.textContent = "";
        inputNombre.style.borderColor = "green";
    }

    //Validacion avanzada de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == ""){
        error_email.textContent = "El email no puede estar vacio";
        esValido = false;
        inputEmail.style.borderColor = "red";
    }else{
        if(!emailRegex.test(email)){
            error_email.textContent = "El email debe contener @ y .";
            esValido = false;
            inputEmail.style.borderColor = "red";
        }else{
            error_email.textContent = "";
            inputEmail.style.borderColor = "green";
        }
    }
    //Fin del formulario
    if(esValido){
        console.log("Enviando Datos...")
        formulario.reset();
        mensaje_exito.textContent = "¡El formulario ha sido enviado correctamente!";
        mensaje_exito.style.color = "green";
    }
})
