<?php
@session_start();
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 0;
}

require_once "../Config/conexion.php";
require_once "../Modelo/escaneo_cajas_model.php";
$hoy = date('Y-m-d');
$id_empleado = 1;

$obtener = new queryObtener();
$insertar = new queryInsertar();
$actualizar = new queryActualizar();
$eliminar = new queryEliminar();
$select = new queryInsertupdate();

switch ($page) {

    case 1:
        try {
            $array = array();

            if($_POST)
            {
                foreach ($_POST as $key => $value) {
                    if (empty($value)){
                        $_POST[$key] = NULL;
                    }
                }
            } else {
                $resultado = $obtener->MostrarInventario();
            }

            foreach ($resultado as $row) :
                // $array[] = $row;
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
            $resultado = $obtener->MostrarLineas();
            echo json_encode($resultado);
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 3:
        try {
            $resultado = $obtener->MostrarModelos();
            echo json_encode($resultado);
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
                foreach ($row as $key => $value) {
                    if (!is_numeric($key)) {
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

    case 8:
        try {
            @session_start();
            if ($_POST) {
                // TODO: OPCIÓN 1 - Validar el Código Qr ingresado mediante $_POST['entradaQr'] 
                //       no sea el mismo que el anterior $_SESSION['escaneoAnterior'] 
                if ($_SESSION['escaneoAnterior'] != $_POST['entradaQR']) {
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

    case 11:
        try {
            // $response = $insertar->insertcaja($_POST['Linea'], $_POST['Nombre'], $_POST['rango'], $_POST['modelo'], $_POST['inv_min']);
            $response = $select->selectInv1($_POST['Linea'], $_POST['Nombre'], $_POST['rango'], $_POST['modelo'], $_POST['inv_min'] - 1);

            $response = $obtener->Verificar2($_POST['Linea'], $_POST['Nombre'], $_POST['rango'], $_POST['modelo']);

            foreach ($response as $row) {
                if ($row['inv_min'] < $row['inv_max']) {
                    if ($response) {

                        $response = $select->selectInv1($_POST['Linea'], $_POST['Nombre'], $_POST['rango'], $_POST['modelo'], $_POST['inv_min']);

                        echo 'GOOD';
                    }
                } else {
                    // $response = $select->selectInv1($_POST['Linea'], $_POST['Nombre'], $_POST['rango'], $_POST['modelo'], $_POST['inv_min']-1);
                    echo "BAD";
                    http_response_code(400); //Bad request                    
                }
            }
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 12:
        try {
            $response = $select->selectInv1($_POST['Linea'], $_POST['Nombre'], $_POST['rango'], $_POST['modelo'], $_POST['inv_min']);
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;
}
?>