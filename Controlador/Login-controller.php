<?php
session_start();

if($_SERVER['REQUEST_METHOD']=='POST'){
	$username = $_POST['user'];
	$uassword = $_POST['password'];

	require_once '../Config/conexion.php';
	require_once '../Modelo/login-model.php';

			$objBuscarUser = new ConsultasLogin();
			$ResBuscarUsuario = $objBuscarUser->ObtenerDatos($username);
			$RowBuscarUsuario = $ResBuscarUsuario->fetchObject();
			$TotalUser = $RowBuscarUsuario->totalFilas;
			//Verificar si el usuario esta dado de alta en la base de datos -> DNMX_LOTCONTROL
			if ($TotalUser > 0) {
				$ResTotal = $objBuscarUser->ObtenerUsuarioExistente($username, $password);
				$Row = $ResTotal->fetchObject();
				$Total = $Row->total;
				//Verifica que las credenciales sean correctas, Nomina y Password
				if ($Total > 0) {
					$resultado_login = $objBuscarUser->ObtenerUsuarioLogin($Username, $Password);
					$Login = $resultado_login->fetchObject();
					$tipo = $Login->id_tipoUsuario;

					$_SESSION['id_user']= $Login->id_user_lcs;
					$_SESSION['id_departamento']= $Login->id_departamento_lcs;
					$_SESSION['nombre']= $Login->nombre_lcs;
					$_SESSION['apellidopaterno']= $Login->apellido_p_lcs;
					$_SESSION['apellidomaterno']= $Login->apellido_m_lcs;
					$_SESSION['NoNomina']= $Login->nomina_lcs;
					$_SESSION['id_tipoUsuario']= $Login->id_tipo_usuario_lcs;
					$_SESSION['id_planta']= $Login->id_planta_lcs;

				//End if Verifica que las credenciales sean correctas, NumeroNomina y Contraseña
				}else{
					echo 'Usuario y contraseña incorrectos';
					//echo "<script>location.href='../login.php'</script>";
				}
			//End IF Verificar si el usuario esta dado de alta en la base de datos LDBSystem
			}else{
			   echo 'El usuario no esta dado de alta en la base de datos de LDBSystem, Verifica con el administrador';
				//echo "<script>location.href='login.php'</script>";
			}
		//END IF Comprabar el estatus en base de datos denso
		//}else{
		//	echo '<script>alert("El usuario ha sido dado de baja, Verificar con el Administrado")</script>';
		//	echo "<script>location.href='../login.php'</script>";
		//}
	// End IF Verificamos si existe el usuario en la base de datos Denso
	//}else {
	//	echo '<script>alert("El usuario o contraseña son incorrectos")</script>';
	//	echo "<script>location.href='../login.php'</script>";
	//}
}
?>