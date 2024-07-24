function mostrarMensaje() {
    document.getElementById('caja2').style.display = "block";
}

function ocultaMensaje() {
    document.getElementById('caja2').style.display = "none";
}

function cambiarFondo() {
    document.getElementById("contenido").style.backgroundColor = "blue";
}

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "este es el nuevo texto";
}

function volver(){
    document.getElementById("contenido").style.backgroundColor = "coral";
}

document.getElementById("caja1").addEventListener("mouseover", mostrarMensaje);
document.getElementById("caja1").addEventListener("mouseleave", ocultaMensaje);
document.getElementById("boton1").addEventListener("click", cambiarFondo);
document.getElementById("boton1").addEventListener("dblclick", volver);
document.getElementById("boton2").addEventListener("click", function () {
    document.getElementById("texto").innerHTML = "este es el nuevo texto";
});
