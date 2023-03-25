$('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 700);
});

$(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
}); 

function logear(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "" && password != "" && username !="admin") {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('user-btn').style.display = 'block';
    }
    else if(username != "" && password != "" && username =="admin"){
        window.location.href = "../ejercicioPracticoHtml/index.html";
    }
    else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
}

function logout(){
    document.getElementById('user-btn').style.display = 'none';
    document.getElementById('login-btn').style.display = 'block';
}