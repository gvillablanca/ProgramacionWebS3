function logear(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "" && password != "" && username !="admin") {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('user-btn').style.display = 'block';        
    }
    else if(username != "" && password != "" && username =="admin"){
        window.location.href = "../ProgramacionWebS3/administrador.html";
    }
    else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
}

function logout(){
    document.getElementById('user-btn').style.display = 'none';
    document.getElementById('login-btn').style.display = 'block';
}

function guardar() {
    var nombreCompleto = document.getElementById("nombre").value;
    var correoElectronico = document.getElementById("correo").value;
    var claveIngreso = document.getElementById("clave").value;
    var repetirClave = document.getElementById("repetir-clave").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    
    if (claveIngreso !== repetirClave) {
      alert("Las claves ingresadas no coinciden");
      return false;
    }

    if (nombreCompleto === "" || correoElectronico === "" || claveIngreso === "" || repetirClave === "" || fechaNacimiento ==="" ){
        alert("Favor completar todos los campos requeridos");
        return false;
    }
  
    var correoFormato = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    if (!correoFormato.test(correoElectronico)){
        alert("Por favor ingrese una dirección de correo válida");
        return false;
    }

    var validarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,18}$/;
    if (!validarPassword.test(claveIngreso)){
      alert("Por favor ingrese una contraseña/clave válida");
      return false; 
    }

    var anoNac = parseInt(fechaNacimiento.substring(0,4));
    var hoy = new Date();
    var anoActual = hoy.getFullYear();
    var edad = anoActual - anoNac;
    if (edad < 13) {
      alert("Debe tener al menos 13 años de edad para registrarse.");
      return false;
    }

    var usuario = {
        nombreCompleto: nombreCompleto,
        correoElectronico: correoElectronico,
        claveIngreso: claveIngreso,
        fechaNacimiento: fechaNacimiento,
        };

    var usuarioJSON = JSON.stringify(usuario);
        console.log(usuarioJSON);
}
function limpiar(){
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("clave").value = "";
        document.getElementById("repetir-clave").value = "";
        document.getElementById("fecha-nacimiento").value = "";
}
