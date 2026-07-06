const lenguajes = ["HTML","CSS","JS","REACT"];

//recorri cada lenguaje
//HTML,
// CSS,
// JS,
// REACT
lenguajes.forEach((lenguaje) => {
    console.log(lenguaje);
})

//obtuve el UL
const ul = document.querySelector("ul");


//acá lo que hice fue renderizar con map cada lenguaje le añadi un elemento para que se pueda copiar el contenido
lenguajes.map((lenguaje) => {
    const li = document.createElement("li");

    li.textContent = lenguaje;

   
   return  ul.appendChild(li);

});

//finalmente retorne el ul
document.body.appendChild(ul);



//debo añadir a cada elemento la clase activo

lenguajes.forEach((lenguaje) => {
    const li = document.createElement("li");

    li.textContent = lenguaje,

    //añado la clase activo a cada li
    li.classList.add("activo");


    return ul.appendChild(li);
})

document.body.appendChild(ul);

//filter lo que hace no modifica el DOM, dice si un array se queda o no
//devuelve true o false
//li puede ser undefined
//con forEach transformamos y por cada elemento lo mostramos en la interfaz
lenguajes.filter(lenguaje => lenguaje.endsWith("S"))
.forEach(lenguaje => {
    const li = document.createElement("li");
    li.textContent = lenguaje;
    ul.appendChild(li);
})

document.body.appendChild(ul);