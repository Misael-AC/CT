<?php
include ("../Modelo/login_model.php");
require_once '../Config/conexion.php';

class Login
{
    public $errors = array();
    public $messages = array();

    public function __construct()
    {
        session_start();
        if (isset($_GET["logout"])) {
            $this->doLogout();
        }

        elseif (isset($_POST["login"])) {
            $this->dologinWithPostData();
        }
    }

    private function dologinWithPostData()
    {   
        if (empty($_POST['user_name'])) {
            $this->errors[] = "The user is empty.";
        } elseif (empty($_POST['user_password'])) {
            $this->errors[] = "Password is empty.";
        } elseif (!empty($_POST['user_name']) && !empty($_POST['user_password'])) {

            try {  
        
                $usernomina = $_POST['user_name'];
                $password = $_POST['user_password'];

                $objBuscarUser = new ConsultasLogin();
                $ResBuscarUsuario = $objBuscarUser->ObtenerDatos($usernomina);
                $RowBuscarUsuario = $ResBuscarUsuario->fetchObject();
                $TotalUser = $RowBuscarUsuario->totalFilas;

                if ($TotalUser == 1) {
                    $ResTotal = $objBuscarUser->ObtenerUsuarioExistente($usernomina, $password);
                    $Row = $ResTotal->fetchObject();
                    $Total = $Row->total;

                    if ($Total == 1) {
                        $resultado_login = $objBuscarUser->ObtenerUsuarioLogin($usernomina, $password);
                        $Login = $resultado_login->fetchObject();

                        $_SESSION['nombre'] = $Login->nombre_lcs;
                        $_SESSION['apellidop'] = $Login->apellido_p_lcs;
                        $_SESSION['apellidom'] = $Login->apellido_m_lcs;
                        $_SESSION['nomina'] = $Login->nomina_lcs;
                        $_SESSION['password'] = $Login->password_lcs;
                        $_SESSION['id_role']= $Login->id_tipo_emp_lcs;
                        $_SESSION['role']= $Login->nom_tipo_emp_lcs;
                        $_SESSION['id_empleado']= $Login->id_usuario_lcs;
                        $_SESSION['id_puesto'] = $Login->id_puesto_lcs;
                        $_SESSION['id_planta'] = $Login->id_planta_lcs;
                        $_SESSION['status_login_lcs'] = 1;
                        $_SESSION['fecha'] = $date_added=date("Y-m-d");
                        $_SESSION['img_user'] = (!is_null($Login->imagen_user) && !empty($Login->imagen_user)) ? $Login->imagen_user:'user-15.png';
                    }else{
                        $this->errors[]="Usuario o contraseña incorrectos.";
                    }
                }else{
                    $this->errors[] = "El usuario no existe.";
                }
            }  
            catch( PDOException $e ) {  
                $e->getMessage();
                $this->errors[] = "Conexion a la base de datos correcta."; 
                echo $e;
            } 
        }
    }

    public function doLogout()
    {
        $_SESSION = array();
        session_destroy();
        $this->messages[] = "Sesion cerrada.";
    }

    public function isUserLoggedIn()
    {
        if (isset($_SESSION['status_login_lcs']) AND $_SESSION['status_login_lcs'] == 1) {
            return true;
        }
        return false;
    }
}
?>