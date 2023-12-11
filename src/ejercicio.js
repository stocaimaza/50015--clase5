/* Calculadora de Edad */

/*1) Instalen moment: npm install moment*/

//2)Importamos la dependencia moment: 

const moment = require("moment");

//Variable que tenga la fecha actual. 

const fechaActual = moment();

//Variable de la fecha de mi nacimiento: 

const fechaNacimiento = moment("1987-03-10");

//Validar si la fecha es válida: 

if (fechaNacimiento.isValid()) {
    const diasPasados = fechaActual.diff(fechaNacimiento, "days");

    //Mostramos por consola: 
    console.log(`Pasaron ${diasPasados} desde que llegue a este hermoso mundo hasta hoy`);
} else {
    console.log("La fecha que pusiste esta re mal amigooooo");
}


