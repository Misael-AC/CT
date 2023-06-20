-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2023 at 10:40 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dnmx-lotcontrol-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_altas_lcs`
--

CREATE TABLE `tbl_altas_lcs` (
  `id_alta_lcs` int(11) NOT NULL,
  `nom_modelo_lcs` varchar(50) NOT NULL,
  `term_modelo_lcs` int(20) NOT NULL,
  `numero_pallet_lcs` varchar(50) NOT NULL,
  `cantidad_alta_lcs` int(11) NOT NULL,
  `fecha_hora_lcs` datetime NOT NULL DEFAULT current_timestamp(),
  `id_modelo_del_cambio_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_area_lcs`
--

CREATE TABLE `tbl_area_lcs` (
  `id_area_lcs` int(11) NOT NULL,
  `nombre_area_lcs` varchar(30) NOT NULL,
  `abreviacion_nombre_lcs` varchar(30) NOT NULL,
  `id_departamento_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bajas_lcs`
--

CREATE TABLE `tbl_bajas_lcs` (
  `id_baja_lcs` int(11) NOT NULL,
  `nom_modelo_lcs` varchar(50) NOT NULL,
  `term_modelo_lcs` int(20) NOT NULL,
  `numero_pallet_lcs` varchar(50) NOT NULL,
  `cantidad_baja_lcs` int(20) NOT NULL,
  `fecha_hora_lcs` datetime NOT NULL DEFAULT current_timestamp(),
  `id_modelo_del_cambio_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cambios_modelo_lcs`
--

CREATE TABLE `tbl_cambios_modelo_lcs` (
  `id_registro_cambio_lcs` int(11) NOT NULL,
  `nomina_lcs` varchar(20) NOT NULL,
  `id_modelo_lcs` int(11) NOT NULL,
  `fecha_hora_lcs` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_departamentos_lcs`
--

CREATE TABLE `tbl_departamentos_lcs` (
  `id_departamento_lcs` int(11) NOT NULL,
  `no_depto_lcs` int(11) NOT NULL,
  `nom_depto_lcs` varchar(50) NOT NULL,
  `id_planta_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_departamentos_lcs`
--

INSERT INTO `tbl_departamentos_lcs` (`id_departamento_lcs`, `no_depto_lcs`, `nom_depto_lcs`, `id_planta_lcs`) VALUES
(1, 387, 'Die Cast VCT', 1),
(2, 391, 'General Production', 1),
(3, 392, 'Valve Body', 1),
(4, 393, 'RH', 4),
(5, 394, 'RH', 2),
(6, 395, 'Productivity', 1),
(7, 396, 'IoT Manufacturing', 1),
(8, 397, 'Nóminas', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_estado_actual_lcs`
--

CREATE TABLE `tbl_estado_actual_lcs` (
  `id_estado_actual_lcs` int(11) NOT NULL,
  `num_term_mod_lcs` int(20) NOT NULL,
  `cantidad_real_lcs` int(11) NOT NULL,
  `cantidad_limite_lcs` int(11) NOT NULL,
  `id_modelo_del_cambio_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_inventario_lcs`
--

CREATE TABLE `tbl_inventario_lcs` (
  `id_inventario_lcs` int(11) NOT NULL,
  `linea_lcs` varchar(30) NOT NULL,
  `nombre_lcs` varchar(40) NOT NULL,
  `rango_lcs` varchar(40) NOT NULL,
  `modelo_lcs` varchar(40) NOT NULL,
  `cantidad_min_lcs` int(11) NOT NULL,
  `cantidad_max_lcs` int(11) NOT NULL,
  `fecha_hora_lcs` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_inventario_lcs`
--

INSERT INTO `tbl_inventario_lcs` (`id_inventario_lcs`, `linea_lcs`, `nombre_lcs`, `rango_lcs`, `modelo_lcs`, `cantidad_min_lcs`, `cantidad_max_lcs`, `fecha_hora_lcs`) VALUES
(12, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 0, '2023-01-30 00:00:00'),
(13, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 0, '2023-01-30 00:00:00'),
(16, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 0, '2023-01-31 00:00:00'),
(17, 'Línea 1', 'MX079617-2320', 'GRANDE', 'MX079600-2150', 4, 0, '2023-01-31 00:00:00'),
(19, 'Línea 1', 'MX079617-2320', 'GRANDE', 'MX079600-2150', 4, 0, '2023-02-01 00:00:00'),
(25, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 140, 110, '2023-02-01 00:00:00'),
(29, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 280, 280, '2023-02-02 00:00:00'),
(30, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 320, '2023-02-03 00:00:00'),
(31, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 120, 120, '2023-02-09 00:00:00'),
(32, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 160, 160, '2023-02-10 00:00:00'),
(33, 'Línea 2', 'MX079617-2320', 'CHICO', 'MX079600-2150', 160, 160, '2023-02-10 00:00:00'),
(34, 'Línea 2', 'MX079617-2320', 'CHICO', 'MX079600-2150', 200, 200, '2023-02-10 00:00:00'),
(35, 'Línea 3', 'MX079617-2320', 'CHICO', 'MX079600-2150', 200, 200, '2023-01-30 00:00:00'),
(36, 'Línea 3', 'MX079617-2320', 'CHICO', 'MX079600-2150', 240, 240, '2023-01-31 00:00:00'),
(37, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2320', 280, 280, '2023-01-31 00:00:00'),
(38, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2160', 280, 280, '2023-01-31 00:00:00'),
(39, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2160', 280, 280, '2023-01-31 00:00:00'),
(40, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2320', 320, 320, '2023-01-31 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_modelos_lcs`
--

CREATE TABLE `tbl_modelos_lcs` (
  `id_modelo_lcs` int(11) NOT NULL,
  `linea_modelo_lcs` varchar(50) NOT NULL,
  `nom_modelo_lcs` varchar(50) NOT NULL,
  `rango_modelo_lcs` varchar(50) NOT NULL,
  `nom_term_mod_lcs` varchar(50) NOT NULL,
  `num_term_mod_lcs` int(20) NOT NULL,
  `status_modelo_lcs` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_modelos_lcs`
--

INSERT INTO `tbl_modelos_lcs` (`id_modelo_lcs`, `linea_modelo_lcs`, `nom_modelo_lcs`, `rango_modelo_lcs`, `nom_term_mod_lcs`, `num_term_mod_lcs`, `status_modelo_lcs`) VALUES
(1, 'Linea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150 C', 2150, 1),
(2, 'Linea 1', 'MX079617-2320', 'MEDIANO', 'MX079600-2150 M', 2150, 1),
(3, 'Linea 1', 'MX079617-2320', 'GRANDE', 'MX079600-2150 G', 2150, 1),
(4, 'Linea 1', 'MX079617-2330', 'CHICO', 'MX079600-2160 C', 2160, 1),
(5, 'Linea 1', 'MX079617-2330', 'MEDIANO', 'MX079600-2160 M', 2160, 1),
(6, 'Linea 1', 'MX079617-2330', 'GRANDE', 'MX079600-2160 G', 2160, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_plantas_lcs`
--

CREATE TABLE `tbl_plantas_lcs` (
  `id_planta_lcs` int(11) NOT NULL,
  `nombre_planta_lcs` varchar(20) NOT NULL,
  `abreviacion_planta_lcs` varchar(20) NOT NULL,
  `status_planta_lcs` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_plantas_lcs`
--

INSERT INTO `tbl_plantas_lcs` (`id_planta_lcs`, `nombre_planta_lcs`, `abreviacion_planta_lcs`, `status_planta_lcs`) VALUES
(1, 'Apodaca MTC', 'MTC', 1),
(2, 'Apodaca CPS', 'CPS', 1),
(3, 'Guadalupe MTC', 'MTC G', 1),
(4, 'Silao', 'SPP', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_puestos_lcs`
--

CREATE TABLE `tbl_puestos_lcs` (
  `id_puesto_lcs` int(11) NOT NULL,
  `nom_puesto_lcs` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_puestos_lcs`
--

INSERT INTO `tbl_puestos_lcs` (`id_puesto_lcs`, `nom_puesto_lcs`) VALUES
(1, 'Asociado'),
(2, 'Asistente'),
(3, 'Analista'),
(4, 'Especialista'),
(5, 'Especialista Avanzado'),
(6, 'Sublider'),
(7, 'Jefe de Grupo'),
(8, 'Jefe de Grupo Avanzado'),
(9, 'Supervisor'),
(10, 'Asistente de Gerente'),
(11, 'Gerente General');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tipo_emp_lcs`
--

CREATE TABLE `tbl_tipo_emp_lcs` (
  `id_tipo_emp_lcs` int(11) NOT NULL,
  `nom_tipo_emp_lcs` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_tipo_emp_lcs`
--

INSERT INTO `tbl_tipo_emp_lcs` (`id_tipo_emp_lcs`, `nom_tipo_emp_lcs`) VALUES
(1, 'Administrador'),
(2, 'User'),
(3, 'RH'),
(4, 'Asociado'),
(5, 'Team Leader'),
(6, 'Supervisor');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usuario_lcs`
--

CREATE TABLE `tbl_usuario_lcs` (
  `id_usuario_lcs` int(11) NOT NULL,
  `nombre_lcs` varchar(20) NOT NULL,
  `apellido_p_lcs` varchar(20) NOT NULL,
  `apellido_m_lcs` varchar(20) NOT NULL,
  `nomina_lcs` varchar(20) NOT NULL,
  `password_lcs` varchar(20) NOT NULL,
  `id_tipo_emp_lcs` int(11) NOT NULL,
  `id_puesto_lcs` int(11) NOT NULL,
  `id_area_lcs` int(11) NOT NULL,
  `id_departamento_lcs` int(11) NOT NULL,
  `id_planta_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_usuario_lcs`
--

INSERT INTO `tbl_usuario_lcs` (`id_usuario_lcs`, `nombre_lcs`, `apellido_p_lcs`, `apellido_m_lcs`, `nomina_lcs`, `password_lcs`, `id_tipo_emp_lcs`, `id_puesto_lcs`, `id_area_lcs`, `id_departamento_lcs`, `id_planta_lcs`) VALUES
(1, 'Cesar', 'Alanis', 'Garza', '1007476', '1007476', 1, 1, 1, 7, 1),
(2, 'Misael', 'Alcudia', 'Cabrera', '1008804', '1008804', 1, 1, 1, 7, 1),
(3, 'Jazmin', 'Palomares', 'Balleza', '1009271', '1009271', 1, 1, 1, 7, 1),
(4, 'Brandon', 'Lozada', 'Cárdenas', '1009814', '1009814', 1, 1, 1, 7, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_altas_lcs`
--
ALTER TABLE `tbl_altas_lcs`
  ADD PRIMARY KEY (`id_alta_lcs`),
  ADD KEY `id_modelo_del_cambio_lcs` (`id_modelo_del_cambio_lcs`);

--
-- Indexes for table `tbl_area_lcs`
--
ALTER TABLE `tbl_area_lcs`
  ADD PRIMARY KEY (`id_area_lcs`),
  ADD KEY `id_departamento_lcs` (`id_departamento_lcs`);

--
-- Indexes for table `tbl_bajas_lcs`
--
ALTER TABLE `tbl_bajas_lcs`
  ADD PRIMARY KEY (`id_baja_lcs`),
  ADD KEY `id_modelo_del_cambio_lcs` (`id_modelo_del_cambio_lcs`);

--
-- Indexes for table `tbl_cambios_modelo_lcs`
--
ALTER TABLE `tbl_cambios_modelo_lcs`
  ADD PRIMARY KEY (`id_registro_cambio_lcs`),
  ADD KEY `id_modelos_lcs` (`id_modelo_lcs`),
  ADD KEY `nomina_lcs` (`nomina_lcs`);

--
-- Indexes for table `tbl_departamentos_lcs`
--
ALTER TABLE `tbl_departamentos_lcs`
  ADD PRIMARY KEY (`id_departamento_lcs`),
  ADD KEY `id_planta_lcs` (`id_planta_lcs`);

--
-- Indexes for table `tbl_estado_actual_lcs`
--
ALTER TABLE `tbl_estado_actual_lcs`
  ADD PRIMARY KEY (`id_estado_actual_lcs`),
  ADD KEY `id_modelo_cambio_lcs` (`id_modelo_del_cambio_lcs`);

--
-- Indexes for table `tbl_inventario_lcs`
--
ALTER TABLE `tbl_inventario_lcs`
  ADD PRIMARY KEY (`id_inventario_lcs`);

--
-- Indexes for table `tbl_modelos_lcs`
--
ALTER TABLE `tbl_modelos_lcs`
  ADD PRIMARY KEY (`id_modelo_lcs`);

--
-- Indexes for table `tbl_plantas_lcs`
--
ALTER TABLE `tbl_plantas_lcs`
  ADD PRIMARY KEY (`id_planta_lcs`);

--
-- Indexes for table `tbl_puestos_lcs`
--
ALTER TABLE `tbl_puestos_lcs`
  ADD PRIMARY KEY (`id_puesto_lcs`);

--
-- Indexes for table `tbl_tipo_emp_lcs`
--
ALTER TABLE `tbl_tipo_emp_lcs`
  ADD PRIMARY KEY (`id_tipo_emp_lcs`);

--
-- Indexes for table `tbl_usuario_lcs`
--
ALTER TABLE `tbl_usuario_lcs`
  ADD PRIMARY KEY (`id_usuario_lcs`),
  ADD UNIQUE KEY `nomina_lcs` (`nomina_lcs`),
  ADD KEY `id_tipo_emp_lcs` (`id_tipo_emp_lcs`),
  ADD KEY `id_puesto_lcs` (`id_puesto_lcs`),
  ADD KEY `id_planta_lcs` (`id_planta_lcs`),
  ADD KEY `id_departamento_lcs` (`id_departamento_lcs`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_altas_lcs`
--
ALTER TABLE `tbl_altas_lcs`
  MODIFY `id_alta_lcs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_area_lcs`
--
ALTER TABLE `tbl_area_lcs`
  MODIFY `id_area_lcs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_bajas_lcs`
--
ALTER TABLE `tbl_bajas_lcs`
  MODIFY `id_baja_lcs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_cambios_modelo_lcs`
--
ALTER TABLE `tbl_cambios_modelo_lcs`
  MODIFY `id_registro_cambio_lcs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_departamentos_lcs`
--
ALTER TABLE `tbl_departamentos_lcs`
  MODIFY `id_departamento_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_estado_actual_lcs`
--
ALTER TABLE `tbl_estado_actual_lcs`
  MODIFY `id_estado_actual_lcs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_inventario_lcs`
--
ALTER TABLE `tbl_inventario_lcs`
  MODIFY `id_inventario_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `tbl_modelos_lcs`
--
ALTER TABLE `tbl_modelos_lcs`
  MODIFY `id_modelo_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_plantas_lcs`
--
ALTER TABLE `tbl_plantas_lcs`
  MODIFY `id_planta_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_puestos_lcs`
--
ALTER TABLE `tbl_puestos_lcs`
  MODIFY `id_puesto_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_tipo_emp_lcs`
--
ALTER TABLE `tbl_tipo_emp_lcs`
  MODIFY `id_tipo_emp_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_usuario_lcs`
--
ALTER TABLE `tbl_usuario_lcs`
  MODIFY `id_usuario_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_altas_lcs`
--
ALTER TABLE `tbl_altas_lcs`
  ADD CONSTRAINT `tbl_altas_lcs_ibfk_1` FOREIGN KEY (`id_modelo_del_cambio_lcs`) REFERENCES `tbl_cambios_modelo_lcs` (`id_modelo_lcs`);

--
-- Constraints for table `tbl_area_lcs`
--
ALTER TABLE `tbl_area_lcs`
  ADD CONSTRAINT `tbl_area_lcs_ibfk_1` FOREIGN KEY (`id_departamento_lcs`) REFERENCES `tbl_departamentos_lcs` (`id_departamento_lcs`);

--
-- Constraints for table `tbl_bajas_lcs`
--
ALTER TABLE `tbl_bajas_lcs`
  ADD CONSTRAINT `tbl_bajas_lcs_ibfk_1` FOREIGN KEY (`id_modelo_del_cambio_lcs`) REFERENCES `tbl_cambios_modelo_lcs` (`id_modelo_lcs`);

--
-- Constraints for table `tbl_cambios_modelo_lcs`
--
ALTER TABLE `tbl_cambios_modelo_lcs`
  ADD CONSTRAINT `tbl_cambios_modelo_lcs_ibfk_1` FOREIGN KEY (`id_modelo_lcs`) REFERENCES `tbl_modelos_lcs` (`id_modelo_lcs`),
  ADD CONSTRAINT `tbl_cambios_modelo_lcs_ibfk_2` FOREIGN KEY (`nomina_lcs`) REFERENCES `tbl_usuario_lcs` (`nomina_lcs`);

--
-- Constraints for table `tbl_departamentos_lcs`
--
ALTER TABLE `tbl_departamentos_lcs`
  ADD CONSTRAINT `tbl_departamentos_lcs_ibfk_1` FOREIGN KEY (`id_planta_lcs`) REFERENCES `tbl_plantas_lcs` (`id_planta_lcs`);

--
-- Constraints for table `tbl_estado_actual_lcs`
--
ALTER TABLE `tbl_estado_actual_lcs`
  ADD CONSTRAINT `tbl_estado_actual_lcs_ibfk_1` FOREIGN KEY (`id_modelo_del_cambio_lcs`) REFERENCES `tbl_cambios_modelo_lcs` (`id_modelo_lcs`);

--
-- Constraints for table `tbl_usuario_lcs`
--
ALTER TABLE `tbl_usuario_lcs`
  ADD CONSTRAINT `tbl_usuario_lcs_ibfk_1` FOREIGN KEY (`id_tipo_emp_lcs`) REFERENCES `tbl_tipo_emp_lcs` (`id_tipo_emp_lcs`),
  ADD CONSTRAINT `tbl_usuario_lcs_ibfk_2` FOREIGN KEY (`id_puesto_lcs`) REFERENCES `tbl_puestos_lcs` (`id_puesto_lcs`),
  ADD CONSTRAINT `tbl_usuario_lcs_ibfk_3` FOREIGN KEY (`id_planta_lcs`) REFERENCES `tbl_plantas_lcs` (`id_planta_lcs`),
  ADD CONSTRAINT `tbl_usuario_lcs_ibfk_4` FOREIGN KEY (`id_departamento_lcs`) REFERENCES `tbl_departamentos_lcs` (`id_departamento_lcs`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
