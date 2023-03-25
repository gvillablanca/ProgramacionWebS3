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