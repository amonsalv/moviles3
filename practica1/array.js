//1. Crear un arreglo de objetos, con el nombre inmueble, y la siguiente información: idinmueble, dirección, teléfono, precio y estado (disponible o no). Además, ingresar 10 inmuebles en este arreglo.

//Generar el arreglo de objetos
let inmuebles = [
    {idimbueble: '01', direccion: 'calle1', telefono:'312312', precio: 332, estado: true},
    {idimbueble: '02', direccion: 'calle2', telefono:'354335', precio: 243, estado: true},
    {idimbueble: '03', direccion: 'calle3', telefono:'315333', precio: 503, estado: false},
    {idimbueble: '04', direccion: 'calle4', telefono:'353242', precio: 345, estado: true},
    {idimbueble: '05', direccion: 'calle5', telefono:'334542', precio: 300, estado: false},
]

//referenciar elementos del html
let idimbueble = document.getElementById('idinmueble');
let mIdInmueble = document.querySelector('#mIdInmueble');

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
 idinmueble.addEventListener('focus',function(){
    midinmueble.textContent= "Id. inmueble es obligatorio"
})
idinmueble.addEventListener('blur',function(){
    midinmueble.textContent= ""
})

direccion.addEventListener('focus',function(){
    mdireccion.textContent= "la direccion es obligatorio"
})
direccion.addEventListener('blur',function(){
    mdireccion.textContent= ""
})

telefono.addEventListener('focus',function(){
    mtelefono.textContent= "El telefono es obligatorio"
})
telefono.addEventListener('blur',function(){
    mtelefono.textContent= ""
})

precio.addEventListener('focus',function(){
    mprecio.textContent= "El precio es obligatorio"
})
precio.addEventListener('blur',function(){
    mprecio.textContent= ""
})