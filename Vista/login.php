<?php
require_once("../Config/conexion.php");
require_once("../Config/login.php");

date_default_timezone_set('America/Mexico_City');
$login = new Login();
if ($login->isUserLoggedIn() == true) {
   header("location: index.php");
} else {
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>LCS | Denso </title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="../Public/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
    <link href="../Public/plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
	<link href="../Public/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="../Public/css/animate.min.css" rel="stylesheet" />
	<link href="../Public/css/style.min.css" rel="stylesheet" />
	<link href="../Public/css/style-responsive.min.css" rel="stylesheet" />
	<link href="../Public/css/theme/default.css" rel="stylesheet" id="theme"/>
	<!-- ================== END BASE CSS STYLE ================== -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="../Public/plugins/pace/pace.min.js"></script>
	<!-- ================== END BASE JS ================== -->
</head>
<body class="pace-top bg-white">
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	
	<!-- begin #page-container -->
	<div id="page-container" class="fade">
	    <!-- begin login -->
        <div class="login login-with-news-feed">
            <!-- begin news-feed -->
            <div class="news-feed">
                <div class="news-image" style="margin-left: 200px;">
                <!-- TODO: Corregir el tamaño de la imagen de fondo o contenido de la primer columna para pantallas grandes. -->
                    <img src="../Public/img/login-bg/bg-5.png" title="LCS fondo" alt="Fondo Lot Control System" data-id="login-cover-image" />
                </div>
                <div class="news-caption">
                    <h4 class="caption-title"><i class="fa fa-file-text-o text-success"></i> Lot Control System Denso Mexico</h4>
                    <p>
                        Ingresa tu usuario y contraseña para entrar en el sistema.
                    </p>
                </div>
            </div>
            <!-- end news-feed -->
            <!-- begin right-content -->
            <div class="right-content">
                <!-- begin login-header -->
                <div class="login-header" style="margin: auto;">
                    <div class="brand" style="display: flex; justify-content: center;">
                        <img src="../Public/img/logo/LCS.png" title="LCS logo" alt="Logo Lot Control System" style="width: 350px; height: 110px; margin-left: -20px; position: relative; margin-top: px">
                    </div>
                    <div class="icon">
                        <i class="fa fa-sign-in"></i>
                    </div>
                </div>
                <!-- end login-header -->
                <!-- begin login-content -->
                <div class="login-content">
                    <form action="login.php" method="POST" class="margin-bottom-0">

                    <?php
                
                    if (isset($login)) {

                        if ($login->errors) {
                    ?>
                            <div class="alert alert-danger alert-dismissible" role="alert">
                        
                                <strong>Error!</strong> 
                        
                    <?php

                            foreach ($login->errors as $error) {
                                echo $error;
                            }
                    ?>
                                <span class="close" data-dismiss="alert">×</span>
                            </div>

                        <?php

                        }
                        if ($login->messages) {

                        ?>
                            <div class="alert alert-success alert-dismissible" role="alert">
                                <strong>Notice!</strong>

                        <?php
                            foreach ($login->messages as $message) {
                            echo $message;
                        }
                        ?>
                                <span class="close" data-dismiss="alert">×</span>
                            </div> 
                        <?php 
                        }
                    }
                        ?>

                        <div class="form-group m-b-15">
                            <input type="text" maxlength="11" class="form-control input-lg" id="txt_user" placeholder="User" name="user_name" required="" onKeyPress="return event.charCode >= 48 && event.charCode <= 57" maxlength="15" id="user" autocomplete="off"/>
                        </div>

                        <div class="form-group m-b-15">
                            <input type="password" class="form-control input-lg" id="txt_password" maxlength="60" placeholder="Password" name="user_password" required="" />
                            
                        </div>


                        <div class="checkbox m-b-30">
                            <label>
                                <input type="checkbox" /> Recuérdame.
                            </label>
                        </div>
                        <div class="login-buttons">
                            <button type="submit" class="btn btn-info btn-block btn-lg" name="login" id="submit">Login</button>
                        </div>

                        <div class="m-t-20 m-b-40 p-b-40 text-inverse">
                            ¿Olvidaste tu contraseña? Click <a href="register_v3.html" class="text-info">aqui</a> para recuperarla.
                        </div>
                        <hr />
                        <p class="text-center">
                            &copy; Lot Control System All Right Reserved 2023
                        </p>
                    </form>
                </div>
                <!-- end login-content -->
            </div>
            <!-- end right-container -->
        </div>
        <!-- end login -->
        
        <!-- begin theme-panel -->

        <!-- end theme-panel -->
	</div>
	<!-- end page container -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="../Public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="../Public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="../Public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="../Public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="../Public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="../Public/plugins/jquery-cookie/jquery.cookie.js"></script>
	<!-- ================== END BASE JS ================== -->
	
	<!-- ================== BEGIN PAGE LEVEL JS ================== -->
	<script src="../Public/js/apps.min.js"></script>
	<!-- ================== END PAGE LEVEL JS ================== -->

    <!-- ================== Begin Funtions JS ================== -->
    <script src="../Public/AjaxFiles/ajaxLogin.js"></script>    
    <!-- ================== END Funtions JS ================== -->



	<script>
		$(document).ready(function(){
			App.init();
		});
	</script>

</body>
</html>

<?php
}