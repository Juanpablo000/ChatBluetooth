let secciones = [];
let botones_menu = [];
let botones_volver;
let opciones;

window.onload = inicio;

function inicio(){
	iniciarVariables();
	asignarEventosMenu();
	asignarVolver();
	setTimeout(function(){
		irA(0);
	},1000);
}

function asignarVolver(){
	botones_volver = document.querySelectorAll(".volver");
	for(var i of botones_volver)
	{
		i.addEventListener("click",function(evento){
			evento.preventDefault();
			irA(0);
		});
	}
}

function ocultar(){
	for (var i = 0; i < secciones.length; i++) 
	{
		secciones[i].classList.add("ocultar"); 
	}
}
function irA(id){
	if(id<0 || id>=secciones.length)
	{
		return;
	}
	ocultar();
	secciones[id].classList.remove("ocultar");
	
}

function iniciarVariables(){
    secciones.push(document.getElementById("Inicio"));
    secciones.push(document.getElementById("Registro"));
    secciones.push(document.getElementById("Escaner"));
    secciones.push(document.getElementById("ListaChats"));
    secciones.push(document.getElementById("ChatUsuario"));
    secciones.push(document.getElementById("MenuOpciones"));
    secciones.push(document.getElementById("EditarPerfil"));
    secciones.push(document.getElementById("EditarFoto"));
    secciones.push(document.getElementById("CambiarPassword"));
    secciones.push(document.getElementById("Acercade"));
}


function asignarEventosMenu(){
	for(var i of botones_menu)
	{
		//console.log(secciones[i],i);
		i.addEventListener("click",function(evento){
			//console.log(event.target);
			let seccion = evento.target.id.split("__")[1];
			irA(seccion);
		});
	}
}


