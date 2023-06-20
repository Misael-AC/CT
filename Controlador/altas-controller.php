<?php
@session_start();
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 0;
}

require_once "../Config/conexion.php";
require_once "../Modelo/altas_model.php";

$hoy = date('Y-m-d');
$id_empleado = 1;

$obtener = new queryObtener();
$insertar = new queryInsertar();
$actualizar = new queryActualizar();
$eliminar = new queryEliminar();

switch ($page) {
    case 1:
        try {
            $response = $obtener->obtenerModelosDisp();
            echo "<option value='0'>Seleccione un modelo</option>";
            foreach ($response as $row) {
                echo "<option value='" . $row[0] . "'>" . $row[4] . "</option>";
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 2:
        try {
            $response = $obtener->obtenerModelos($_POST['idSelect']);
            foreach ($response as $row) {
                echo $row['id_modelos_lcs'];
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 3:
        try {
            $response = $insertar->insertarCambioModelo($_POST['nomina'], $_POST['id_modelos_lcs']);
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 4:
        try {
            $response = $obtener->obtenerModeloActual();
            foreach ($response as $row) {
                echo $row['num_term_mod_lcs'];
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 5:
        try {
            $response = $insertar->InsertarAlta($_POST['nombreComponente'], $_POST['terminacionComponente'], $_POST['numeroPallet'], $_POST['pzs']);
            if ($response) {
                $update_response = $actualizar->AltaActualizarEstadoActual($_POST['id_modelo_actual'], $_POST['pzs']);
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 6:
        try {
            $response = $obtener->EstadoActual($_POST['id_modelo_actual']);
            $array = array();

            foreach ($response as $row) {
                foreach ($row as $key => $value){
                    if (!is_numeric($key)){
                        $array[$key] = $value;
                    }
                }
            }

            if ($array == []) {
                $array = null;
                echo "No se encuentra el estado actual del modelo actual";
            } else {
                echo json_encode($array);
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 7:
        try {
            $response = $obtener->DatosModeloActual();
            $array = array();

            foreach ($response as $row) {
                foreach ($row as $key => $value){
                    if (!is_numeric($key)){
                        $array[$key] = $value;
                    }
                }
            }

            if ($array == []) {
                $array = null;
                echo "No hay registros de cambios de ningún modelo en la línea";
            } else {
                echo json_encode($array);
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;
        
    case 8:
        try {
            @session_start();
            if ($_POST)
            {    
                // TODO: OPCIÓN 1 - Validar el Código Qr ingresado mediante $_POST['entradaQr'] 
                //       no sea el mismo que el anterior $_SESSION['escaneoAnterior'] 
                if ($_SESSION['escaneoAnterior'] != $_POST['entradaQR']){
                    $_SESSION['escaneoAnterior'] = $_POST['entradaQR'];
                    // echo "Ahora el escanero anterior: ". $_SESSION['escaneoAnterior']." es igual a la Entrada QR: ".$_POST['entradaQR'];
                    http_response_code(200); // Ok
                } else {
                    // echo "La Entrada QR: ". $_POST['entradaQR']." es la misma que el escaneo anterior: ". $_SESSION['escaneoAnterior'];
                    http_response_code(400); //Bad request
                }
            }     
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;
    case 9:
        try {
            // TODO: OPCIÓN 2 - Validar el Código Qr ingresado mediante consultas a la base de datos de entradas y salidas a cada tabla
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

}
?>
