let secciones = [];
let botones_menu = [];
let opciones;

window.onload = () => {
  ocultarAllSections()
  gotTo(0)
  // iniciarVariables();
  // asignarEventosMenu();
  // asignarVolver();
  // setTimeout(function () {
  //   irA(0);
  // }, 1000);
}

function ocultarAllSections() {
  let sections = document.getElementsByTagName('section')
  for (let section of sections)
    section.classList.add('ocultar');
}

function gotTo(val) {
  if (val >= 0 && val < document.getElementsByTagName('section').length) {
    ocultarAllSections()
    document.getElementsByTagName('section')[val].classList.remove('ocultar')
  }
}

function asignarVolver() {
  let botones_volver = document.querySelectorAll(".volver");
  for (let i of botones_volver) {
    i.addEventListener("click", function (evento) {
      evento.preventDefault();
      irA(0);
    });
  }
}

// function ocultar() {
//   for (var i = 0; i < secciones.length; i++) {
//     secciones[i].classList.add("ocultar");
//   }
// }
// function irA(id) {
//   if (id < 0 || id >= secciones.length) {
//     return;
//   }
//   ocultar();
//   secciones[id].classList.remove("ocultar");

// }

// function iniciarVariables() {

//   secciones.push(document.getElementById("Inicio"));
//   secciones.push(document.getElementById("Registro"));
//   secciones.push(document.getElementById("Escaner"));
//   secciones.push(document.getElementById("ListaChats"));
//   secciones.push(document.getElementById("ChatUsuario"));
//   secciones.push(document.getElementById("MenuOpciones"));
//   secciones.push(document.getElementById("EditarPerfil"));
//   secciones.push(document.getElementById("EditarFoto"));
//   secciones.push(document.getElementById("CambiarPassword"));
//   secciones.push(document.getElementById("Acercade"));
// }


// function asignarEventosMenu() {
//   for (var i of botones_menu) {
//     //console.log(secciones[i],i);
//     i.addEventListener("click", function (evento) {
//       //console.log(event.target);
//       let seccion = evento.target.id.split("__")[1];
//       irA(seccion);
//     });
//   }
// }


