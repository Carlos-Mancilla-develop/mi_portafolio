function saludo () {
    alert("Hola Mundo");
}

// Como usamos window.onload podemos importar 
// el archivo js en el head del html 
window.onload = function () {
    let muestraMensaje = false;
    let mensaje = "";
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("nombre")) {
        const name = searchParams.get("nombre");
        console.log(name);
        muestraMensaje = true;
        mensaje += "<p>El nombre es " + name + "</p>";
    }
    if (searchParams.has("direccion")) {
        const direccion = searchParams.get("direccion");
        console.log(direccion);
        muestraMensaje = true;
        mensaje += "<p>La dirección es " + direccion + "</p>";
    }
    if (muestraMensaje) {
        document.getElementById("info").innerHTML = mensaje;
    }

    document.getElementById("info").addEventListener("click", function () {
        document.getElementById("info").innerHTML = "este es el nuevo texto";
    });

    saludo();
}