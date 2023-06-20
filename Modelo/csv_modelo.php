<?php


class queryInsertar
{
        public function Insertarcsv($contactData)
    {
        $sql = "INSERT INTO `contactos`(`COL1`, `COL2`, `COL3`,`COL4`,`COL5`) 
                VALUES ('{$contactData[0]}','{$contactData[1]}', '{$contactData[2]}',
      '{$contactData[3]}',{$contactData[4]}
       )";
        global $conexion;
        return $conexion->query($sql);
    }
}
class queryObtener
{

    public function  Insertarcsv1($filas)
    {
        $fecha = date('Y-m-d H:i:s');
        $sql = "SELECT *FROM `tbl_vb_lcs` where total_vb=($filas)-1" ;
        global $con;
        $row = $con->query($sql)->fetch();
        // $response= $con->query($sql)->fetchAll();
        if ($row == 0) {
            $sql = "INSERT INTO `tbl_vb_lcs`(`total_vb`) 
            VALUES ('$filas'
   )";
    global $con;
    return $con->query($sql);
   } else {
    $sql="UPDATE tbl_vb_lcs SET 
    total_vb=$filas    
    WHERE id_vb_lcs=1";
    global $con;
    return $con->query($sql);

   }
}
}

?>