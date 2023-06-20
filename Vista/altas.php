<?php
session_start();
if (!isset($_SESSION['status_login_lcs']) || $_SESSION['status_login_lcs'] != 1) {
    header("location: login.php");
    exit;
}
$id_usuario = $_SESSION['id_empleado'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>LCS | Altas</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />

    <!-- ================== BEGIN BASE CSS STYLE ================== -->

    <!--<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />-->
    <link href="../Public/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
    <link href="../Public/plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="../Public/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../Public/css/animate.min.css" rel="stylesheet" />
    <link href="../Public/css/style.min.css" rel="stylesheet" />
    <link href="../Public/css/style-responsive.min.css" rel="stylesheet" />
    <link href="../Public/css/theme/default.css" rel="stylesheet" id="theme" />
    <!-- ================== END BASE CSS STYLE ================== -->

    <!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
    <link href="../Public/plugins/jquery-jvectormap/jquery-jvectormap.css" rel="stylesheet" />
    <!-- <link href="../Public/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" /> -->
    <!--<link href="../Public/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />-->
    <!-- ================== END PAGE LEVEL STYLE ================== -->

    <!-- ================== BEGIN BASE JS ================== -->
    <script src="../Public/plugins/pace/pace.min.js"></script>
    <!-- ================== END BASE JS ================== -->

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js">
    </script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</head>

<body>
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade in"><span class="spinner"></span></div>
    <!-- end #page-loader -->

    <!-- begin #page-container -->
    <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
        <!-- begin #header -->
        <div id="header" class="header navbar navbar-default navbar-fixed-top">
            <!-- begin container-fluid -->
            <?php
            include("mainBar.php");
            ?>
            <!-- end container-fluid -->
        </div>
        <!-- end #header -->

        <!--Begin #sidebar-->
        <?php
        include("../Vista/sidebar.php");
        ?>
        <!-- end #sidebar -->

        <!-- begin #content -->
        <div id="content" class="content">
            <!-- begin page-header -->
            <h1 class="page-header"><i class="fa fa-line-chart" aria-hidden="true"></i> Altas</h1>
            <!-- end page-header -->
            <!-- begin row -->
            <div class="row" id="filtro">
                <!-- begin col-12 -->
                <div class="col-md-4">
                    <!-- begin panel -->
                    <div class="panel panel-inverse">
                        <div class="panel-heading">
                            <h3 class="panel-title">Escanear QR para sumar piezas a la tabla</h3>
                        </div>
                        <div class="panel-body">
                            <div class="row filter-elements">
                                <div class='col-md-10 elements'>
                                    <label>Entrada de piezas</label>
                                    <input type="text" class="form-control" id="entradaQR" onchange="subirDes()"
                                        autofocus>
                                    <input type="text" id="nombreComponente" hidden>
                                    <input type="text" id="terminacionComponente" hidden>
                                    <input type="text" id="numeroPallet" hidden>
                                    <input type="text" id="pzs" hidden>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <!-- begin panel -->
                    <div class="panel panel-inverse">
                        <div class="panel-heading">
                            <h3 class="panel-title">Modelo actual</h3>
                        </div>
                        <div class="panel-body">
                            <div class="row filter-elements">
                                <div class='col-md-12' style="display: flex; justify-content: center;">
                                    <h1 id="modeloActual" style="color: red; font-size:60px;"></h1>
                                </div>
                                <div class='col-md-8 elements'>
                                    <input type="text" id="id_modelo_actual">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <!-- begin panel -->
                    <div class="panel panel-inverse">
                        <div class="panel-heading">
                            <h3 class="panel-title">Solicitud cambio de modelo</h3>
                        </div>
                        <div class="panel-body">
                            <div class="row filter-elements">
                                <div class='col-md-8 elements'>
                                    <input id="nomina" value="<?php echo  $_SESSION['nomina']; ?>">
                                    <input type="text" id="id_modelo">
                                    <label>Modelos</label>
                                    <select class="form-control" id="nombreModelo" style="font-size:1em"
                                        pleaceholder="Selecciona un modelo" onchange="botonGenerar()">
                                    </select>
                                </div>
                                <div class="col-md-1 elements">
                                    <button id="btnGenerar" class="btn btn-primary" onclick="agregarModAct()"
                                        style="margin-top:22px;" disabled>
                                        <i class="fa fa-refresh"></i>
                                        Cambiar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="panel panel-inverse">
                        <div class="panel-body">
                            <div class="canvas">
                                <div class="container-canvas">
                                    <canvas id="mycanvas"
                                        style="display: block; box-sizing: border-box; height: 224px; width: 662px;"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end panel -->
            </div>
            <!-- end col-12 -->
        </div>

        <!--$$$$$$$$$$$$$$$$$  $$$$$$$$$$$$$$$$$ -->



        <!-- ==============================================================================================================-->

        <!-- ================== BEGIN BASE JS ================== -->
        <script src="../Public/plugins/jquery/jquery-1.9.1.min.js"></script>
        <script src="../Public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
        <script src="../Public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
        <script src="../Public/plugins/bootstrap/js/bootstrap.min.js"></script>

        <script src="../Public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="../Public/plugins/jquery-cookie/jquery.cookie.js"></script>
        <!-- ================== END BASE JS ================== -->

        <!-- ================== BEGIN PAGE LEVEL JS ================== -->
        <!--<script src="../Public/plugins/gritter/js/jquery.gritter.js"></script>-->
        <script src="../Public/plugins/flot/jquery.flot.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.time.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.resize.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.pie.min.js"></script>
        <script src="../Public/plugins/sparkline/jquery.sparkline.js"></script>
        <script src="../Public/plugins/jquery-jvectormap/jquery-jvectormap.min.js"></script>
        <script src="../Public/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <script src="../Public/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <!-- <script src="../Public/js/dashboard.min.js"></script> -->
        <script src="../Public/js/apps.min.js"></script>
        <script src="../Public/js/altas.js"></script>
        <script src="../Public/socket.io/dist/socket.io.min.js"></script>
        <script src="../Public/js/socket.js"></script>
        <link href="../Public/css/mainstyle.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="../Public/plugins/sweetalert/dist/sweetalert.css">
        <script src="../Public/plugins/sweetalert/dist/sweetalert.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
        <!-- ================== END PAGE LEVEL JS ================== -->

        <!-- ######################################################### -->
        <script>
        $(document).ready(function() {
            App.init();
            // Dashboard.init();
        });
        </script>
</body>

</html>