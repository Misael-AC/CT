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
    <title>LCS | Inventario</title>
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
    <link href="../Public/plugins/sweetalert/dist/sweetalert.css" rel="stylesheet" type="text/css">
    <!-- ================== END BASE CSS STYLE ================== -->

    <!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
    <link href="../Public/plugins/jquery-jvectormap/jquery-jvectormap.css" rel="stylesheet" />
    <!-- <link href="../Public/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" /> -->
    <!--<link href="../Public/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />-->
    <!-- ================== END PAGE LEVEL STYLE ================== -->

    <!-- ================== BEGIN BASE JS ================== -->
    <script src="../Public/plugins/pace/pace.min.js"></script>
    <script src="../Public/plugins/sweetalert/dist/sweetalert.min.js"></script>
    <!-- ================== END BASE JS ================== -->

    <style scoped>
    label {
        display: initial;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }
    </style>
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
            <!-- begin breadcrumb -->
            <ol class="breadcrumb pull-right">
                <li><a href="javascript:;">Home</a></li>
                <li class="active">Inventario</li>
                <!-- <li><a class="btn btn-success" href="http://nsmx366.nadenso.net/QRCode/Vista/login.php"> <i class="fa fa-qrcode"></i> QR Code</a></li>
                <li><a class="btn btn-primary" href="http://nsmx366.nadenso.net/productivity/Vista/login.php"> <i class="fa fa-male"></i> DMC</a></li>
                <li><a class="btn btn-danger" href="http://localhost/DNMX_DNAds/Vista/login.php"> <i class="fa fa-certificate"></i> DNA</a></li> -->
            </ol>
            <!-- end breadcrumb -->
            <!-- begin page-header -->
            <h1 class="page-header"><i class="fa fa-archive" aria-hidden="true"></i> Inventario</h1>
            <!-- end page-header -->

            <!-- begin row -->
            <div class="row" id="filtro">
                <!-- begin col-12 -->
                <div class="col-md-12">
                    <!-- begin panel -->
                    <div class="panel panel-inverse">
                        <div class="panel-heading">
                            <div class="panel-heading-btn">
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning"
                                    data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                            </div>
                            <h3 class="panel-title"><i class="fa fa-filter" aria-hidden="true"></i> Filtros</h3>
                        </div>

                        <div class="panel-body">

                            <div class="row">
                                <div class="col-md-12"
                                    style="padding: 5px; border: 1px solid grey; border-radius: 6px;">
                                    <center><label>LA BUSQUEDA POR FILTRO AYUDARÁ A MOSTRAR EL INVENTARIO DE LA LÍNEA
                                            QUE NECESITE</label></center>
                                </div>
                            </div><br>

                            <form id="filter-form">
                                <div class="row filter-elements">

                                    <div class="col-md-3 elements">
                                        <label>Planta<label style="color: blue"> *</label>
                                            <select class="form-control" id="filtroPlanta" style="font-size: 1em"
                                                onchange="buscarDepto()" disabled>
                                            </select></label>
                                    </div>

                                    <div class="col-md-3 elements">
                                        <label>Departamento<label style="color: blue"> *</label>
                                            <select class="form-control" id="selectDepto" style="font-size: 1em"
                                                onchange="buscarLinea()" disabled>
                                            </select></label>
                                    </div>

                                    <div class="col-md-3 elements">
                                        <label>Línea:<label style="color: red"> *</label>
                                            <select class="form-control" id="selectLinea" name="linea">
                                                <option value="">Seleccione una línea</option>
                                            </select></label>
                                    </div>

                                    <div class="col-md-3 elements">
                                        <label>Modelo:<label style="color: blue"> *</label>
                                            <select class="form-control" id="selectModelo" name="modelo">
                                                <option value="">Seleccione un modelo</option>
                                            </select></label>
                                    </div>

                                    <div class="col-sm-3 elements">
                                        <label>Fecha:</label>
                                        <input type="date" class="form-control" id="fecha" name="fecha" >
                                    </div>
                                </div>
                                <div class="col-sm-12 elements" style="padding-top: 1.5em;">
                                    <button id="btn-filtro" type="submit" name="submit" class='btn btn-md btn btn-primary'
                                        style="margin-top: 4px;"><i class='fa fa-search' aria-hidden='true'></i>
                                        Filtrar</button>

                                    <button id="btn-limpiar" type='button' class='btn btn-md btn btn-primary'
                                        onclick="limpiar()" style="margin-top: 4px;"><i class='fa fa-eraser'
                                            aria-hidden='true'></i> Limpiar campos</button>

                                    <button id="btn-restaurar" type='button' class='btn btn-md btn btn-primary'
                                        onclick="restaurar()" style="margin-top: 4px;"><i class='fa fa-table'
                                            aria-hidden='true'></i> Restaurar
                                        tabla</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    <!-- begin row -->
                    <div class="row" id="rowTable">
                        <!-- begin col-12 -->
                        <div class="col-md-12">
                            <!-- begin panel -->
                            <div class="panel panel-inverse">
                                <div class="panel-body">
                                    <div class="table-responsive">
                                        <table id="dt_Inventarios" class="table table-bordered"
                                            style=" font-size: 1.1em; color: #000">
                                            <thead>
                                                <tr class="info">
                                                    <th>ID</th>
                                                    <th>Línea</th>
                                                    <th>Nombre</th>
                                                    <th>Rango</th>
                                                    <th>Modelo</th>
                                                    <th>Inventario - MIN</th>
                                                    <th>Inventario - MAX</th>
                                                    <th>Fecha</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- end panel -->
                        </div>
                        <!-- end col-12 -->
                    </div>
                    <!-- end row -->
                </div>
                <!-- end panel -->
            </div>
            <!-- end col-12 -->
        </div>
        <!-- end row -->


        <div class="modal fade" id="filterloader" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel"
            style="color:#000; margin-top: 50px">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="loader"></div>
                        <div clas="loader-txt">
                            <p class="lead">Cargando, por favor espere...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
        <script src="../Public/plugins/DataTables/media/js/jquery.dataTables.js"></script>
        <script src="../Public/plugins/DataTables/media/js/dataTables.bootstrap.min.js"></script>
        <script src="../Public//plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.time.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.resize.min.js"></script>
        <script src="../Public/plugins/flot/jquery.flot.pie.min.js"></script>
        <script src="../Public/plugins/sparkline/jquery.sparkline.js"></script>
        <script src="../Public/plugins/jquery-jvectormap/jquery-jvectormap.min.js"></script>
        <script src="../Public/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <!-- <script src="../Public/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script> -->
        <!-- <script src="../Public/js/dashboard.min.js"></script> -->
        <script src="../Public/js/apps.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="../Public/js/inventario.js"></script>
        <!-- <script src="../Public/js/gestion_asociados.js"></script> -->
        <!-- <script src="../Public/js/catalogos.js"></script> -->
        <script src="../Public/socket.io/dist/socket.io.min.js"></script>
        <script src="../Public/js/socket.js"></script>
        <link href="../Public/css/mainstyle.css" rel="stylesheet" />
        <!-- ================== END PAGE LEVEL JS ================== -->
        <script>
        $(document).ready(function() {
            App.init();
            // Dashboard.init();
        });
        </script>

</body>

</html>