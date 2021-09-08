<?php
$usuarioRegistro = $_POST['usuario'];
$salt = "randomstringforsalt";
$password = $_POST['password'];
$md5 = md5($salt.$password);
$genero = $_POST['genero'];
$nombre = $_POST['nombre'];
$apellidos =  $_POST['apellidos'];
?>


<script type="text/javascript">
var usuarioR = '<?php echo $usuarioRegistro;?>';
var generoR = '<?php echo $genero;?>';
var nombreR = '<?php echo $nombre;?>';
var apellidoR = '<?php echo $apellidos;?>';
var datosMd5 = '<?php echo $md5;?>';
var contrl = true;


let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
		if(ListaUsuarios!=null){
		//validar usario unico
		var tm = ListaUsuarios.length;
		for(var i=0; i<tm;i++){
			alert('Yo ');
	        if(usuarioR == ListaUsuarios[i].usuario){
	            alert('El usuario ' + usuarioR +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
	}
		if (contrl!=false){
    	let persona = {
			nombre: nombreR,
			apellidos: apellidoR,
			usuario: usuarioR,
			genero: generoR,
            clave: datosMd5,
        };

        
	    if(!(ListaUsuarios instanceof Array)){
	        ListaUsuarios = []; 
	        ListaUsuarios.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(ListaUsuarios));
	    }else{
	        ListaUsuarios.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(ListaUsuarios));
	    }
	    alert('Su cuenta ha sido creada v:');
    }	
 window.location.href = '../';	
 </script>


		

