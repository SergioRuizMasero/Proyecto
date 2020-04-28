
$(document).ready(function() {

    // Ventana requisitos de contraseña
    $('input[id=pswd]').keyup(function() {
        // set password variable
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if ( pswd.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

     
    //Color contraseña
    if ( pswd.match(/\d/) && pswd.match(/[A-Z]/) && pswd.match(/[A-z]/)) {
            
        if (pswd.length >= 8){

            var a=document.getElementsByClassName("color");
            a[0].style.backgroundColor="#34eb7a";
            document.getElementById('check').style.display = 'block';
            $('#pswd_info').hide();
            
                

        } else {
            var a=document.getElementsByClassName("color");
            a[0].style.backgroundColor="#fa2d48";
            document.getElementById('check').style.display = 'none';
            $('#pswd_info').show();
        }

    }else {

        var a=document.getElementsByClassName("color");
        a[0].style.backgroundColor="#fa2d48";
        $('#pswd_info').show();
    }

    
    


   


    }).focus(function() {
        $('#pswd_info').show();
    })
    .blur(function() {
        $('#pswd_info').hide();
    
    });


});


