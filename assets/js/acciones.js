console.log("Hola Mundo desde JS en archivo acciones.js !!!");

// Voy a definir miVariable con un valor inicial de tipo number

let miVariable = 10;

/*
Este es un ejemplo de
comentario en 
múltiples líneas
 */

/*
console.log("El valor de miVariable es: " + miVariable);
console.log("El tipo de miVariable es: " + typeof(miVariable));

let numero = parseInt(prompt("Ingrese un número"));
let numero2 = numero;
let numero3 = numero;

for (let inicio = 1; inicio <= numero; inicio++){
    console.log("El valor de inicio es: " + inicio);
}

while (numero <= 10){
    console.log("En while el valor de numero es: " + numero);
    numero = numero + 1;
}

do {
    console.log("En do-while el valor de numero2 es: " + numero2);
    numero2 = numero2 + 1;
} while (numero2 < 10);

{
    let numeroMalo = numero3 / 0;
}

// console.log("numeroMalo: " + numeroMalo);

try {
    // console.log("numeroMalo: " + numeroMalo);
    if (numero3 != 7) {
        throw new Error("El número3 no es 7");
    } 
} catch (error) {
    console.log(error.name, error.message);
}
console.log("continua la ejecución del programa");
*/

let paises = ["Chile", "Argentina", "Paraguay"];
console.log("El largo del array es: " + paises.length);
console.log("paises: " + paises);
console.log("----------------");
console.log(paises);
console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);

for (let i = 0; i < paises.length; i++) {
    console.log("En for paises[" + i + "]: " + paises[i]);
}

// Agrega un elemento al final del array paises
console.log("Agrega un elemento al final del array paises");
paises.push("Brasil");
console.log(paises);

// Agrega un elemento al comienzo del array paises
console.log("Agrega un elemento al comienzo del array paises");
paises.unshift("Uruguay");
console.log(paises)

// Elimina el último elemento del array paises
console.log("Elimina el último elemento del array paises");
paises.pop();
console.log(paises);

// Elimina el primer elemento del array paises
console.log("Elimina el primer elemento del array paises");
paises.shift();
console.log(paises);

// Actualizar un país
console.log("Actualizar un país");
paises[1] = "Venezuela";

// Método foreach
paises.forEach((p, i) => {
    console.log("En paises.foreach pais: " + p);
    console.log("En paises.foreach indice: " + i);
});
