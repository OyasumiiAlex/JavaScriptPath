/*File to add interactivity*/
/*Obtener elementos*/
const container1 = document.getElementById("step1");
const container2 = document.getElementById("step2");



/*Funtion change container*/
function changeContainer(step1, step2) {
    //Ocultar la ventana actual
    document.getElementById(step1).classList.remove('active');
    //Muestra el siguiente formulario
    document.getElementById(step2).classList.add('active');
}

/*Almacenar los datos*/
let formData = {};

function saveData(step1, step2){
    //Datos del primer formulario
    formData.name = document.getElementById('nombre').value;
    formData.name = document.getElementById('correo').value;
    //Datos del segundo formulario
    formData.options = [];
    document.querySelectorAll('.containeropc input[type="checkbox"]').forEach(checkbox =>{
        if(checkbox.checked){
            formData.options.push(checkbox.nextSibling.nodeValue.trim());
        }
    });
    // Ocultar la ventana actual
    document.getElementById(step1).classList.remove('active');
    // Mostrar el siguiente formulario
    document.getElementById(step2).classList.add('active');
}

