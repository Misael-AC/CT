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
    <title>LCS | Asociados</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />

    <!-- ================== BEGIN BASE CSS STYLE ================== -->
    <!--<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />-->
    <!-- <link href="../Public/plugins/bootstrap_v5.3.0/css/bootstrap.min.css" rel="stylesheet"/> -->
    <link href="../Public/plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="../Public/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet"/>
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
    <link href="../Public/plugins/DataTables/media/css/dataTables.bootstrap.min.css" rel="stylesheet" />
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

    @media (min-width: 768px) {
        .modal-sm {
            width: 500px;
        }
    }
    </style>
    <span class="on-the-fly-behavior"></span>
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
                <li class="active">Gestión de asociados</li>
            </ol>
            <!-- end breadcrumb -->
            <!-- begin page-header -->
            <h1 class="page-header"><i class="fa fa-users" aria-hidden="true"></i> Gestión de asociados</h1>
            <!-- end page-header -->

            <!-- begin row -->
            <div class="row">
                <!-- begin col-12 -->
                <div class="col-md-12">
                    <!-- begin panel -->
                    <div class="panel panel-inverse">
                        <div class="row">
                            <div class="col-sm-12 btn-add">
                                <button type="button" class="btn btn-md btn-primary pull-right btn-nuevoRegistro"><i
                                        class="fa fa-plus"></i> Agregar nuevo </button>
                            </div>
                        </div>

                        <div class="panel-body">
                            <div class="table-responsive">
                                <table id="dt_Usuarios" class="table table-bordered"
                                    style=" font-size: 1.1em; color: #000">
                                    <thead>
                                        <tr class="info">
                                            <th style="visibility: hidden;"> id_usuario_lcs</th>
                                            <th> Nómina</th>
                                            <th> Nombre completo</th>
                                            <th> Tipo de empleado </th>
                                            <th> Puesto </th>
                                            <!-- <th> Área </th> -->
                                            <th> Planta</th>
                                            <th> Departamento</th>
                                            <th></th>
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
        <!-- end #content -->

        <!--################################## BEGIN MODAL Agregar usuario #########################################-->
        <div class="modal fade" id="nuevoRegistro">
            <div class="modal-dialog  modal-sm modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" id="cerrarNuevoRegistro" class="close" data-dismiss="modal"
                            aria-hidden="true">×</button>
                        <h4 class="modal-title"><i class="fa fa-plus"></i> Agregar usuario</h4>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row" style="row-gap: 20px; display: grid;">
                                <div class="col-12 mb-3">
                                    <label>Nómina<i title="Número de nómina del empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="text" name="nomina_lcs" class="form-control" id="nomina_lcs"
                                            autocomplete="off" autofocus></input></label>
                                </div>

                                <div class="col-12">
                                    <label for="nombre">Nombre(s)<i title="Nombres del empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="text" id="nombre_lcs" name="nombre_lcs" class="form-control"
                                            autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label for="primer_apellido">Primer apellido<i title="Primer apellido del empleado"
                                            class="fa fa-info-circle" style="color:blue;float:right;"></i>
                                        <input type="text" id="apellido_p_lcs" name="apellido_p_lcs" class="form-control"
                                            autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label for="segundo_apellido">Segundo apellido - Opcional:</label><i
                                        title="Segundo apellido del empleado" class="fa fa-info-circle"
                                        style="color:blue;float:right;"></i>
                                    <input type="text" id="apellido_m_lcs" name="apellido_m_lcs" class="form-control"
                                        autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label>Contraseña<i title="Contraseña" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="password" id="password_lcs" name="password_lcs" class="form-control"
                                            autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label>Tipo de empleado<i title="Tipo de empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_tipo_emp_lcs" name="id_tipo_emp_lcs"
                                            style="font-size: 1em">
                                            <option value="0">Seleccione un tipo de empleado</option>
                                        </select></label>
                                </div>
                                <div class="col-12">
                                    <label>Nombre del puesto <i title="Nombre del puesto" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_puesto_lcs" name="id_puesto_lcs">
                                            <option value="0">Seleccione un puesto</option>
                                        </select></label>
                                </div>

                                <div class="col-12">
                                    <label>Planta<i title="Planta donde laborael empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_planta_lcs" name="id_planta_lcs"
                                            style="font-size: 1em" onchange="buscarDepto()">
                                            <option value="0">Seleccione una planta</option>
                                        </select></label>
                                </div>

                                <div class="col-12">
                                    <label>Departamento<i title="Departamento asociado al empleado"
                                            class="fa fa-info-circle" style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_departamento_lcs" name="id_departamento_lcs"
                                            style="font-size: 1em" onchange="buscarLinea()">
                                            <option value="0">Seleccione un departamento</option>
                                        </select></label>
                                </div>

                                <div class="col-12">
                                    <label>Área<i title="Área asignada" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_area_lcs" name="id_area_lcs">
                                            <option value="0">Seleccione una área</option>
                                            <option value="1">Área 1</option>
                                        </select></label>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-md btn-primary pull-right btn-saveRegistro"> <i
                                    class="fa fa-save"></i> Guardar usuario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--################################## END MODAL Agregar usuario #########################################-->

        <!--################################## BEGIN MODAL Editar usuario #########################################-->
        <div class="modal fade" id="editarRegistro">
            <div class="modal-dialog  modal-sm modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" id="cerrarEditarRegistro" class="close" data-dismiss="modal"
                            aria-hidden="true">×</button>
                        <h4 class="modal-title"><i class="fa fa-plus"></i> Editar usuario</h4>
                    </div>
                    <form>
                        <div class="modal-body">

                            <div class="row" style="row-gap: 20px; display: grid;">

                                <div class="col-12" hidden>
                                    <input type="hidden" class="form-control" disabled id="id_usuario_lcs"
                                        name="id_usuario_lcs"></input>
                                </div>

                                <div class="col-12">
                                    <label>Nómina<i title="Número de nómina del empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="text" id="nomina_lcs_edit" name="nomina_lcs_edit" class="form-control"
                                            autocomplete="off" autofocus></input></label>
                                </div>

                                <div class="col-12">
                                    <label for="nombre">Nombre(s)<i title="Nombres del empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="text" id="nombre_lcs_edit" name="nombre_lcs_edit" class="form-control"
                                            autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label for="primer_apellido">Primer apellido<i title="Primer apellido del empleado"
                                            class="fa fa-info-circle" style="color:blue;float:right;"></i>
                                        <input type="text" id="apellido_p_lcs_edit" name="apellido_p_lcs_edit"
                                            class="form-control" autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label for="segundo_apellido">Segundo apellido - Opcional:
                                        <i title="Segundo apellido del empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="text" id="apellido_m_lcs_edit" name="apellido_m_lcs_edit"
                                            class="form-control" autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label>Contraseña<i title="Contraseña" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <input type="password" id="password_lcs_edit" name="password_lcs_edit"
                                            class="form-control" autocomplete="off"></input></label>
                                </div>

                                <div class="col-12">
                                    <label>Tipo de empleado<i title="Tipo de empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_tipo_emp_lcs_edit" name="id_tipo_emp_lcs_edit"
                                            style="font-size: 1em" autocomplete="off">
                                            <option value="0">Seleccione un tipo de empleado</option>
                                        </select></label>
                                </div>
                                <div class="col-12">
                                    <label>Nombre del puesto <i title="Nombre del puesto" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_puesto_lcs_edit" name="id_puesto_lcs_edit"
                                            autocomplete="off">
                                            <option value="0">Seleccione un puesto</option>
                                        </select></label>
                                </div>

                                <div class="col-12">
                                    <label>Planta<i title="Planta donde laborael empleado" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_planta_lcs_edit" name="id_planta_lcs_edit"
                                            style="font-size: 1em" onchange="buscarDepto()" autocomplete="off">
                                            <option value="0">Seleccione una planta</option>
                                        </select></label>
                                </div>
                                <div class="col-12">
                                    <label>Departamento<i title="Departamento asociado al empleado"
                                            class="fa fa-info-circle" style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_departamento_lcs_edit"
                                            name="id_departamento_lcs_edit" style="font-size: 1em" onchange="buscarLinea()"
                                            autocomplete="off">
                                            <option value="0">Seleccione un departamento</option>
                                        </select></label>
                                </div>

                                <div class="col-12">
                                    <label>Área<i title="Área asignada" class="fa fa-info-circle"
                                            style="color:blue;float:right;"></i>
                                        <select class="form-control" id="id_area_lcs_edit" name="id_area_lcs_edit"
                                            autocomplete="off">
                                            <option value="0">Seleccione una área</option>
                                            <option value="1">Área 1</option>
                                        </select></label>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-md btn-primary pull-right btn-saveEditRegistro"> <i
                                    class="fa fa-save"></i> Editar usuario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--################################## END MODAL Editar usuario #########################################-->

        <!-- ================== BEGIN BASE JS ================== -->
        <script src="../Public/plugins/jquery/jquery-1.9.1.min.js"></script>
        <script src="../Public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
        <script src="../Public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
        <!-- Versión comprimida para producción -->
        <script src="../Public/plugins/bootstrap/js/bootstrap.min.js"></script>
        <!-- <script src="../Public/plugins/bootstrap_v5.3.0/js/bootstrap.min.js"></script> -->
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
        <script src="../Public/js/gestion_asociados.js"></script>
        <script src="../Public/js/catalogos.js"></script>
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