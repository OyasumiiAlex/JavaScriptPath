//Evento que carga el DOM
document.addEventListener("DOMContentLoaded", function () {
    const inputlink = document.getElementById('link_input');
    const urlbutton = document.getElementById('form1_button');
    let qrcontent = document.getElementById('qr_code');
    let downloadbutton = document.getElementById('button1qr');
    let sharebutton = document.getElementById('button2qr');

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
    //Funcion para descargar la imagen
    function downloadQR() {
        //Enlace temporal para la descarga
        const downloadLink = document.createElement('a');
        //Obtencion de QR canvas y conversion a img
        const qrDataUrl = document.querySelector('#qr_code canvas').toDataURL('image/png');
        //Asignamos la conversion de imagen a la direccion donde debe descargar la imagen
        downloadLink.href = qrDataUrl;
        downloadLink.download = 'codigo_qr.png';
        downloadLink.click();
    }
    
    //Try catch para compartir imagen
    sharebutton.addEventListener('click', async () => {
        try {
            // Convertir el código QR en una URL de datos (data URL)
            const qrDataUrl = document.querySelector("#qr_code canvas").toDataURL("image/png");
            console.log("URL de datos generada:", qrDataUrl);
            // Compartir la imagen del código QR utilizando la API Web Share
            await navigator.share({ 
                title: "Compartir código QR", // Título opcional
                text: "Echa un vistazo a este código QR", // Texto opcional
                url: qrDataUrl 
            });
            console.log("La imagen del código QR se compartió exitosamente.");
        } catch (error) {
            console.error("Error al compartir la imagen del código QR:", error);
            alert("No se pudo compartir la imagen del código QR. Inténtalo de nuevo.");
        }
    });

    //Evento del boton "continue"
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

    //Evento del boton de descarga
    downloadbutton.addEventListener('click', function () {
        console.log('Presionado el boton desacargar');
        downloadQR();
    });
});
