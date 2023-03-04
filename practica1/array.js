//1. Crear un arreglo de objetos, con el nombre inmueble, y la siguiente información: idinmueble, dirección, teléfono, precio y estado (disponible o no). Además, ingresar 10 inmuebles en este arreglo.

//Generar el arreglo de objetos
let inmuebles = [
    { idimbueble: '01', direccion: 'calle1', telefono: '312312', precio: 332, estado: true },
    { idimbueble: '02', direccion: 'calle2', telefono: '354335', precio: 243, estado: true },
    { idimbueble: '03', direccion: 'calle3', telefono: '315333', precio: 503, estado: false },
    { idimbueble: '04', direccion: 'calle4', telefono: '353242', precio: 345, estado: true },
    { idimbueble: '05', direccion: 'calle5', telefono: '334542', precio: 300, estado: false },
]

//referenciar elementos del html
let idimbueble = document.getElementById('idimueble');
let mIdImueble = document.querySelector('#mIdImueble');

let direccion = document.getElementById('direccion');
let mdireccion = document.querySelector('#mdireccion');

let telefono = document.getElementById('telefono');
let mtelefono = document.querySelector('#mtelefono');

let precio = document.getElementById('precio');
let mprecio = document.querySelector('#mprecio');

let disponible = document.getElementById('disponible');
let nodisponible = document.querySelector('#nodisponible');

let enviar = document.getElementById('enviar');
let guardar = document.getElementById('guardar');
let listar = document.getElementById('listar');

//Eventos

// evento mostrar mensajes 
idimbueble.addEventListener('focus', function () {
    mIdImueble.textContent = "Id. inmueble es obligatorio"
})
mIdImueble.addEventListener('blur', function () {
    mIdImueble.textContent = ""
})

direccion.addEventListener('focus', function () {
    mdireccion.textContent = "la direccion es obligatorio"
})
direccion.addEventListener('blur', function () {
    mdireccion.textContent = ""
})

telefono.addEventListener('focus', function () {
    mtelefono.textContent = "El telefono es obligatorio"
})
telefono.addEventListener('blur', function () {
    mtelefono.textContent = ""
})

precio.addEventListener('focus', function () {
    mprecio.textContent = "El precio es obligatorio"
})
precio.addEventListener('blur', function () {
    mprecio.textContent = ""
})

//Enviar
enviar.addEventListener('click', () => {

    //buscar idimueble
    let encuentra = inmuebles.find(item => item.idimbueble == idimbueble.value);
    if (encuentra==undefined){ //no lo encuentra
        //Agregar el objeto en el arreglo de objetos (inmuebles)
    idimbueble.push({
        idimbueble: idimbueble.value,
        direccion: direccion.value,
        telefono: telefono.value,
        precio: precio.value,
        estado: disponible, checked
    })

    console.log(inmuebles);
    

    }

    
});


function agregarInmueble() {
    // Leer los valores ingresados por el usuario
    let idinmuebleValor = idimbueble.value;
    let direccionValor = direccion.value;
    let telefonoValor = telefono.value;
    let precioValor = precio.value;
    let estadoValor = disponible.checked;

    // Validar que se haya ingresado la información requerida
    if (!idinmuebleValor || !direccionValor || !telefonoValor || !precioValor) {
        alert('Debe ingresar la información requerida');
        return;
    }

    // Crear un nuevo objeto inmueble con los valores ingresados por el usuario
    let nuevoInmueble = {
        idinmueble: idinmuebleValor,
        direccion: direccionValor,
        telefono: telefonoValor,
        precio: precioValor,
        estado: estadoValor
    };

    // Agregar el nuevo objeto inmueble al arreglo de inmuebles
    inmuebles.push(nuevoInmueble);

    // Limpiar los campos del formulario
    idinmueble.value = '';
    direccion.value = '';
    telefono.value = '';
    precio.value = '';
    disponible.checked = false;

    // Notificar al usuario que se ha agregado el nuevo inmueble
    alert('Inmueble agregado correctamente');
}
