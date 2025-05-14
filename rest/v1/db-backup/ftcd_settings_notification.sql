-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 09:45 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter_ftc_donation_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `ftcd_settings_notification`
--

CREATE TABLE `ftcd_settings_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_is_active` tinyint(1) NOT NULL,
  `notification_name` varchar(128) NOT NULL,
  `notification_email` text NOT NULL,
  `notification_created` datetime NOT NULL,
  `notification_updated` datetime NOT NULL,
  `notification_purpose` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ftcd_settings_notification`
--
ALTER TABLE `ftcd_settings_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ftcd_settings_notification`
--
ALTER TABLE `ftcd_settings_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
