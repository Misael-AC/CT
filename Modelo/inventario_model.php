<?php
class classQueries {
    function MostrarInventario(){
        $sql = "SELECT * FROM tbl_inventario";
        global $con;
        return $con->query($sql);
    }

    function FiltradoValidacion($linea, $modelo, $fecha){
        $sql = "SELECT * FROM `tbl_inventario` WHERE `linea` = (CASE WHEN '$linea' = NULL OR '$linea' = '' THEN `linea` ELSE '$linea' END) AND `modelo` = (CASE WHEN '$modelo' = NULL OR '$modelo' = '' THEN `modelo` ELSE '$modelo' END) AND `fecha` = (CASE WHEN '$fecha' = NULL OR '$fecha' = '' THEN `fecha` ELSE '$fecha' END)";
        global $con;
        return $con->query($sql);
    }

    public function MostrarLineas(){
        $sql = "SELECT DISTINCT linea FROM tbl_inventario ORDER BY linea ASC";
        global $con;
        $query = $con->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }

    public function MostrarModelos(){
        $sql = "SELECT DISTINCT modelo FROM `tbl_inventario`";
        global $con;
        $query = $con->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }
}
?>