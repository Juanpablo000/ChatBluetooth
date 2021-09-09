<?php 
	  //datos obtenidos en el login
	  $usuarioLogin = $_POST['userA'];
	  $salt = "randomstringforsalt";
	  $passwordLogin = $_POST['claveA'];
	  $md5L = md5($salt.$passwordLogin);
?>

<script type="text/javascript">

	let userL = '<?php echo $usuarioLogin;?>';
    let Md5L = '<?php echo $md5L;?>';
    let variable = 1;


	let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
	if(ListaUsuarios!=null){
		var tm = ListaUsuarios.length;
		for(var i=0; i<tm;i++){

			var string1 = ListaUsuarios[i].usuario;
			var result = string1.localeCompare(userL);

			var string2 = ListaUsuarios[i].clave;
			var result2 = string2.localeCompare(Md5L);

			if(result == 0 && result2 == 0){
				variable = -1;
				break;
			}
		}

		const validador = {
			usuario: userL,
			acceso: variable,
    	}
		window.localStorage.setItem("validador",JSON.stringify(validador));  

		if(variable==1){
			alert('Error en el login');
		}else if(variable== -1){
			alert('Has iniciado sesion');
		}
		window.location.href = '../';
		
	}else{
		alert('No se ha registrado');
		window.location.href = '../';
	}
</script>