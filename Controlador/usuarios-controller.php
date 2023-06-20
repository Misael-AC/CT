<?php
@session_start();
if (isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = 0;
}

require_once '../Config/conexion.php';
require_once '../Modelo/usuarios_model.php';

if ($_SESSION['id_role'] == 1) {
    switch ($page) {

        case 1:
            try {
                $objConsulta = new classQueries();
                $resultado = $objConsulta->MostrarUsuarios();
                $array = array();

                foreach ($resultado as $row) :
                    $array["data"][] = $row;

                endforeach;

                if ($array == []) {
                    $array = null;
                    echo '{"sEcho": 1,"iTotalRecords": "0","iTotalDisplayRecords": "0","aaData": []}';
                } else {
                    echo json_encode($array);
                }
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;

        case 2:
            try {
                $params = $_POST;
                $nomina_lcs = $_POST['nomina_lcs'];
                $objConsulta = new classQueries();
                $ResBuscarUsuario = $objConsulta->ObtenerDatos($nomina_lcs);
                $RowBuscarUsuario = $ResBuscarUsuario->fetchObject();
                $TotalUser = $RowBuscarUsuario->totalFilas;
                if ($TotalUser >= 1) {
                    // echo 'El usuario ya está dado de alta en la base de datos de Lot Control System, verifica con el administrador<br>';
                    http_response_code(400); //Bad request
                    // TODO: Hacer que se lea el código de respuesta http desde ajax y front, al igual cuando sale CREATED: 201.
                } else {
                    $objInserta = new classInserts();
                    $objInserta->GuardarUsuario($params);
                    // echo 'Se ha registrado un usuario nuevo<br>';
                    http_response_code(201); // Created
                }
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;

        case 3:
            try {
                // $params = $_POST;
                $id_usuario_lcs = $_POST['id_usuario_lcs'];
                $nomina_lcs = $_POST['nomina_lcs'];
                $nombre_lcs = $_POST['nombre_lcs'];
                $apellido_p_lcs = $_POST['apellido_p_lcs'];
                $apellido_m_lcs = $_POST['apellido_m_lcs'];
                $password_lcs = $_POST['password_lcs'];
                $id_tipo_emp_lcs = $_POST['id_tipo_emp_lcs'];
                $id_puesto_lcs = $_POST['id_puesto_lcs'];
                $id_area_lcs  = $_POST['id_area_lcs'];
                $id_planta_lcs = $_POST['id_planta_lcs'];
                $id_departamento_lcs = $_POST['id_departamento_lcs'];

                $objActualizar = new classUpdates();
                $objActualizar->EditarUsuario($nomina_lcs, $nombre_lcs, $apellido_p_lcs, $apellido_m_lcs, $password_lcs, $id_tipo_emp_lcs, $id_puesto_lcs, $id_area_lcs, $id_planta_lcs, $id_departamento_lcs, $id_usuario_lcs);
                // TODO: Optimizar la función editar que reciba directamente los parametros del POST.
                // $objActualizar->EditarUsuarioConArray($params);
                // echo 'Se ha editado el usuario<br>';
                http_response_code(200); // OK
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;

        case 4:
            try {
                $id_usuario_lcs = $_POST['id_usuario_lcs'];
                $objConsulta = new classQueries();
                $resultado = $objConsulta->TraeUsuarioAEditar($id_usuario_lcs);
                $array = array();

                foreach ($resultado as $row) :
                    $array = $row;
                endforeach;

                if ($array == []) {
                    $array = null;
                    echo '{"sEcho": 1,"iTotalRecords": "0","iTotalDisplayRecords": "0","aaData": []}';
                } else {
                    echo json_encode($array);
                }
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;
    }
}
?>

