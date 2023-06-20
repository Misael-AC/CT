<?php
require_once '../Config/conexion.php';
?>

<div class="container-fluid">
				<!-- begin mobile sidebar expand / collapse button -->
				<div class="navbar-header">
					<a href="index.php" class="navbar-brand">
						<img src="../Public/img/logo/LCS.png" alt="" style="max-width: 140px; margin-top: -8px">
					</a>
					<button type="button" class="navbar-toggle" data-click="sidebar-toggled">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!-- end mobile sidebar expand / collapse button -->

				<!-- begin header navigation right -->
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<ul class="dropdown-menu media-list pull-right animated fadeInDown" style="max-height: 400px; overflow-y:scroll" id="container_noti"></ul>
					</li>
					<li class="dropdown navbar-user">
						<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
							<img src="../Public/img/user/user-15.png" alt="" />
							<span class="hidden-xs">
                                <?php
                                    $completename = '';
                                    $completename .= $_SESSION['nombre'];
                                    $completename .= ' ';
                                    $completename .= $_SESSION['apellidop'];
                                    $completename .= ' ';
                                    $completename .= $_SESSION['apellidom'];
                                    echo $completename;
                                ?>
                            </span> <b class="caret"></b>
						</a>
						<ul class="dropdown-menu animated fadeInLeft">
							<li class="arrow"></li>
							<li><a href="profile.php">Profile</a></li>
							<li class="divider"></li>
							<li><a href="login.php?logout">Log Out</a></li>
						</ul>
					</li>
				</ul>
				<!-- end header navigation right -->
			</div>
