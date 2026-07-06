//Obtencion de los datos del formulario
const formulario = document.querySelector("#formulario");

const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const activo = document.querySelector("#activo");
const pais = document.querySelector("#pais");
const button = document.querySelector("button");

console.log(edad);

// con esto puedo ocultar el input con hidden
// edad.hidden = true;

//console.log(nombre.value);

//Verificar si esta activo o no el input
console.log(activo.checked)


//verificar la posicion del select
console.log(pais.selectedIndex);

//obtener todas las opciones
//Devuelve un HTMLOptionsCollection
console.log(pais.options);


//se recorre cada opcion
Array.from(pais.options).forEach(opcion => {
    console.log(opcion.text);
});


//cambiar el texto de cada boton
Array.from(pais.options).forEach(opcion => {
    opcion.textContent = "Brasil";
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})


button.addEventListener("click", cambiarNombre());


button.addEventListener("click", seleccionarCheckbox());


function cambiarNombre(){
    nombre.value = "Juan";
}

function seleccionarCheckbox(){
    activo.checked = true;
}


const caja = document.querySelector(".caja");


caja.addEventListener("mouseenter" , () => {
    caja.classList.add("cajaEstilizada");
})

caja.addEventListener("mouseleave", () => {
    caja.style.border = "2px solid black";
})



const opciones = Array.from(pais.options);

console.log(opciones);


pais.addEventListener("mouseover", () => {
    pais.style.position = "absolute";
    pais.style.right = "-80px";
})
