<?php
require_once 'login_model.php';
class classQueries extends ConsultasLogin {
    function TraeUsuarioAEditar($id_usuario_lcs){
        $sql = "SELECT * FROM tbl_usuario WHERE id_usuario_lcs='$id_usuario_lcs'";
        global $con;
        return $con->query($sql);
    }

    function MostrarUsuarios(){
        $sql = "SELECT id_usuario_lcs, nomina_lcs, CONCAT(nombre_lcs, ' ', apellido_p_lcs, ' ', apellido_m_lcs) AS NOMBRE_COMPLETO, e.nom_tipo_emp_lcs,
                P.nom_puesto_lcs,
                d.nom_depto_lcs,
                tp.nombre_planta_lcs
                FROM `tbl_usuario` AS u
                INNER JOIN `tbl_tipo_emp_lcs` AS e ON u.id_tipo_emp_lcs = e.id_tipo_emp_lcs
                INNER JOIN `tbl_puestos` AS p ON u.id_puesto_lcs = p.id_puesto_lcs
                INNER JOIN `tbl_departamentos` AS d ON u.id_departamento_lcs = d.id_departamento_lcs
                INNER JOIN `tbl_plantas` AS tp ON u.id_planta_lcs = tp.id_planta_lcs";
        global $con;
        return $con->query($sql);
    }
}

class classInserts {
        function GuardarUsuario(array $arrayAsociado){

        $sql = "INSERT INTO tbl_usuario (nombre_lcs, apellido_p_lcs, apellido_m_lcs, nomina_lcs, password_lcs, id_tipo_emp_lcs, id_puesto_lcs, id_area_lcs, id_planta_lcs, id_departamento_lcs) 
                VALUES (:nombre_lcs, :apellido_p_lcs, :apellido_m_lcs, :nomina_lcs, :password_lcs, :id_tipo_emp_lcs, :id_puesto_lcs, :id_area_lcs, :id_planta_lcs, :id_departamento_lcs)";
        error_log($sql);
        global $con;
        $query = $con->prepare($sql);
        return $query->execute($arrayAsociado);
    }
}

class classUpdates {
    function EditarUsuario($nomina_lcs, $nombre_lcs, $apellido_p_lcs, $apellido_m_lcs, $password_lcs, $id_tipo_emp_lcs, $id_puesto_lcs, $id_area_lcs, $id_planta_lcs, $id_departamento_lcs, $id_usuario_lcs){

        $sql = "UPDATE tbl_usuario
                SET nomina_lcs = '$nomina_lcs', nombre_lcs= '$nombre_lcs', apellido_p_lcs = '$apellido_p_lcs', apellido_m_lcs = '$apellido_m_lcs', password_lcs = '$password_lcs', id_tipo_emp_lcs= '$id_tipo_emp_lcs', id_puesto_lcs= '$id_puesto_lcs', id_area_lcs= '$id_area_lcs', id_planta_lcs='$id_planta_lcs', id_departamento_lcs='$id_departamento_lcs'
                WHERE id_usuario_lcs='$id_usuario_lcs'";
        error_log($sql);
        global $con;
        return $con->query($sql)->rowCount();
    }

    function EditarUsuarioConArray(array $params){

        $sql = "UPDATE tbl_usuario SET nomina_lcs = ?, nombre_lcs=?, apellido_p_lcs=?, apellido_m_lcs=?, password_lcs=?, id_tipo_emp_lcs=?, id_puesto_lcs=?, id_area_lcs=?, id_planta_lcs=?, id_departamento_lcs=? WHERE id_usuario_lcs=?";
        error_log($sql);
        global $con;
        $query = $con->prepare($sql);
        return $query->execute($params);
        // return $con->query($sql)->rowCount();
    }
}
?>