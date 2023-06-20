<?php
@session_start();
if (isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = 0;
}

require_once '../Config/conexion.php';
require_once '../Modelo/catalogos_model.php';

if ($_SESSION['id_role'] == 1) {
    switch ($page) {

        case 1:
            try {
                $objConsulta = new classQueries();
                $resultado = $objConsulta->MostrarTiposEmpleado();
                echo json_encode($resultado);
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;

        case 2:
            try {
                $objConsulta = new classQueries();
                $resultado = $objConsulta->MostrarPuestos();
                echo json_encode($resultado);
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;

        case 3:
            try {
                $objConsulta = new classQueries();
                $resultado = $objConsulta->MostrarPlantas();
                echo json_encode($resultado);
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;

        case 4:
            try {
                if (isset($_GET['id_planta_lcs'])) {
                    $id_planta_lcs = $_GET['id_planta_lcs'];
                } else {
                    break;
                }
                $objConsulta = new classQueries();
                $resultado = $objConsulta->MostrarDepartamentos($id_planta_lcs);
                echo json_encode($resultado);
            } catch (Exception $e) {
                $e->getMessage();
                echo $e;
            }
            break;
    }
}
?>