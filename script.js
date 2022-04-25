function TomaDeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2022 - fecha;
  var bienvenida = document.querySelector("#bienvenida");
  
  var mensaje;
  var mensajeEdad;
 
  
  if (edad > 16) {
    mensajeEdad = "ya podes votar!";
  } 
  else if (edad < 16) {
    mensajeEdad = "aun no podes votar!";
  }
  else {
    mensajeEdad = "llegas justito para poder votar!!"
  }
  
  mensaje = "Hola " + nombre +
  "! Tenes " + edad + " años, " + mensajeEdad;
  
   bienvenida.textContent = mensaje;
}

var miFormulario = document.querySelector("#formulario");

miFormulario.addEventListener("submit", TomaDeDatos);