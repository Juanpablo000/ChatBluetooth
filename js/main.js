window.onload = () => {
	ocultarAllSections()
	val2()
}


function ocultarAllSections() {
  let sections = document.getElementsByTagName('section');
  for (let section of sections)
    section.classList.add('ocultar');
}

function irA(val) {
  if (val >= 0 && val < document.getElementsByTagName('section').length) {
    ocultarAllSections()
    document.getElementsByTagName('section')[val].classList.remove('ocultar')
  }
}


function validar(){
	var nom = document.getElementById("userA").value;
	
	if(nom!=""){
		irA(1);
	}
	return (false);
}

function mensajeSalida(){
	var message = document.getElementById("msg").value;
	const div = document.createElement('div');
	var nom = document.getElementById("userA").value;

	var time = new Date();
	hora=time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase();


	if(message != ""){
		div.classList.add('message');
		div.innerHTML = `<p class="meta">${nom} <span>${hora}</span></p>
		<p class="text">
			${message}
		</p>`;
		document.querySelector('.chat-messages').appendChild(div);
		document.getElementById("msg").value = '';
	}else{
		alert("No se permiten mensajes vacios");
	}
	return (false);
}


function val2(){
	var nom = document.getElementById("userA").value;
	if(nom!=""){
		irA(1)
	}else{
		irA(0)
  }
}
