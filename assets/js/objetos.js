let auto = new Object();

auto.color = "rojo";
auto.numeroPuertas = 4;
auto.marca = "Samsung";

auto.acelerar = function () {
    console.log("El auto aceleró");
}
auto.frenar = function () {
    console.log("El auto frenó");
}

console.log(auto);
console.log("auto: " + auto);
console.log("auto: ", auto);
console.log(`auto: ${auto} 
    numeroPuertas: ${auto.numeroPuertas} 
    marca: ${auto.marca}`);
auto.frenar();

function Conductor(nombre, tipoLicencia, edad) {
    this.nombre = nombre;
    this.tipoLicencia = tipoLicencia;
    this.edad = edad;
}

function Auto(color, numeroPuertas, marca, conductor) {
    this.color = color;
    this.numeroPuertas = numeroPuertas;
    this.marca = marca;
    this.conductor = conductor;

    this.acelerar = function () {
        console.log(`El auto ${this.marca} aceleró`);
    }
    this.frenar = function () {
        console.log("El auto frenó");
    }
}

let conductor1 = new Conductor("Luis Ochoa", "B", 28);
console.log("conductor1: ", conductor1);

let miAuto1 = new Auto("Rojo", 4, "Nissan", conductor1);
let miAuto2 = new Auto("Negro", 2, "Suzuki", conductor1);
console.log("miAuto1: ", miAuto1);
console.log("miAuto2: ", miAuto2);
miAuto1.conductor.tipoLicencia = "A1";
console.log("miAuto1: ", miAuto1);
console.log("miAuto2: ", miAuto2);

let conductor2 = new Conductor("Jorge Ochoa");
console.log("conductor2: ", conductor2);
conductor2.tipoLicencia = "A2";
conductor2.edad = 33;
console.log("conductor2: ", conductor2);

