<?php  
class ConsultasLogin{
    function ObtenerUsuarioLogin($usernomina, $password){
        $sql = "SELECT * FROM `tbl_usuario` AS u INNER JOIN tbl_tipo_emp_lcs AS e ON u. `id_tipo_emp_lcs`=e.id_tipo_emp_lcs WHERE u.nomina_lcs = '$usernomina' AND u.password_lcs = '$password'";
        global $con;
        return $con->query($sql);
    }

    function ObtenerUsuarioExistente($usernomina, $password){
        $sql="SELECT COUNT(*) as total FROM tbl_usuario WHERE nomina_lcs = '$usernomina' AND password_lcs = '$password'";
        global $con;
        return $con->query($sql); 
    }
    
    function ObtenerDatos($username){
        $sql=" SELECT COUNT(*) as totalFilas FROM tbl_usuario where nomina_lcs = '$username'";
        global $con;
        return $con->query($sql); 
    }

    function BuscarUsuario($username){
        $sql="SELECT * FROM tbl_usuario where nomina_lcs = '$username'";
        global $con;
        return $con ->query($sql); 
    }
}
?>