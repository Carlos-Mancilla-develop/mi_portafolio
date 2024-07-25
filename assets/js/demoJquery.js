// Ya que usamos esta funcionalidad de jquery 
// podemos importar nuestro archivo js en el head del html
$(document).ready(function () {
    // El código escrito acá se ejecutará luego de que 
    // se carguen los elementos de la página web 

    // Retornará un arreglo con todos loscomponentes con la etiqueta correspondiente 
    // $("selectorPorEtiqueta");
    // Retornará un arreglo con todos los componentes con la clase correspondiente 
    // $(".selectorPorClase"); 
    // Retornará el primer elemento encontrado con el id correspondiente
    // $("#selectorPorId"); 

    let miTexto = $("#contenido").text();
    alert(miTexto); 

    miTexto = $("#contenido").html();
    alert(miTexto); 

    let miAtributo = $("#nombre").attr("type");
    alert(miAtributo);

    $("#caja1").mouseenter(function () {
        $("#caja2").toggle();
    });

    /*
    $("#caja1").mouseout(function () {
        $("#caja2").hide();
    });
    */

    $("#boton").click(function () {
        const nombre = $("#nombre").val();
        const correo = $("#correo").val();
        alert("su nombre es: " + nombre + " y su correo es: " + correo);
        $("#texto").text("su nombre es: " + nombre + " y su correo es: " + correo);
    });

    $("#boton1").click(function(){
        $("#contenido").css("background-color", "greenyellow");
    });

    $("#boton2").click(function(){
        $("#texto").text("Texto escrito usando JQuery");
    });
    
    $("#boton1").dblclick(function () {
        $("#contenido").css("background-color", "white");
        $("#texto").text("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus"
        + "doloremque rerum corrupti eveniet, quis quas nam quisquam,"
        + "magnam consequuntur ipsa aspernatur reprehenderit repellendus delectus voluptates veniam"
        + "odio, adipisci aliquam!");
    });
       
});
