<?php
class queryObtener
{
    public function obtenerModelosDisp()
    {
        $sql = "SELECT * FROM `tbl_modelos_lcs` WHERE `status_modelo_lcs` = 1";
        global $con;
        return $con->query($sql);
    }

    public function obtenerModelos($id_modelo)
    {
        $sql = "SELECT * FROM `tbl_modelos_lcs` WHERE `id_modelos_lcs` = $id_modelo";
        global $con;
        return $con->query($sql);
    }

    public function obtenerModeloActual()
    {
        $sql = "SELECT * FROM `tbl_cambios_modelo_lcs` INNER JOIN tbl_modelos_lcs ON tbl_cambios_modelo_lcs.id_modelos_lcs = tbl_modelos_lcs.id_modelos_lcs ORDER BY id_reg_cambio_mod DESC LIMIT 1";
        global $con;
        return $con->query($sql);
    }

    public function DatosModeloActual(){
        $sql = "SELECT * FROM `tbl_cambios_modelo_lcs` AS c
                INNER JOIN `tbl_modelos_lcs` AS m ON c.id_modelos_lcs = m.id_modelos_lcs 
                ORDER BY id_reg_cambio_mod
                DESC
                LIMIT 1";
        global $con;
        return $con->query($sql);
    }

    public function EstadoActual($id_modelo_actual){
        $sql = "SELECT * FROM `tbl_estado_actual_lcs` WHERE `id_modelos_lcs` = $id_modelo_actual";
        global $con;
        return $con->query($sql);
    }
}

class queryInsertar
{
    public function insertarCambioModelo($nomina, $id_modelos_lcs)
    {
        $sql = "INSERT INTO `tbl_cambios_modelo_lcs` (`id_reg_cambio_mod`, `nomina_lcs`, `id_modelos_lcs`) VALUES ('', '$nomina', '$id_modelos_lcs');";
        global $con;
        return $con->query($sql);
    }

    public function insertarEntradas($nombreComponente, $terminacionComponente, $numeroPallet, $pzs)
    {
        $sql = "INSERT INTO `tbl_altas_lcs` (`id_entradas_lcs`, `nom_modelo_lcs`, `term_modelo_lcs`, `numero_pallet_lcs`, `cantidad_ent_lcs`) VALUES ('', '$nombreComponente', '$terminacionComponente', '$numeroPallet', '$pzs');";
        global $con;
        return $con->query($sql);
    }

    public function InsertarAlta($nombreComponente, $terminacionComponente, $numeroPallet, $pzs)
    {
        $sql = "INSERT INTO `tbl_altas_lcs` (`nom_modelo_lcs`, `term_modelo_lcs`, `numero_pallet_lcs`, `cantidad_ent_lcs`) 
                VALUES ('$nombreComponente', '$terminacionComponente', '$numeroPallet', '$pzs')";
        global $con;
        return $con->query($sql);
    }
}

class queryActualizar
{
    public function actualizar2150($terminacionComponente)
    {
        $sql = "UPDATE `tbl_estado_actual_lcs` SET `cantidad_real_lcs` = ( (SELECT SUM(cle.cantidad_ent_lcs)FROM `tbl_entradas_lcs` cle WHERE num_term_mod_lcs = '$terminacionComponente')-(SELECT SUM(cle.cantidad_sa_lcs)FROM `tbl_salidas_lcs` cle WHERE num_term_mod_lcs = '$terminacionComponente')) WHERE num_term_mod_lcs = '$terminacionComponente'";
        global $con;
        return $con->query($sql);
    }

    public function AltaActualizarEstadoActual($id_modelo_actual, $cantidad_alta_pzas)
    {
        $sql = "UPDATE `tbl_estado_actual_lcs`
                SET `cantidad_real_lcs` = `cantidad_real_lcs` + '$cantidad_alta_pzas'
                WHERE `id_modelos_lcs` = '$id_modelo_actual'";
        global $con;
        return $con->query($sql);
    }
}

class queryEliminar
{
}
?>