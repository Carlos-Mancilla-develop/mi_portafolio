let selectorId = document.getElementById("parrafo");
console.log("selectorId: ", selectorId);

let selectorEtiqueta = document.getElementsByTagName("h1");
console.log("selectorEtiqueta: ", selectorEtiqueta);

let selectorClass = document.getElementsByClassName("contenedor");
console.log("selectorClass: ", selectorClass);

for (let i = 0; i < selectorClass.length; i++) {
    console.log(`selectorClass[${i}].innerHTML`, selectorClass[i].innerHTML);
}

// En este caso se obtiene el primer div del documento estamos trabajando
let selectorVarios = document.querySelector(".contenedor");
console.log("selectorVarios: ", selectorVarios);

let selectorTodos = document.querySelectorAll(".contenedor");
console.log("selectorTodos: ", selectorTodos);

let contenidoHTMLSelectorId = selectorId.innerHTML;
console.log("contenidoHTMLSelectorId: ", contenidoHTMLSelectorId);

// Se crea el elemento párrafo
let creandoElemento = document.createElement("p");
creandoElemento.textContent = "Este nodo fue creado desde JavaScript";

// Se agrega en en documento indicando en este caso en el body
document.body.appendChild(creandoElemento);

// Se crea el elemento párrafo
let creandoElemento2 = document.createElement("p");
creandoElemento2.textContent = "Este nodo fue creado desde JavaScript 2";

// Se agrega párrafo al primer div
selectorVarios.appendChild(creandoElemento2);

let indice = 0;
// Viene de los selectores de clase
for (let nodo of selectorClass) {
    indice++;
    let creandoElementoFor = document.createElement("p");
    creandoElementoFor.setAttribute("id", "nodo" + indice);
    creandoElementoFor.textContent = "Este nodo fue creado desde JavaScript desde for of";
    nodo.appendChild(creandoElementoFor);
}

// se selecciona el primer div
let nodoPadre = document.querySelector(".contenedor");
// selecciona nodo hijo por id
let nodoHijo = document.querySelector("#parrafo");
// borra el nodo hijo
nodoPadre.removeChild(nodoHijo);
let nodosHijos = nodoPadre.childNodes;

console.log("nodoPadre: ", nodoPadre);
console.log("nodosHijos: " , nodosHijos);

let nodosHijosCopia = [];

for (let nodo of nodosHijos) {
    console.log("nodo: ", nodo);
    nodosHijosCopia.push(nodo);
}

// removemos los nodos
for (let nodoCopia of nodosHijosCopia) {
    console.log("nodoCopia: ", nodoCopia);
    nodoPadre.removeChild(nodoCopia);
}

/*
// restauramos los nodos
for (let nodoCopia of nodosHijosCopia) {
    console.log("nodoCopia: ", nodoCopia);
    nodoPadre.appendChild(nodoCopia);
}
*/

/*
nodosHijosCopia.forEach(function (nodoCopia) {
    console.log("nodoCopia: ", nodoCopia);
    nodoPadre.removeChild(nodoCopia);
});
*/



