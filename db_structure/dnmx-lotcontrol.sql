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
-- Database: `dnmx-lotcontrol`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_altas_lcs`
--

CREATE TABLE `tbl_altas_lcs` (
  `id_entradas_lcs` int(11) NOT NULL,
  `nom_modelo_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `term_modelo_lcs` int(20) NOT NULL,
  `numero_pallet_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `cantidad_ent_lcs` int(11) NOT NULL,
  `id_modelo_del_cambio_lcs` int(11) NOT NULL,
  `fecha_hora_alta_lcs` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_altas_lcs`
--

INSERT INTO `tbl_altas_lcs` (`id_entradas_lcs`, `nom_modelo_lcs`, `term_modelo_lcs`, `numero_pallet_lcs`, `cantidad_ent_lcs`, `id_modelo_del_cambio_lcs`, `fecha_hora_alta_lcs`) VALUES
(1, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:46:51'),
(2, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:47:38'),
(3, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:47:47'),
(4, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:47:53'),
(5, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:47:58'),
(6, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:48:03'),
(7, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:48:38'),
(8, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:50:31'),
(9, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:50:37'),
(10, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:50:43'),
(11, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:50:49'),
(12, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 10:58:53'),
(13, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 11:00:15'),
(14, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:13:10'),
(15, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:13:13'),
(16, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:13:16'),
(17, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:13:22'),
(18, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:13:32'),
(19, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:42:38'),
(20, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:42:42'),
(21, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:42:45'),
(22, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 12:42:49'),
(23, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 14:41:28'),
(24, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 14:41:41'),
(25, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 15:36:43'),
(26, 'MX079617', 2150, 'PALLET 1', 40, 0, '2023-03-03 15:36:49');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bajas_lcs`
--

CREATE TABLE `tbl_bajas_lcs` (
  `id_salidas_lcs` int(11) NOT NULL,
  `nom_modelo_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `term_modelo_lcs` int(20) NOT NULL,
  `numero_pallet_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `cantidad_sa_lcs` int(11) NOT NULL,
  `fecha_hora_baja_lcs` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_bajas_lcs`
--

INSERT INTO `tbl_bajas_lcs` (`id_salidas_lcs`, `nom_modelo_lcs`, `term_modelo_lcs`, `numero_pallet_lcs`, `cantidad_sa_lcs`, `fecha_hora_baja_lcs`) VALUES
(1, 'MX079617', 2150, 'PALLET 1', 40, '2023-03-03 14:32:51'),
(2, 'MX079617', 2150, 'PALLET 1', 40, '2023-03-03 14:35:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cambios_modelo_lcs`
--

CREATE TABLE `tbl_cambios_modelo_lcs` (
  `id_reg_cambio_mod` int(11) NOT NULL,
  `nomina_lcs` varchar(15) CHARACTER SET utf8mb4 NOT NULL,
  `id_modelos_lcs` int(20) NOT NULL,
  `fecha_hora_lcs` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_cambios_modelo_lcs`
--

INSERT INTO `tbl_cambios_modelo_lcs` (`id_reg_cambio_mod`, `nomina_lcs`, `id_modelos_lcs`, `fecha_hora_lcs`) VALUES
(1, '1009814', 1, '2023-03-03 10:35:57'),
(2, '1009814', 2, '2023-03-03 10:35:57'),
(3, '1009814', 3, '2023-03-03 10:35:57'),
(5, '1009814', 1, '2023-03-03 10:35:57'),
(6, '1009814', 2, '2023-03-03 10:35:57'),
(7, '1009814', 1, '2023-03-03 10:35:57'),
(8, '1009814', 2, '2023-03-03 10:35:57'),
(9, '1009814', 1, '2023-03-03 10:35:57'),
(10, '1009814', 2, '2023-03-03 10:35:57'),
(11, '1009814', 3, '2023-03-03 10:35:57'),
(13, '1009814', 1, '2023-03-03 10:35:57'),
(14, '1009814', 2, '2023-03-03 10:35:57'),
(15, '1009814', 1, '2023-03-03 10:35:57'),
(16, '1009814', 3, '2023-03-03 10:35:57'),
(17, '1009814', 1, '2023-03-03 10:35:57'),
(18, '1009814', 2, '2023-03-03 10:35:57'),
(19, '1009814', 3, '2023-03-03 10:35:57'),
(20, '1009814', 1, '2023-03-03 10:35:57'),
(21, '1009814', 2, '2023-03-03 10:35:57'),
(22, '1009814', 3, '2023-03-03 10:35:57'),
(23, '1009814', 1, '2023-03-03 10:35:57'),
(24, '1009814', 2, '2023-03-03 10:35:57'),
(25, '1009814', 1, '2023-03-03 10:35:57'),
(26, '1009814', 2, '2023-03-03 10:35:57'),
(27, '1009814', 1, '2023-03-03 10:35:57'),
(28, '1009814', 2, '2023-03-03 10:35:57'),
(29, '1009814', 3, '2023-03-03 10:35:57'),
(30, '1009814', 1, '2023-03-03 10:35:57'),
(31, '1009814', 2, '2023-03-03 10:47:29'),
(32, '1009814', 3, '2023-03-03 10:48:19'),
(33, '1009814', 1, '2023-03-03 11:57:26'),
(34, '1009814', 2, '2023-03-03 12:16:00'),
(35, '1009814', 1, '2023-03-03 12:42:33'),
(36, '1009814', 2, '2023-03-03 14:34:41'),
(37, '1009814', 1, '2023-03-03 15:36:35');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_departamentos`
--

CREATE TABLE `tbl_departamentos` (
  `id_departamento_lcs` int(11) NOT NULL,
  `no_depto_lcs` int(11) NOT NULL,
  `nom_depto_lcs` varchar(50) NOT NULL,
  `id_planta_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_departamentos`
--

INSERT INTO `tbl_departamentos` (`id_departamento_lcs`, `no_depto_lcs`, `nom_depto_lcs`, `id_planta_lcs`) VALUES
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
  `id_modelos_lcs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_estado_actual_lcs`
--

INSERT INTO `tbl_estado_actual_lcs` (`id_estado_actual_lcs`, `num_term_mod_lcs`, `cantidad_real_lcs`, `cantidad_limite_lcs`, `id_modelos_lcs`) VALUES
(1, 2150, 440, 680, 1),
(2, 2150, 240, 720, 2),
(3, 2150, 280, 760, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_inventario`
--

CREATE TABLE `tbl_inventario` (
  `id` int(11) NOT NULL,
  `linea` varchar(30) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `rango` varchar(40) NOT NULL,
  `modelo` varchar(40) NOT NULL,
  `inv_min` int(11) NOT NULL,
  `inv_max` int(11) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_inventario`
--

INSERT INTO `tbl_inventario` (`id`, `linea`, `nombre`, `rango`, `modelo`, `inv_min`, `inv_max`, `fecha`) VALUES
(12, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 0, '2023-01-30'),
(13, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 0, '2023-01-30'),
(16, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 0, '2023-01-31'),
(17, 'Línea 1', 'MX079617-2320', 'GRANDE', 'MX079600-2150', 4, 0, '2023-01-31'),
(19, 'Línea 1', 'MX079617-2320', 'GRANDE', 'MX079600-2150', 4, 0, '2023-02-01'),
(25, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 140, 110, '2023-02-01'),
(29, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 280, 280, '2023-02-02'),
(30, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 40, 320, '2023-02-03'),
(31, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 120, 120, '2023-02-09'),
(32, 'Línea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150', 160, 160, '2023-02-10'),
(33, 'Línea 2', 'MX079617-2320', 'CHICO', 'MX079600-2150', 160, 160, '2023-02-10'),
(34, 'Línea 2', 'MX079617-2320', 'CHICO', 'MX079600-2150', 200, 200, '2023-02-10'),
(35, 'Línea 3', 'MX079617-2320', 'CHICO', 'MX079600-2150', 200, 200, '2023-01-30'),
(36, 'Línea 3', 'MX079617-2320', 'CHICO', 'MX079600-2150', 240, 240, '2023-01-31'),
(37, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2320', 280, 280, '2023-01-31'),
(38, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2160', 280, 280, '2023-01-31'),
(39, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2160', 280, 280, '2023-01-31'),
(40, 'Línea 3', 'MX079617-2320', 'GRANDE', 'MX079617-2320', 320, 320, '2023-01-31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_modelos_lcs`
--

CREATE TABLE `tbl_modelos_lcs` (
  `id_modelos_lcs` int(11) NOT NULL,
  `linea_modelo_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `nom_modelo_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `rango_modelo_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `nom_term_mod_lcs` varchar(50) COLLATE utf8_bin NOT NULL,
  `num_term_mod_lcs` int(20) NOT NULL,
  `status_modelo_lcs` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_modelos_lcs`
--

INSERT INTO `tbl_modelos_lcs` (`id_modelos_lcs`, `linea_modelo_lcs`, `nom_modelo_lcs`, `rango_modelo_lcs`, `nom_term_mod_lcs`, `num_term_mod_lcs`, `status_modelo_lcs`) VALUES
(1, 'Linea 1', 'MX079617-2320', 'CHICO', 'MX079600-2150 C', 2150, 1),
(2, 'Linea 1', 'MX079617-2320', 'MEDIANO', 'MX079600-2150 M', 2150, 1),
(3, 'Linea 1', 'MX079617-2320', 'GRANDE', 'MX079600-2150 G', 2150, 1),
(4, 'Linea 1', 'MX079617-2330', 'CHICO', 'MX079600-2160 C', 2160, 0),
(5, 'Linea 1', 'MX079617-2330', 'MEDIANO', 'MX079600-2160 M', 2160, 0),
(6, 'Linea 1', 'MX079617-2330', 'GRANDE', 'MX079600-2160 G', 2160, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_plantas`
--

CREATE TABLE `tbl_plantas` (
  `id_planta_lcs` int(11) NOT NULL,
  `nombre_planta_lcs` varchar(20) NOT NULL,
  `abreviacion_planta_lcs` varchar(20) NOT NULL,
  `status_planta_lcs` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_plantas`
--

INSERT INTO `tbl_plantas` (`id_planta_lcs`, `nombre_planta_lcs`, `abreviacion_planta_lcs`, `status_planta_lcs`) VALUES
(1, 'Apodaca MTC', 'MTC', 1),
(2, 'Apodaca CPS', 'CPS', 1),
(3, 'Guadalupe MTC', 'MTC G', 1),
(4, 'Silao', 'SPP', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_puestos`
--

CREATE TABLE `tbl_puestos` (
  `id_puesto_lcs` int(11) NOT NULL,
  `nom_puesto_lcs` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_puestos`
--

INSERT INTO `tbl_puestos` (`id_puesto_lcs`, `nom_puesto_lcs`) VALUES
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
-- Table structure for table `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id_usuario_lcs` int(11) NOT NULL,
  `nombre_lcs` varchar(20) NOT NULL,
  `apellido_p_lcs` varchar(20) NOT NULL,
  `apellido_m_lcs` varchar(20) NOT NULL,
  `nomina_lcs` varchar(15) NOT NULL,
  `password_lcs` varchar(20) NOT NULL,
  `id_tipo_emp_lcs` int(11) NOT NULL,
  `id_puesto_lcs` int(11) NOT NULL,
  `id_area_lcs` int(11) NOT NULL,
  `id_departamento_lcs` int(11) NOT NULL,
  `id_planta_lcs` int(11) NOT NULL,
  `es_activo_lcs` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`id_usuario_lcs`, `nombre_lcs`, `apellido_p_lcs`, `apellido_m_lcs`, `nomina_lcs`, `password_lcs`, `id_tipo_emp_lcs`, `id_puesto_lcs`, `id_area_lcs`, `id_departamento_lcs`, `id_planta_lcs`, `es_activo_lcs`) VALUES
(1, 'Cesar', 'Alanis', 'Garza', '1007476', '1007476', 1, 1, 1, 7, 1, 1),
(2, 'Jazmin', 'Palomares', 'Balleza', '1009271', '1009271', 1, 1, 1, 7, 1, 1),
(7, 'Brandon', 'Lozada', 'Cárdenas', '1009814', '1009814', 1, 1, 1, 7, 1, 1),
(26, 'Misael', 'Alcudia', 'Cabrera', '1008804', '1008804', 1, 1, 1, 7, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_altas_lcs`
--
ALTER TABLE `tbl_altas_lcs`
  ADD PRIMARY KEY (`id_entradas_lcs`);

--
-- Indexes for table `tbl_bajas_lcs`
--
ALTER TABLE `tbl_bajas_lcs`
  ADD PRIMARY KEY (`id_salidas_lcs`);

--
-- Indexes for table `tbl_cambios_modelo_lcs`
--
ALTER TABLE `tbl_cambios_modelo_lcs`
  ADD PRIMARY KEY (`id_reg_cambio_mod`),
  ADD KEY `id_modelos_lcs` (`id_modelos_lcs`),
  ADD KEY `nomina_lcs` (`nomina_lcs`);

--
-- Indexes for table `tbl_departamentos`
--
ALTER TABLE `tbl_departamentos`
  ADD PRIMARY KEY (`id_departamento_lcs`);

--
-- Indexes for table `tbl_estado_actual_lcs`
--
ALTER TABLE `tbl_estado_actual_lcs`
  ADD PRIMARY KEY (`id_estado_actual_lcs`),
  ADD KEY `id_modelos_lcs` (`id_modelos_lcs`);

--
-- Indexes for table `tbl_inventario`
--
ALTER TABLE `tbl_inventario`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_modelos_lcs`
--
ALTER TABLE `tbl_modelos_lcs`
  ADD PRIMARY KEY (`id_modelos_lcs`);

--
-- Indexes for table `tbl_plantas`
--
ALTER TABLE `tbl_plantas`
  ADD PRIMARY KEY (`id_planta_lcs`);

--
-- Indexes for table `tbl_puestos`
--
ALTER TABLE `tbl_puestos`
  ADD PRIMARY KEY (`id_puesto_lcs`);

--
-- Indexes for table `tbl_tipo_emp_lcs`
--
ALTER TABLE `tbl_tipo_emp_lcs`
  ADD PRIMARY KEY (`id_tipo_emp_lcs`);

--
-- Indexes for table `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`id_usuario_lcs`),
  ADD UNIQUE KEY `nomina_lcs` (`nomina_lcs`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_altas_lcs`
--
ALTER TABLE `tbl_altas_lcs`
  MODIFY `id_entradas_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbl_bajas_lcs`
--
ALTER TABLE `tbl_bajas_lcs`
  MODIFY `id_salidas_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_cambios_modelo_lcs`
--
ALTER TABLE `tbl_cambios_modelo_lcs`
  MODIFY `id_reg_cambio_mod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tbl_departamentos`
--
ALTER TABLE `tbl_departamentos`
  MODIFY `id_departamento_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_estado_actual_lcs`
--
ALTER TABLE `tbl_estado_actual_lcs`
  MODIFY `id_estado_actual_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_inventario`
--
ALTER TABLE `tbl_inventario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `tbl_modelos_lcs`
--
ALTER TABLE `tbl_modelos_lcs`
  MODIFY `id_modelos_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_plantas`
--
ALTER TABLE `tbl_plantas`
  MODIFY `id_planta_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_puestos`
--
ALTER TABLE `tbl_puestos`
  MODIFY `id_puesto_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_tipo_emp_lcs`
--
ALTER TABLE `tbl_tipo_emp_lcs`
  MODIFY `id_tipo_emp_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `id_usuario_lcs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_cambios_modelo_lcs`
--
ALTER TABLE `tbl_cambios_modelo_lcs`
  ADD CONSTRAINT `tbl_cambios_modelo_lcs_ibfk_1` FOREIGN KEY (`id_modelos_lcs`) REFERENCES `tbl_modelos_lcs` (`id_modelos_lcs`),
  ADD CONSTRAINT `tbl_cambios_modelo_lcs_ibfk_2` FOREIGN KEY (`nomina_lcs`) REFERENCES `tbl_usuario` (`nomina_lcs`);

--
-- Constraints for table `tbl_estado_actual_lcs`
--
ALTER TABLE `tbl_estado_actual_lcs`
  ADD CONSTRAINT `tbl_estado_actual_lcs_ibfk_1` FOREIGN KEY (`id_modelos_lcs`) REFERENCES `tbl_cambios_modelo_lcs` (`id_modelos_lcs`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
