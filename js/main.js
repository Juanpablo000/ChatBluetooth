let secciones = [];
let botones_menu = [];
let opciones;
const nombresID = ["nombre","apellidos","usuario","password"];
let arregloTextos = ["textNom","textApp","textUsr","texClr1"];	
const regulares = [/^[a-zA-ZÀ-ÿ\s]{2,20}$/, /^[a-zA-ZÀ-ÿ\s]{2,30}$/,/^[a-zA-Z0-9\_\-]{4,12}$/,/^[a-zA-Z0-9\_\-]{8,12}$/];
let arregloMensajePos = ["Nombre valido", "Apellidos validos","Usuario valido","Contraseña valida"];
let arregloMensaNeg = ["Nombre invalido", "Apellidos invalidos", "Usuario invalido","Contraseña invalida"];
let camposVal = [false,false,false,false,false];
                //nombre,apellidos,usuario, clave, conf clave,

window.onload = () => {
  ocultarAllSections()
  irA(0)
  iniciarVariables();
  verLogin();
  formularioR = document.getElementById("registro");iniciarVariables();
  //setTimeout(function () {
   //  irA(0);
  // }, 1000);
}

function ocultarAllSections() {
  let sections = document.getElementsByTagName('section')
  for (let section of sections)
    section.classList.add('ocultar');
}

function irA(val) {
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

function iniciarVariables() {

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

function validationF(inputName){
  var varInput =  document.getElementById(inputName).value;
  var tam = 5;
  //formularioR.length

  for(var i=0; i<tam; i++){
	    if(inputName.localeCompare(nombresID[i]) == 0){
	  	  var text = document.getElementById(arregloTextos[i]);
		    var pattern = regulares[i];
		  if(varInput.match(pattern)){
		  	text.innerHTML = arregloMensajePos[i];
			  text.style.color = "rgb(11, 112, 11)";
		    camposVal[i] = true;
        break;
        
		  }else{
		    text.innerHTML = arregloMensaNeg[i];
		    text.style.color = "#ff0000";
		    camposVal[i] = false;
		  }

		  if(varInput==""){
		  	camposVal[i] = false;
		    text.innerHTML="";
		    text.style.color = "#00ff00";
		  }
	    }
    }
}


function validarClaves(){
  
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  var text = document.getElementById("texClr2");
  var pattern = /^[a-zA-Z0-9\_\-]{8,12}$/;
	  if(password2.match(pattern) && password.localeCompare(password2) == 0){
		     text.innerHTML="Las contraseñas coinciden";
		     text.style.color = "rgb(11, 112, 11)";
		     camposVal[4]=true;
	  }else{
		    text.innerHTML="Las contraseñas no coinciden";
		    text.style.color = "#ff0000";
		    camposVal[4]=false;
	  }
	  if(password2==""){
	  	camposVal[4]=false;
	    text.innerHTML="";
	    text.style.color = "#00ff00";
	  }	
}

function val(){
	var i=-1;
	var t = camposVal.length;
	for(i=0; i<t;i++){
		if(camposVal[i]==false){
			break;
		}
	}
	if(i==5){
		return true;
	}else{
		alert("Campos incorrectos");
		return false;
	}
}
