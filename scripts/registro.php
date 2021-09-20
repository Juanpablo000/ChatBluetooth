<?php
$usuarioAcceso = $_POST['userA'];
?>

<script type="text/javascript">
var usuarioR = '<?php echo $usuarioAcceso;?>';
var contrl = true;


let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
	if(ListaUsuarios!=null){
		//validar usario unico
		var tm = ListaUsuarios.length;
		for(var i=0; i<tm;i++){
	        if(usuarioR == ListaUsuarios[i].usuario){
	            alert('El usuario ' + usuarioR +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
	}
		if (contrl!=false){
    	let persona = {
			usuario: usuarioR,
        };

        
	    if(!(ListaUsuarios instanceof Array)){
	        ListaUsuarios = []; 
	        ListaUsuarios.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(ListaUsuarios));
	    }else{
			window.localStorage.clear()
			ListaUsuarios = []; 
	        ListaUsuarios.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(ListaUsuarios));
	    }
	    alert('Usuario agregado');
    }	
 window.location.href = '../';	
 </script>


		

