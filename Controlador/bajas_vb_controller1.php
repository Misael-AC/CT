<?php
@session_start();
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 0;
}

require_once "../Config/conexion.php";
require_once "../Modelo/bajas_vb_model1.php";

$hoy = date('Y-m-d');
$id_empleado = 1;

$obtener = new queryObtener();
$insertar = new queryInsertar();
$actualizar = new queryActualizar();
$eliminar = new queryEliminar();

switch ($page) {
    case 6:
        try {

            // $response = $insertar->Insertar_sleeve($_POST['terminacionComponente'], $_POST['numeroPallet'], $_POST['pzs']);
            // $response = $obtener->selectInv1($_POST['numeroPallet'], $_POST['pzs']);

            // $response = $insertar->InsertarBaja($_POST['nombreComponente'], $_POST['terminacionComponente'], $_POST['numeroPallet'], $_POST['pzs']);
            // if ($response) {
                // $update_response = $actualizar->actualizar2151($_POST['terminacionComponente']);

                // $update_response = $actualizar->BajaActualizarEstadoActual($_POST['id_modelo_actual'], $_POST['pzs']);
                // $update_response = $obtener->vbactualizar();
                    if ($_POST['terminacionComponente']=='2160') {
                       
    
                            $update_response = $obtener->selectInv1($_POST['numeroPallet'], $_POST['pzs']);
    
                            echo 'GOOD';
                        
                    }if($_POST['terminacionComponente']=='2150') {

                        $update_response = $obtener->selectInv2($_POST['numeroPallet'], $_POST['pzs']);
                        echo "BAD";
                        http_response_code(400); //Bad request                    
                    }
                

            
        } catch (Exception $e) {
            $e->getMessage();
            echo $e;
        }
        break;

    case 7:
        try {
            $resultado = $obtener->DatosModeloActual();
            $array = array();

            foreach ($resultado as $row) {
                foreach ($row as $key => $value){
                    if (!is_numeric($key)){
                        $array[$key] = $value;
                    }
                }
            }

            if ($array == []) {
                $array = null;
                echo "No se encuentra ningún modelo en la línea";
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
                // TODO: OPCIÓN 1 - Validar el Código Qr ingresado mediante $_POST['salidaQR'] 
                //       no sea el mismo que el anterior $_SESSION['escaneoAnteriorBaja'] 
                if ($_SESSION['escaneoAnteriorBaja'] != $_POST['salidaQR']){
                    $_SESSION['escaneoAnteriorBaja'] = $_POST['salidaQR'];
                    http_response_code(200); // Ok
                } else {
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
        case 10:
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
            case 11:
                try {
                    $arreglo = array();
                    $filas = 1;
                    $filas1 = 1;
                    $fp  = fopen("281.csv","r");
                    $fp1  = fopen("282.csv","r");
                    fgets($fp);
                    fgets($fp);
                    fgets($fp);
                    fgets($fp1);
                    fgets($fp1);
                    fgets($fp1);
                  
                    while ($contactData = fgetcsv ($fp, 10000, ",")):
                    $response = $obtener->Insertarcsv1($contactData, $filas);
                    $filas++;   
                endwhile;
                echo $filas;
                        foreach ($response as $row2) {
                   
                        $arreglo[]= $row2;
                   
                
                        }
                        while ($contactData = fgetcsv ($fp1, 10000, ",")):
                            $response = $obtener->Insertarcsv2($contactData, $filas1);
                            $filas1++;   
                        endwhile;
                   
                                foreach ($response as $row2) {
                                    echo $filas1;
                                $arreglo[]= $row2;
                           
                        
                                }
            echo json_encode($response);
              } catch (Exception $e) {
                    $e->getMessage();
                    echo $e;
                }
                break;

}
?>