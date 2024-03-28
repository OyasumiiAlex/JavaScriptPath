//Evento que carga el DOM
document.addEventListener("DOMContentLoaded", function() {
    const inputlink = document.getElementById('link_input');
    const urlbutton = document.getElementById('form1_button');
    let qrcontent = document.getElementById('qr_code');

    const newqrcode = new QRCode(qrcontent, {
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    //Funcion que valida el input este correctamente llenado
    function isValidInput() {
        if (inputlink.value === '') {
            alert('No se aceptan campos vacios');
            return false;
        } else {
            return true;
        }
    }
    //Funcion que hace el cambio de ventana
    function checkButtonClick() {
        const stepOne = document.getElementById('step1');
        const stepTwo = document.getElementById('step2');
        if (stepOne.classList.contains('active')) {
            console.log('Paso 1 activo, cambiando a paso 2');
            stepOne.classList.remove('active');
            stepTwo.classList.add('active');
        } else if (stepTwo.classList.contains('active')) {
            console.log('Paso 2 activo, cambiando a paso 3');
            stepTwo.classList.remove('active');
        }
    }
    //Evento del boton
    urlbutton.addEventListener('click', function () {
        console.log('Botón form1 presionado');
        if (isValidInput()) {
            //Try-catch que crea el QR
            try {
                newqrcode.makeCode(inputlink.value);
                checkButtonClick();
            } catch (error) {
                console.log('Error al crear el QR', error);
                alert('Ocurrió un error al crear el código QR. Por favor, inténtalo de nuevo.');
            }
        }
    });
});
