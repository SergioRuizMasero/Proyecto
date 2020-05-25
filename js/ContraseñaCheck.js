document.getElementById("repitePassword").onkeyup = ComprobarContraseñas;

function ComprobarContraseñas() {

    var contraseña1 = document.getElementById("pswd").value;
    var contraseña2 = document.getElementById("repitePassword").value;

    if (contraseña1 == contraseña2){

        var a=document.getElementsByClassName("color2");
        a[0].style.backgroundColor="#34eb7a";

    } 

    else {

        var a=document.getElementsByClassName("color2");
            a[0].style.backgroundColor="#fa2d48";

    }
}






