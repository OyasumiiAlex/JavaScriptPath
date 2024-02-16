/*File to add interactivity*/
/*1er script (Validar input)*/
const inName = document.getElementById('nombre');
const inEmail = document.getElementById('correo');
const botonC = document.getElementById('bcontinue');

/*Funcion para validar texto vacio*/
function isValidInput(){
    if (inName.value === '' || inEmail.value === ''){
        alert('No se aceptan campos vacios');
    }else{
        DataName = inName.value;
        DataEmail = inEmail.value;
    }
}
//Agregando el evento al boton
botonC.addEventListener('click', isValidInput);

/*2do script (Añadir funcionalidad de transicion de ventanas)*/
function getButtonClick(){
    /*Obtener el nodo y cambiar su clase*/
    const stepOne = document.getElementById('step1');
    const stepTwo = document.getElementById('step2');
    stepOne.classList.remove('active');
    stepTwo.classList.add('active');
}
//Cuando se presione el boton se manda a llama la clase getButton...
botonC.addEventListener('click', getButtonClick);
/*3er script (Agregar efecto de pasos de página)*/



