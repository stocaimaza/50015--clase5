/* Clase 5 - NPM */

/*
Temas de hoy: 
    - Node JS. 
    - NPM
    - Crear un proyecto desde 0 con NPM. 
    - Conceptos importantes. 


*/

//¿Qué es un módulo? 
//Modulo = es un archivo de JS que contiene un conjunto de funciones que nos permite resolver una tarea en particular. 

//1) Modulos escritos por nosotros: 

//¿De que forma vinculamos estos modulos? 

//CommonJS:

// const saludos = require("./saludos.js");

// saludos.temprano();

// saludos.tarde();

// saludos.noche();


//ES Module. Este cambio llegó en el año 2015. 

//Acá lo tengo que importar: 

import { temprano, tarde, noche } from "./saludos.js";

temprano();

tarde();

noche();

//2) Modulos nativos de Node JS: 
//Recuerden que estos módulos son los que vienen por defecto en Node JS. Y ya contienen un conjunto de funciones que nos permite resolver una tarea específica. 

//Alguno de los más utilizados: 

//fs: para trabajar con el sistema de archivos. 
//http: para crear servidores web. 
//crypto: para trabajar con encriptación de datos. 
//timers: setInterval setTimeout. 
//console: para mostrar mensajes por consola.
//path: para trabajar con rutas de archivos. 

//3) Trabajar con Modulos de Terceros: NPM.

//¿Que es un paquete? Es un conjunto de módulos que resuelven una tarea en particular. Siempre los paquetes van a tener un archivito packaje.json

//Pasos para instalar un paquete: 

//npm install nombrePaquete
//npm i nombrePaquete

//Vamos a instalar el paquet moment que me permite manejar fechas: 

//Dependencia: son aquellos paquetes que necesita mi proyecto para funcionar. 

//Para desistalar utilizo npm uninstall nombreDependencia

//Dependencias de desarrollo: son aquellas que solo necesitamos para desarrollar nuestra aplicación. Por ejemplo: nodemon (nodemon me permite reiniciar el servidor cada vez que hago un cambio en el código). 

//¿Cómo lo instalo? npm i nodemon -D

//SCRIPS: son conjunto de comandos que nos permite ejecutar tareas en nuestro proyecto. 