let correctas = [2,4,4,3,2,2,4,1,2,1];

let respuestas = [];

let cantidad = 0;

var p0 = document.query("#p0");

function respuesta(pregunta, opcion) {
    respuestas[pregunta] = opcion.value;
    var id = "p" + pregunta;
    var opciones = document.getElementById(id).getElementsByTagName("input");
    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].parentNode.style.backgroundColor == "rgb(55, 99, 175)") {
        opciones[i].parentNode.style.backgroundColor = "#10122e";
      }
    }
    opcion.parentNode.style.backgroundColor = "#3763af";
  }

function revisar(){
    cantidad = 0;
    for(var i = 0; i < correctas.length; i++){
        if(correctas[i]==respuestas[i]){
            cantidad++;
            document.getElementById("p" + i).style.borderColor = "#adff2f";
        }
        else{
            document.getElementById("p" + i).style.borderColor = "red";
        }
    puntaje = cantidad*1;
    document.getElementById("resultado").innerHTML = puntaje;
}
}