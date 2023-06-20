<?php
switch ($_SESSION['id_role']) {
	case 1:
		
?>

<!-- ================================   User Programador     ======================================= -->
<!-- begin #sidebar -->
<div id="sidebar" class="sidebar">
    <!-- begin sidebar scrollbar -->
    <div data-scrollbar="true" data-height="100%">
        <!-- begin sidebar user -->
        <ul class="nav">
            <li class="nav-profile">
                <div class="image">
                    <a href="javascript:;"><img src="../Public/img/user/<?php echo $_SESSION['img_user']; ?>"
                            alt="" /></a>
                </div>
                <div class="info">

                    <?php
							$completename = '';
							$completename .= $_SESSION['nombre'];
							$completename .= ' ';
							$completename .= $_SESSION['apellidop'];
							$completename .= ' ';
							$completename .= $_SESSION['apellidom'];
							echo $completename;
							?>
                    <medium>
                        <?php echo $_SESSION['role']; ?>
                    </medium>
                </div>
            </li>
        </ul>
        <ul class="nav">
            <li>
                <a href="index.php">
                    <i class="fa fa-pie-chart"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="altas.php">
                    <i class="fa fa-line-chart"></i>
                    <span>Altas</span>
                </a>
            </li>
            <li>
                <a href="bajas.php">
                    <i class="fa fa-sort-amount-asc"></i>
                    <span>Bajas</span>
                </a>
            </li>
            <li>
                <a href="grafica.php">
                    <i class="fa fa-bar-chart"></i>
                    <span>Gráfica</span>
                </a>
            </li>
            <li>
                <a href="historial.php">
                    <i class="fa fa-history"></i>
                    <span>Historial E/S</span>
                </a>
            </li>
            <li>
                <a href="escaneo_cajas.php">
                <i class="fa fa-barcode"></i>
                    <span> Escaneo de cajas</span>
                </a>
            </li>
            <li>
                <a href="inventario.php">
                    <i class="fa fa-archive"></i>
                    <span>Inventario</span>
                </a>
            </li>
            <li>
                <a href="gestion_asociados.php">
                    <i class="fa fa-users"></i>
                    <span>Gestión de usuarios</span>
                </a>
            </li>
            <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i
                        class="fa fa-angle-double-left"></i></a></li>
        </ul>
        <!-- end sidebar nav -->
    </div>
    <!-- end sidebar scrollbar -->
</div>
<div class="sidebar-bg"></div>
<!--==============================   Final User Programador   ======================================= -->

<?php
		break;
		?>
<?php
}
echo "<input id='idsocket' type='hidden' value='$_SESSION[id_empleado]'></input>";
echo "<input id='typeemp' type='hidden' value='$_SESSION[id_role]'></input>";
?>