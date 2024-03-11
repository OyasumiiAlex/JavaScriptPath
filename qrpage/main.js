const inputlink = document.getElementById('link_input');
const urlbutton = document.getElementById('form1_button');
let qrcontent = document.getElementById('qr_code');


/*Functions*/

function isValidInput(){
    if (inputlink.value === '') {
        alert('No se aceptan campos vacios');
        return false;
    } else {
        DataInput = inputlink.value;
        return true;
    }
}

function checkButtonClick(){
    /*Obtener el nodo y cambiar su clase*/
    const stepOne = document.getElementById('step1');
    const stepTwo = document.getElementById('step2');
    //Condicion para cambiar de contenido
    if (stepOne.classList.contains('active')) {
        console.log('Paso 1 activo, cambiando a paso 2');
        stepOne.classList.remove('active');
        stepTwo.classList.add('active');
    } else if (stepTwo.classList.contains('active')) {
        console.log('Paso 2 activo, cambiando a paso 3');
        /*Si la segunda ventana esta activa,
        quitamos su clase y la añadimos al tercer contenedor*/
        stepTwo.classList.remove('active');
        stepThree.classList.add('active');
    }
}

function qrTransform(){
    
}

urlbutton.addEventListener('click', function () {
    console.log('Botón form1 presionado');
    if (isValidInput()) {
        checkButtonClick();
    }
});