<?php
class classQueries {
    function MostrarTiposEmpleado(){
        $sql = "SELECT * FROM tbl_tipo_emp_lcs";
        global $con;
        $query = $con->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }

    function MostrarPuestos(){
        $sql = "SELECT * FROM tbl_puestos";
        global $con;
        $query = $con->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }

    function MostrarPlantas(){
        $sql = "SELECT id_planta_lcs, nombre_planta_lcs FROM tbl_plantas";
        global $con;
        $query = $con->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }

    function MostrarDepartamentos($id_planta_lcs){
        $sql = "SELECT id_departamento_lcs, nom_depto_lcs 
                FROM tbl_departamentos
                WHERE id_planta_lcs = '$id_planta_lcs'";
        global $con;
        $query = $con->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }
}
?>