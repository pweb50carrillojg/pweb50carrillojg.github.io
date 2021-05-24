"use strict";
var forma = document.getElementById("forma"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaGrupo = document.getElementById("salidaGrupo"),
    salidaMateria = document.getElementById("salidaMateria"),
    txtFecha = forma["fecha"], 
    salidaFecha = document.getElementById("salidaFecha"),
    salidaDatos = document.getElementById("salidaDatos");

function enviar(){
    var fecha = new Date(txtFecha.value),
        nombre = forma["nombre"].value.trim(),
        boleta = forma["boleta"].value.trim(),
        grupo = forma["grupo"].value.trim(),
        materia = forma["materia"].value.trim(),
        NuevaFecha;
        NuevaFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
        salidaDatos.textContent = "Nombre:" + nombre + " Boleta:" + boleta + " Materia:"+ materia + 
                                  " Grupo:" + grupo + " Fecha:" + NuevaFecha;
        }
