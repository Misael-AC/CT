<?php
class queryObtener
{
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
    public function insertarSalidas($nombreComponente, $terminacionComponente, $numeroPallet, $pzs)
    {
        $sql = "INSERT INTO `tbl_bajas_lcs` (`id_salidas_lcs`, `nom_modelo_lcs`, `term_modelo_lcs`, `numero_pallet_lcs`, `cantidad_sa_lcs`) VALUES ('', '$nombreComponente', '$terminacionComponente', '$numeroPallet', '$pzs');";
        global $con;
        return $con->query($sql);
    }

    public function InsertarBaja($nombreComponente, $terminacionComponente, $numeroPallet, $pzs)
    {
        $sql = "INSERT INTO `tbl_bajas_lcs` (`nom_modelo_lcs`, `term_modelo_lcs`, `numero_pallet_lcs`, `cantidad_sa_lcs`) 
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

    public function BajaActualizarEstadoActual($id_modelo_actual, $cantidad_baja_pzas)
    {
        $sql = "UPDATE `tbl_estado_actual_lcs`
                SET `cantidad_real_lcs` = `cantidad_real_lcs` - '$cantidad_baja_pzas'
                WHERE `id_modelos_lcs` = '$id_modelo_actual'";
        global $con;
        return $con->query($sql);
    }
    public function AltasVB($pzs)
    {
        $fecha = date('Y-m-d H:i:s');
        $sql = "SELECT*FROM `tbl_vb_lcs`  WHERE `id_vb_lcs` = 1";
        global $con;
        $row = $con->query($sql)->fetch();
        // $response= $con->query($sql)->fetchAll();
        if ($row > 0) {
            $sql = "UPDATE `tbl_vb_lcs`
            SET `cant_2160_vb` = `cant_2160_vb`+($pzs),`cant_modelo_vb` = `cant_modelo_vb`+2,`cant_vb` = `cant_vb`+2
            WHERE `id_vb_lcs` = 1";
            global $con;
            return $con->query($sql);
          } else {
           $fecha = date('Y-m-d h:i:s');
            $sql = "INSERT INTO `tbl_bajas_sleep_lcs`(`term_modelo_lcs`, `numero_pallets_lcs`, ,`cantidad_pallet_lcs`) 
            VALUES ('$pzs')";
    global $con;
    return $con->query($sql);
        }
    }
}

class queryEliminar
{
}
?>