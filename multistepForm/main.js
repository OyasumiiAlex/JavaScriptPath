/*File to add interactivity*/
const inName = document.getElementById('nombre');
const inEmail = document.getElementById('correo');
const checkboxs = document.querySelectorAll('.container input[type= "checkbox"]');
const botonF1 = document.getElementById('changeform1');
const botonF2 = document.getElementById('changeform2');

/*1er script (Validar input)*/
/*Funcion para validar el primer formulario*/
function isValidInput() {
    if (inName.value === '' || inEmail.value === '') {
        alert('No se aceptan campos vacios');
        return false;
    } else {
        DataName = inName.value;
        DataEmail = inEmail.value;
        return true;
    }
}
/*Funcion para validar el segundo formulario*/
function isValidCheckbox() {
    //Creamos una variable para guardar el estado de checkbox
    let opcchecked = false;
    //Realizamos un recorrido por los checkbox
    checkboxs.forEach(checkbox => {
        //validamos checkbox
        if (checkbox.checked) {
            opcchecked = true;
        }
    });
    /*Si ninguno esta en estado checked*/
    if (!opcchecked) {
        alert('Seleccione al menos una opción');
        return false;
    } else {
        //Almacenamos la informacion

        return true;
    }
}
/*2do script (Añadir funcionalidad de transicion de ventanas)*/
function getButtonClick() {
    /*Obtener el nodo y cambiar su clase*/
    const stepOne = document.getElementById('step1');
    const stepTwo = document.getElementById('step2');
    const stepThree = document.getElementById('step3');
    //Condicion para cambiar de contenido
    if (stepOne.classList.contains('active')) {
        console.log('Paso 1 activo, cambiando a paso 2');
        /*Si la ventana uno esta activa quitar su 
        clase y la añadimos al segundo contenedor*/
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
//Evento que valida el primer formulario 
botonF1.addEventListener('click', function () {
    console.log('Botón form1 presionado');
    if (isValidInput()) {
        getButtonClick();
    }
});
//Evento que valida el segundo formulario
botonF2.addEventListener('click', function () {
    console.log('Boton form2 presionado');
    if (isValidCheckbox()) {
        getButtonClick();
        showData();
    }
})
/*3er script (Mostrar datos almacenados de los formularios)*/
function showData(){
    //Obtenemos span de cada formulario y cambiamos su contenido
    document.getElementById('f3opc1').textContent = DataName;
    document.getElementById('f3opc2').textContent = DataEmail;
    //Datos del segundo formulario (checkbox)
    document.getElementById('f3opc3').textContent = DataName;
    document.getElementById('f3opc4').textContent = DataEmail;
    document.getElementById('f3opc5').textContent = DataEmail;

}
/*4to script (Agregar efecto de pasos de página)*/



