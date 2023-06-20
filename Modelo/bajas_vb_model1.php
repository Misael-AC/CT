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
    public function  Insertarcsv1($contactData,$filas)
    {  
        $linea="1";
        $fecha = date('Y-m-d');
        $sql = "SELECT *FROM `tbl_vb_lcs` where 'nom_linea_lcs'='".$contactData[2]."'";
        global $con;
        $row = $con->query($sql)->fetch();
        // $response= $con->query($sql)->fetchAll();
        if ($row == 0) {
            $sql = "INSERT INTO `tbl_vb_lcs`(`nom_linea_lcs`,`total_vb`,`fechas_vb_lcs`) 
            VALUES ('{$contactData[2]}','$filas','$fecha'
   )";
    global $con;
    return $con->query($sql);
   } else {
    $sql="UPDATE `tbl_vb_lcs` SET
   `fechas_vb_lcs`='$fecha',
    total_vb=$filas    
    WHERE 'nom_linea_lcs' ='".$contactData[2]."'";
    global $con;
    return $con->query($sql);

   }
}
public function  Insertarcsv2($contactData,$filas1)
    {  
        $linea="1";
        $fecha = date('Y-m-d');
        $sql = "SELECT *FROM `tbl_vb_lcs` where 'nom_linea_lcs' ='".$contactData[2]."'";
        global $con;
        $row = $con->query($sql)->fetch();
        // $response= $con->query($sql)->fetchAll();
        if ($row == 0) {
            $sql = "INSERT INTO `tbl_vb_lcs`(`nom_linea_lcs`,`total_vb`,`fechas_vb_lcs`) 
            VALUES ('{$contactData[2]}','$filas1','$fecha'
   )";
    global $con;
    return $con->query($sql);
   } else {
    $sql="UPDATE `tbl_vb_lcs` SET
   `fechas_vb_lcs`='$fecha',
    total_vb=$filas1   
    WHERE 'nom_linea_lcs' ='".$contactData[2]."'";
    global $con;
    return $con->query($sql);

   }
}
    // public function EstadoActual(){
    //     $sql = "SELECT * FROM `tbl_vb_lcs` WHERE `id_vb_lcs` = 1";
    //     global $con;
    //     return $con->query($sql);
    // }
    public function EstadoActual($id_modelo_actual){
        $sql = "SELECT * FROM `tbl_vb_lcs` WHERE `id_vb_lcs` = $id_modelo_actual";
        global $con;
        return $con->query($sql);
    }
    public function selectInv1($numeroPallet, $pzs)
    {
        $fecha = date('Y-m-d H:i:s');
        $sql = "SELECT*FROM `tbl_vb_lcs`  WHERE `id_vb_lcs` = 1";
        global $con;
        $row = $con->query($sql)->fetch();
        // $response= $con->query($sql)->fetchAll();
        if ($row > 0) {
            $sql = "UPDATE `tbl_vb_lcs`
            SET `cant_2160_vb` = `cant_2160_vb`+(87.5)*(2),`cant_modelo_vb` = `cant_modelo_vb`+(12.5)*(2),`por_vb` = `cant_2160_vb`+`cant_modelo_vb`,`cant_vb_lcs` = `por_vb`/100+1,esc_2160=esc_2160+1,total_pls=esc_2160+esc_2150
            WHERE `id_vb_lcs` = 1";
    global $con;
    return $con->query($sql);
   } else {
    $fecha = date('Y-m-d h:i:s');

            $sql = "INSERT INTO `tbl_bajas_sleep_lcs`(`term_modelo_lcs`, `numero_pallets_lcs`, ,`cantidad_pallet_lcs`) 
            VALUES ('$numeroPallet', '$pzs')";
    global $con;
    return $con->query($sql);
        }
    }
    public function selectInv2($numeroPallet, $pzs)
    {
        $fecha = date('Y-m-d H:i:s');
        $sql = "SELECT*FROM `tbl_vb_lcs`  WHERE `id_vb_lcs` = 1";
        global $con;
        $row = $con->query($sql)->fetch();
        // $response= $con->query($sql)->fetchAll();
        if ($row > 0) {
            
            $sql = "UPDATE `tbl_vb_lcs`
            SET `cant_2160_vb` = `cant_2160_vb`+(87.5)*(14),`cant_modelo_vb` = `cant_modelo_vb`+(12.5)*(14),`por_vb` = `cant_2160_vb`+`cant_modelo_vb`,`cant_vb_lcs` = `por_vb`/100,esc_2160=esc_2160+7,esc_2150=esc_2150+1,total_pls=esc_2160+esc_2150
            WHERE `id_vb_lcs` = 1 AND `total_pls`% 8 = 0";
           global $con;
           return $con->query($sql);
           } else {
    $fecha = date('Y-m-d h:i:s');

            $sql = "INSERT INTO `tbl_bajas_sleep_lcs`(`term_modelo_lcs`, `numero_pallets_lcs`, ,`cantidad_pallet_lcs`) 
            VALUES ('$numeroPallet', '$pzs')";
    global $con;
    return $con->query($sql);
        }
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
    public function Insertar_sleeve($terminacionComponente, $numeroPallet, $pzs)
    {
        $sql = "INSERT INTO `tbl_bajas_sleep_lcs`(`term_modelo_lcs`, `numero_pallets_lcs`, `cantidad_pallet_lcs`) 
                VALUES ('$terminacionComponente', '$numeroPallet', '$pzs')";
        global $con;
        return $con->query($sql);
    }
}

class queryActualizar
{
    public function actualizar2150($terminacionComponente)
    {
        $sql = "UPDATE `tbl_bajas_sleep_lcs`
        SET `pzs_vb_lcs` = `pz_vb_lcs`*`esc_p_lcs`
        WHERE `term_modelo_lcs` = '$terminacionComponente'";
        global $con;
        return $con->query($sql);
    }
    // public function actualizar2151($terminacionComponente)
    // {
    //     $sql = " UPDATE
    //    tbl_vb_lcs
    //     --  INNER JOIN
    //     --  tbl_bajas_sleep_lcs
        
    //     --  ON
    //     --  tbl_bajas_sleep_lcs.id_salidas_lcs = tbl_vb_lcs.id_vb_lcs
    //     --  SET
    //     -- tbl_vb_lcs.cant_2150_vb = (tbl_bajas_sleep_lcs.pz_vb_lcs)*(tbl_bajas_sleep_lcs.esc_p_lcs)
    //      WHERE
    //      tbl_vb_lcs.id_vb_lcs = 1";
         
    //     global $con;
    //     return $con->query($sql);
    // }

   
    public function BajaActualizarEstadoActual($id_modelo_actual, $cantidad_baja_pzas)
    {
        $sql = "UPDATE `tbl_estado_actual_lcs`
                SET `cantidad_real_lcs` = `cantidad_real_lcs` - '$cantidad_baja_pzas'
                WHERE `id_modelos_lcs` = '$id_modelo_actual'";
        global $con;
        return $con->query($sql);
    }
    public function vbactualizar()
    {
        $sql = "UPDATE `tbl_bajas_sleep_lcs`
                SET `cantidad_pallet_lcs` = `cantidad_pallet_lcs` + 1
                WHERE `id_salidas_lcs` = 1";
        global $con;
        return $con->query($sql);
    }
}

class queryEliminar
{
}
?>