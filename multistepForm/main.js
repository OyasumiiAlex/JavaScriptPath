/*File to add interactivity*/
const inName = document.getElementById('nombre');
const inEmail = document.getElementById('correo');
const checkboxs = document.querySelectorAll('.container input[type= "checkbox"]');
const botonF1 = document.getElementById('changeform1');
const botonF2 = document.getElementById('changeform2');
const botonF3 = document.getElementById('send-form');
//Variables globales
let DataCheckbox = '';

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
    //Mandamos a llamar a la variable global
    DataCheckbox = '';
    //Creamos una variable para guardar el estado de checkbox
    let opcchecked = false;
    //Realizamos un recorrido por los checkbox
    checkboxs.forEach(checkbox => {
        //validamos checkbox
        if (checkbox.checked) {
            opcchecked = true;
            /*Almacenamos el texto de la opcion seleccionada
            += operador asignacion compuesta
            parentElement obtiene el elemnto padre del checkbox = label
            trim elimina espacios*/
            DataCheckbox += checkbox.parentElement.textContent.trim() + ', ';
        }
    });
    /*Si ninguno esta en estado checked*/
    if (!opcchecked) {
        alert('Seleccione al menos una opción');
        return false;
    } else {
        /*regex: ",": Busca una coma; "\s": Busca cero o mas espacios en blanco; 
        "$": Indica el final de la cadena*/
        DataCheckbox = DataCheckbox.replace(/,\s*$/, '');
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
        changeDot();
    }
});
//Evento que valida el segundo formulario
botonF2.addEventListener('click', function () {
    console.log('Boton form2 presionado');
    if (isValidCheckbox()) {
        getButtonClick();
        showData();
        changeDot();
    }
})
botonF3.addEventListener('click', function () {
    console.log('Boton form3 presionado');
    alert('Formulario enviado!');
});
/*3er script (Mostrar datos almacenados de los formularios)*/
function showData() {
    //Obtenemos span de cada formulario y cambiamos su contenido
    document.getElementById('f3opc1').textContent = DataName;
    document.getElementById('f3opc2').textContent = DataEmail;
    //Datos del segundo formulario (checkbox)
    document.getElementById('f3opc3').textContent = DataCheckbox;

}
/*4to script (Agregar efecto de pasos de página)*/
function changeDot(){
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const dot3 = document.getElementById('dot3');
    if (dot1.classList.contains('on')) {
        dot1.classList.remove('on');
        dot2.classList.add('on');
    }else if(dot2.classList.contains('on')){
        dot2.classList.remove('on');
        dot3.classList.add('on');
    }
}


