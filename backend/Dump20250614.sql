CREATE DATABASE  IF NOT EXISTS `ufc_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ufc_db`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ufc_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fighter_stats`
--

DROP TABLE IF EXISTS `fighter_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fighter_stats` (
  `name` varchar(100) NOT NULL,
  `weight_class` varchar(50) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `fight_style` varchar(100) DEFAULT NULL,
  `ranking` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `height_cm` float DEFAULT NULL,
  `reach_cm` float DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `wins` int DEFAULT NULL,
  `losses` int DEFAULT NULL,
  `draws` int DEFAULT NULL,
  `strike_acc` float DEFAULT NULL,
  `takedown_acc` float DEFAULT NULL,
  `strike_per_min` float DEFAULT NULL,
  `takedown_avg_per_fight` float DEFAULT NULL,
  `sig_strike_def` float DEFAULT NULL,
  `takedown_def` float DEFAULT NULL,
  `avg_fight_time_min` float DEFAULT NULL,
  `strike` int DEFAULT NULL,
  `cardio` int DEFAULT NULL,
  `grappling` int DEFAULT NULL,
  `power` int DEFAULT NULL,
  `speed` int DEFAULT NULL,
  `defense` int DEFAULT NULL,
  `position_stand` float DEFAULT NULL,
  `position_clinch` float DEFAULT NULL,
  `position_ground` float DEFAULT NULL,
  `target_head` float DEFAULT NULL,
  `target_body` float DEFAULT NULL,
  `target_leg` float DEFAULT NULL,
  `win_ko_tko` int DEFAULT NULL,
  `win_decision` int DEFAULT NULL,
  `win_submission` int DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fighter_stats`
--

LOCK TABLES `fighter_stats` WRITE;
/*!40000 ALTER TABLE `fighter_stats` DISABLE KEYS */;
INSERT INTO `fighter_stats` VALUES ('Adrian Yanez','Bantamweight','',NULL,10,26,193,182,'/fighters_img/adrian_yanez.png',14,3,1,49.42,48.67,2.91,2.64,46.13,33.04,7.56,69,49,48,42,72,55,47.92,17.13,28.25,53.2,13.25,12.24,2,9,1),('Aleksandar Rakic','Light Heavyweight','',NULL,6,35,183,195,'/fighters_img/aleksandar_rakic.png',8,0,0,44.83,28.72,3.71,4.31,52.15,45.35,6.38,68,47,84,76,86,61,52.58,13.4,12.64,56.51,21.75,16.25,1,10,4),('Alex Pereira','Light Heavyweight','',NULL,1,26,181,187,'/fighters_img/alex_pereira.png',18,5,0,33.97,25.14,4.9,2.58,44.76,50.63,7.4,42,70,44,76,26,88,52.43,24.35,11.83,65.17,29,25.62,5,1,4),('Alex Perez','Flyweight','',NULL,9,33,189,192,'/fighters_img/alex_perez.png',23,1,2,33.58,23.86,3.98,3.52,39.54,41.78,10.31,67,28,43,46,50,26,53.1,28.31,14.46,54.83,21.56,13.53,4,6,1),('Alexander Volkanovski','Featherweight','',NULL,0,29,189,185,'/fighters_img/alexander_volkanovski.png',11,0,1,30.92,42.07,3.36,3.4,43.77,57.68,12.07,73,24,46,100,73,83,47.29,29.69,12.06,50.06,16.12,20.19,7,5,2),('Alexander Volkov','Heavyweight','',NULL,3,26,188,199,'/fighters_img/alexander_volkov.png',22,4,0,44.06,23.49,5.66,1.62,55.79,42.43,9.83,30,62,70,52,65,54,46.91,26.53,22.17,58.42,14.42,22.94,10,5,2),('Alexandre Pantoja','Flyweight','',NULL,0,30,181,189,'/fighters_img/alexandre_pantoja.png',10,2,1,52.3,40.23,2.46,4.01,38.56,43.55,10.03,74,90,67,38,100,82,64.88,23.03,15.86,69.46,27.04,13.08,9,7,2),('Amir Albazi','Flyweight','',NULL,10,25,197,195,'/fighters_img/amir_albazi.png',11,2,1,36.98,28.62,3.04,0.83,46.91,46.11,12.51,64,76,75,64,28,89,43.47,16.13,25.25,52,15.98,29.09,2,6,4),('Anthony Smith','Light Heavyweight','',NULL,10,31,183,191,'/fighters_img/anthony_smith.png',24,2,0,59.18,52.41,5.46,3.05,36.29,43.04,10.34,20,36,32,39,60,45,57.67,11.73,19.24,56.5,14.92,24.71,10,6,1),('Arman Tsarukyan','Lightweight','',NULL,10,25,190,189,'/fighters_img/arman_tsarukyan.png',9,0,0,49.38,27.02,3.97,0.71,46.91,52.61,8.35,55,34,51,76,79,89,57.85,18.97,21.29,63.57,18.8,15.11,7,5,3),('Arnold Allen','Featherweight','',NULL,9,27,185,184,'/fighters_img/arnold_allen.png',10,1,2,46.66,29.42,2.44,4.44,52.98,40.31,13.48,64,87,79,63,22,49,51.16,25.66,15.63,56.46,20.47,15.83,5,1,0),('Belal Muhammad','Welterweight','',NULL,1,31,192,183,'/fighters_img/belal_muhammad.png',12,2,2,36.19,52.3,2.48,2.65,50.06,44.86,12.22,77,83,40,82,79,30,50.23,10.92,16.41,56.94,13.12,28.89,4,4,3),('Beneil Dariush','Lightweight','',NULL,9,35,193,193,'/fighters_img/beneil_dariush.png',20,5,0,40.88,32.6,2.68,3.93,45.87,38.5,14.21,87,43,24,22,82,83,67.88,27.23,29.98,68.7,25.14,20.68,9,8,4),('Brandon Moreno','Flyweight','',NULL,2,28,180,196,'/fighters_img/brandon_moreno.png',9,2,1,54.53,20.62,5.84,0.84,39.41,37.61,9.48,24,85,33,60,70,35,61.74,23.82,23.33,51.33,24.26,25,7,2,3),('Brandon Royval','Flyweight','',NULL,1,32,189,186,'/fighters_img/brandon_royval.png',25,2,2,59.79,27.53,5.42,1.31,36.71,37.94,10.58,46,39,76,32,52,31,59.09,20.62,28.59,51.89,10.14,25.87,9,10,2),('Brendan Allen','Middleweight','',NULL,10,25,182,190,'/fighters_img/brendan_allen.png',7,5,1,34.76,58.81,2.32,3.66,56.11,58.89,13.93,79,77,31,25,23,68,67.15,20.05,29.57,58.9,14.25,15.74,1,8,5),('Brian Ortega','Featherweight','',NULL,5,34,191,199,'/fighters_img/brian_ortega.png',11,0,2,43.07,26.36,5,2.39,32.49,43.65,12.85,35,79,85,80,24,52,61.16,20.43,15.72,67.79,24.55,15.52,3,3,0),('Caio Borralho','Middleweight','',NULL,7,25,197,194,'/fighters_img/caio_borralho.png',19,5,2,41.25,32.49,3.59,0.86,39.21,33.75,10.14,71,21,51,54,48,35,66.42,13.4,11.66,59.87,12.83,10.88,3,2,1),('Carlos Ulberg','Light Heavyweight','',NULL,3,28,185,192,'/fighters_img/carlos_ulberg.png',11,4,2,30.53,26.75,2.09,4.21,50.58,35.72,5.49,68,78,61,56,57,83,52.93,25.36,26.81,55.48,27.33,20.12,9,5,2),('Charles Oliveira','Lightweight','',NULL,1,28,189,198,'/fighters_img/charles_oliveira.png',18,3,0,38.78,33.49,2.59,3.17,51.98,59.6,11.35,77,72,86,69,83,69,44.32,16.58,24.03,57.91,10.37,11.79,4,7,5),('Ciryl Gane','Heavyweight','',NULL,2,25,198,186,'/fighters_img/ciryl_gane.png',21,4,2,51.85,21.14,3.8,4.3,40.52,35.47,11.05,45,69,76,56,62,82,56.91,24.12,15.04,56.97,23.16,23.25,8,3,3),('Cory Sandhagen','Bantamweight','',NULL,4,34,196,193,'/fighters_img/cory_sandhagen.png',9,0,2,48.66,49.68,2.24,4.37,30.11,59.18,11.11,35,83,43,56,51,44,51.58,15.33,20.25,60.5,21.08,25.95,1,2,3),('Curtis Blaydes','Heavyweight','',NULL,5,26,188,196,'/fighters_img/curtis_blaydes.png',19,4,2,40.47,27.59,5.37,3.23,42.89,41.98,9.73,24,56,83,65,35,36,47.39,26.35,22.53,63.6,29.91,12.19,7,1,3),('Dan Hooker','Lightweight','',NULL,5,29,188,192,'/fighters_img/dan_hooker.png',23,0,2,31.05,48.39,3.68,3.01,32.94,45.7,9.83,30,82,25,71,86,44,58.7,27.66,13.01,57.48,17.65,22.41,5,9,3),('Deiveson Figueiredo','Bantamweight','',NULL,7,34,197,184,'/fighters_img/deiveson_figueiredo.png',17,2,2,56.23,59.12,5.66,0.18,44.12,40.42,14.11,20,31,51,23,86,25,61.14,11.57,15.86,50.43,24.48,17.83,7,10,2),('Diego Lopes','Featherweight','',NULL,4,28,182,189,'/fighters_img/diego_lopes.png',14,5,2,30.96,27.68,4.31,2.61,37.64,55.73,9.55,53,55,81,58,60,37,51.76,26.62,29.98,51.99,27.27,21.28,3,4,5),('Dominick Reyes','Light Heavyweight','',NULL,7,27,193,191,'/fighters_img/dominick_reyes.png',13,5,2,41.66,57.48,5.25,0.07,36.93,41.01,8.65,76,28,45,72,76,34,64.63,14.34,16.11,61.97,17.54,11.48,7,9,4),('Dricus Du Plessis','Middleweight','',NULL,0,35,194,180,'/fighters_img/dricus_du_plessis.png',16,4,1,46.15,42.29,4.68,0.44,58.31,30.08,8.98,33,87,67,70,55,100,50.36,12.03,20.48,61.93,16.55,25.55,9,8,5),('Dustin Poirier','Lightweight','',NULL,3,30,190,188,'/fighters_img/dustin_poirier.png',12,2,0,58.98,25.55,4.01,1.16,32.3,55.38,9.6,47,34,67,38,45,47,44.73,11.87,23.09,58.79,12.46,27.57,9,10,5),('Geoff Neal','Welterweight','',NULL,9,35,187,196,'/fighters_img/geoff_neal.png',17,1,2,38.57,26.79,5.3,0.28,53.97,48.95,13.09,53,43,31,42,25,78,60.92,24.86,21.25,63.35,11.34,27.08,1,10,0),('Giga Chikadze','Featherweight','',NULL,10,25,185,199,'/fighters_img/giga_chikadze.png',20,2,1,37.32,44.92,4.97,4.57,57.43,54.25,13.12,64,27,60,69,55,82,43.84,13.33,10.76,55.17,19.71,22.96,2,6,1),('Henry Cejudo','Bantamweight','',NULL,9,34,182,192,'/fighters_img/henry_cejudo.png',17,5,0,40.11,27.29,5.78,0.12,51.94,55.11,7.66,39,45,70,28,87,69,42.14,24.5,18.43,66.85,14.99,16.18,8,3,2),('Ian Machado Garry','Welterweight','',NULL,6,31,194,189,'/fighters_img/ian_machado_garry.png',7,1,1,38.4,45.2,5.1,3.02,38.64,37.91,13.48,43,37,32,24,28,53,63.14,10.54,18.27,52.83,12.28,29.38,8,4,0),('Ilia Topuria','Featherweight','',NULL,1,27,190,195,'/fighters_img/ilia_topuria.png',9,1,2,31.49,36.26,5.18,0.95,42.95,34.15,11.47,44,55,64,38,71,87,48.73,20.87,29.49,60.66,19.54,29.87,5,6,1),('Islam Makhachev','Lightweight','',NULL,0,29,195,194,'/fighters_img/islam_makhachev.png',13,4,1,35.47,37.96,3.58,3.1,57.05,42.64,6.74,33,60,80,85,100,80,64.94,22.32,27.39,59.19,28,19.64,9,2,0),('Israel Adesanya','Middleweight','',NULL,4,28,182,181,'/fighters_img/israel_adesanya.png',23,1,1,37.72,34.73,2.89,2.92,57.88,37.46,5.14,30,71,73,68,42,64,65.47,24.77,24.97,60.76,13.04,27.17,6,9,2),('Jack Della Maddalena','Welterweight','',NULL,0,26,181,195,'/fighters_img/jack_della_maddalena.png',17,1,0,49.41,58.22,2.3,4.03,56.1,35.84,8.83,53,43,41,58,100,90,46.44,19.84,26.98,52.87,26.81,23.56,10,10,4),('Jailton Almeida','Heavyweight','',NULL,6,25,185,190,'/fighters_img/jailton_almeida.png',7,5,0,35.72,33.64,2.88,1.28,58.64,53.18,9.99,67,26,71,39,49,43,57.24,18.62,29.03,65.34,10.03,17.57,2,8,4),('Jamahal Hill','Light Heavyweight','',NULL,4,26,198,195,'/fighters_img/jamahal_hill.png',17,3,0,32.24,34.58,3.82,1.44,41.31,32.14,12.3,29,60,63,47,60,37,63.22,22.32,15.95,50.07,21.06,11.88,8,8,1),('Jared Cannonier','Middleweight','',NULL,8,33,182,192,'/fighters_img/jared_cannonier.png',6,1,0,42.91,56.21,4.13,1.83,44.71,59.89,7.15,27,25,71,35,43,36,46.24,17.28,23.53,66.11,23.73,26.48,1,10,0),('Jiri Prochazka','Light Heavyweight','',NULL,2,28,189,192,'/fighters_img/jiri_prochazka.png',18,3,0,43.22,53.41,2.13,0.33,41.33,54.63,6.85,90,28,62,50,29,76,58.79,10.67,11.95,53.97,16.14,16.57,10,1,4),('Joaquin Buckley','Welterweight','',NULL,4,34,180,198,'/fighters_img/joaquin_buckley.png',18,1,1,34.38,37.52,4.37,1.85,50.98,53.48,9.79,41,44,55,85,71,53,65.46,16.33,22.8,52.52,28.75,22.92,2,7,0),('Johnny Eblen','Middleweight','',NULL,6,31,184,185,'/fighters_img/johnny_eblen.png',6,3,2,53.41,43.28,5.98,1.98,43.95,58,11.87,54,61,84,44,72,64,43.79,10.76,22.65,61.03,17.52,14.32,8,6,1),('Johnny Walker','Light Heavyweight','',NULL,9,27,185,190,'/fighters_img/johnny_walker.png',21,0,0,56.41,30.23,3.99,2.5,33.61,58.69,5.4,63,45,54,58,26,64,50.63,20.84,27.1,61.31,18.17,20.36,4,7,5),('Jon Jones','Heavyweight','',NULL,0,34,198,191,'/fighters_img/jon_jones.png',17,3,0,45.77,51.99,4.14,2.2,52,39.81,5.14,37,88,66,63,100,63,50.73,11.91,28.82,57.15,25.23,16.65,3,3,1),('Justin Gaethje','Lightweight','',NULL,2,33,186,190,'/fighters_img/justin_gaethje.png',12,0,1,43.21,21.31,3.34,0.45,42.83,46.7,14.76,83,45,80,29,48,74,47.24,12.84,17.69,69.24,27.48,21.36,1,3,4),('Kai Asakura','Flyweight','',NULL,8,32,197,196,'/fighters_img/kai_asakura.png',7,2,1,51.02,43.28,5.97,1.74,36.26,45.39,8.08,42,78,37,56,23,34,53.73,12.42,24.45,69.95,14.92,26.81,10,6,2),('Kai Kara-France','Flyweight','',NULL,3,32,183,186,'/fighters_img/kai_kara_france.png',21,0,0,44.42,44.46,4.43,3.74,51.13,35.13,6.45,37,30,66,25,72,46,44.46,22.35,27.94,55.18,14.39,27.04,10,3,3),('Kamaru Usman','Welterweight','',NULL,8,25,185,182,'/fighters_img/kamaru_usman.png',11,5,2,32.99,32.44,2.3,2.76,58.27,44.14,11.99,28,54,63,68,51,61,66.18,12.43,29.51,59.87,24.51,20.83,2,4,3),('Khalil Rountree Jr.','Light Heavyweight','',NULL,5,25,189,199,'/fighters_img/khalil_rountree_jr_.png',23,0,0,56.98,52.1,2.29,4.99,36.51,36.06,12.84,25,59,71,69,50,67,57.72,23.7,19.84,50.68,20.9,24.12,5,4,4),('Khamzat Chimaev','Middleweight','',NULL,1,35,190,187,'/fighters_img/khamzat_chimaev.png',5,1,0,59.27,21.83,3.16,3.2,36.53,39.85,12.02,69,37,63,58,88,41,42,20.34,13.91,63.81,19.22,15.29,2,7,1),('Leon Edwards','Welterweight','',NULL,5,27,186,195,'/fighters_img/leon_edwards.png',15,1,0,36.4,45.34,3.31,2.33,39.62,49.17,9.96,73,51,62,23,88,23,47.17,17.08,27.2,52.27,17.4,12,4,9,5),('Lerone Murphy','Featherweight','',NULL,7,30,198,181,'/fighters_img/lerone_murphy.png',17,2,2,57.71,40.75,4.27,4.2,38.04,59.3,14.81,63,32,30,40,78,66,43.8,16.46,24.62,59.2,10.62,14.18,7,2,3),('Magomed Ankalaev','Light Heavyweight','',NULL,0,25,186,182,'/fighters_img/magomed_ankalaev.png',15,3,0,37.89,50.3,2.31,0.51,32.46,35.7,7.45,42,100,88,22,70,84,45.22,21.55,17.71,53.53,11.67,22.84,1,1,5),('Manel Kape','Flyweight','',NULL,6,35,189,184,'/fighters_img/manel_kape.png',16,1,2,51.96,45.21,5.85,0.27,56.62,52.45,7.39,82,65,53,57,85,64,46.98,15.5,24.87,68.55,17.78,14.43,5,5,2),('Marcin Tybura','Heavyweight','',NULL,9,35,183,182,'/fighters_img/marcin_tybura.png',23,3,2,30.17,46,4.33,0.04,56.91,43.93,13.78,76,20,64,38,84,43,54.08,27.9,15.18,62.17,11.88,25.33,10,8,3),('Mario Bautista','Bantamweight','',NULL,5,33,193,194,'/fighters_img/mario_bautista.png',12,3,2,59.71,56.64,2.62,0.87,35.92,47.06,7.86,84,44,86,59,79,41,59.45,24.89,14.18,60.93,21.59,19.5,6,5,3),('Mateusz Gamrot','Lightweight','',NULL,8,30,197,194,'/fighters_img/mateusz_gamrot.png',23,4,1,43.04,27.66,2.73,2.98,35.79,59.92,14.87,52,64,27,30,65,60,46.76,12.55,27.64,69.64,16.06,29.84,5,3,0),('Max Holloway','Featherweight','',NULL,2,30,191,181,'/fighters_img/max_holloway.png',13,0,1,41.7,34.87,2.95,3.31,48.56,32.36,5.61,20,44,75,67,81,88,65.77,19.28,15.79,68.39,10.52,20.03,6,8,3),('Merab Dvalishvili','Bantamweight','',NULL,0,25,183,183,'/fighters_img/merab_dvalishvili.png',13,0,2,40.32,57.22,5.35,0.22,55.62,54.12,10.12,100,51,41,61,35,23,66.04,25.58,21.09,58.68,14.92,28.22,4,5,0),('Michael Morales','Welterweight','',NULL,7,31,192,193,'/fighters_img/michael_morales.png',16,2,0,49.25,37.68,5.74,2.17,55.87,59.06,14.21,36,85,80,86,23,79,40.29,25.21,19.89,55.4,25.24,18.61,10,4,5),('Movsar Evloev','Featherweight','',NULL,6,33,186,194,'/fighters_img/movsar_evloev.png',20,4,1,37.93,35.9,2.08,0.05,45.24,54.73,12.72,83,38,25,28,89,77,47.56,12.87,22.6,57.78,26.64,16.5,2,3,3),('Muhammad Mokaev','Flyweight','',NULL,4,27,184,182,'/fighters_img/muhammad_mokaev.png',22,3,1,51.38,20.51,3.6,0.51,42.47,54.81,13.15,38,52,54,68,20,57,64.66,24.08,27.89,65.49,29.29,16.48,8,7,4),('Nassourdine Imavov','Middleweight','',NULL,3,25,187,197,'/fighters_img/nassourdine_imavov.png',7,1,2,36.27,23.09,4.57,3.42,55.36,50.75,9.34,38,49,33,42,21,67,50.69,25.12,15.39,51.55,28.22,23.51,6,6,4),('Neil Magny','Welterweight','',NULL,10,25,183,184,'/fighters_img/neil_magny.png',21,5,2,30.77,50.9,3.72,4.24,55.24,36.61,7.56,56,46,86,35,41,31,58.98,15.72,18.15,56.84,25.96,17.29,7,2,1),('Paddy Pimblett','Lightweight','',NULL,4,26,195,191,'/fighters_img/paddy_pimblett.png',22,2,0,55.32,27.21,2.3,0.07,54.1,37.98,9.18,34,42,75,62,84,47,55.61,21.41,17.96,68,25.52,12.97,4,3,3),('Patchy Mix','Bantamweight','',NULL,8,32,192,198,'/fighters_img/patchy_mix.png',23,5,1,50.59,59.27,5,1.25,39.17,30.29,6.55,35,45,39,83,55,89,61.01,14.38,12.4,61.22,24.76,14.3,10,3,1),('Patricio Pitbull','Featherweight','',NULL,8,32,193,195,'/fighters_img/patricio_pitbull.png',13,2,1,38.16,41.1,3.46,2.91,51.07,32.68,7.77,57,74,29,38,46,65,58.14,11.81,11.52,65.78,14.32,15.27,6,6,1),('Petr Yan','Bantamweight','',NULL,2,32,184,185,'/fighters_img/petr_yan.png',15,2,0,50.66,36.4,2.98,3.7,41.3,48.02,12.58,37,82,47,66,39,85,68.85,24.74,21.35,65.48,15.85,20.45,7,10,4),('Renan Ferreira','Heavyweight','',NULL,7,28,188,185,'/fighters_img/renan_ferreira.png',12,2,0,34.52,38.86,3.23,4.13,33.08,50.83,7.44,52,34,73,24,32,35,52.53,15.8,24.87,67.21,23.38,17.9,9,9,2),('Renato Moicano','Lightweight','',NULL,6,35,195,181,'/fighters_img/renato_moicano.png',6,1,0,48,49.6,5.45,4.05,31.25,35.39,10.82,53,51,43,37,74,21,68.25,11.11,17.02,65.14,12.13,26.19,7,2,0),('Robert Whittaker','Middleweight','',NULL,5,25,185,182,'/fighters_img/robert_whittaker.png',23,3,0,59.93,56.65,4.97,1.65,56.87,47.87,9.17,69,49,36,50,59,67,40.98,16.88,17.21,67.85,22.64,21.04,2,9,3),('Roman Dolidze','Middleweight','',NULL,9,29,195,199,'/fighters_img/roman_dolidze.png',12,0,0,36.64,26.69,3.28,4.53,54.81,57.41,6.35,62,88,89,86,51,43,62.24,14.79,23.27,54.76,27.04,22.73,3,6,2),('Sean Brady','Welterweight','',NULL,3,31,180,196,'/fighters_img/sean_brady.png',15,4,0,43.63,45.64,3.94,3.57,30.49,49.34,14.83,29,81,65,29,43,34,63.43,28.52,29.79,55.16,23.63,23.89,3,1,3),('Sean O\'Malley','Bantamweight','',NULL,1,31,185,197,'/fighters_img/sean_o_malley.png',7,0,0,37.71,21.1,5.37,1.19,50.02,49.99,7.28,25,62,83,58,68,20,59.14,27.22,14.97,67.39,16.95,13.31,9,7,2),('Sean Strickland','Middleweight','',NULL,2,31,194,198,'/fighters_img/sean_strickland.png',19,1,1,37.67,28.24,5.34,2.32,42.77,38.18,5.66,35,84,72,24,58,84,57.59,26.53,25.62,68.24,26.63,17.85,2,1,5),('Sergei Pavlovich','Heavyweight','',NULL,4,30,196,183,'/fighters_img/sergei_pavlovich.png',8,4,2,53.57,23.78,4.79,2.76,42.46,46.07,13.38,30,59,74,63,84,75,63.99,20.88,27.54,67.52,13.2,18.44,6,1,3),('Serghei Spivac','Heavyweight','',NULL,8,31,187,189,'/fighters_img/serghei_spivac.png',7,4,2,55.96,20.29,5.57,4,41.7,53.98,9.82,81,44,84,80,22,60,56.97,23.94,17.06,68.65,11.34,16.88,2,9,1),('Shavkat Rakhmonov','Welterweight','',NULL,2,25,184,194,'/fighters_img/shavkat_rakhmonov.png',11,3,2,37.79,54.41,3.59,2.51,59.01,48.59,5.4,44,88,54,33,78,38,57.8,24.74,10.74,54.17,12.52,21.5,8,8,5),('Song Yadong','Bantamweight','',NULL,6,27,187,186,'/fighters_img/song_yadong.png',5,4,1,30.83,33.97,3.5,3.7,51.92,52.09,14.08,67,51,34,70,30,32,50.8,10.97,20.99,53.99,19.55,24.06,4,4,4),('Steve Erceg','Flyweight','',NULL,7,26,181,199,'/fighters_img/steve_erceg.png',6,2,0,36.49,36.43,4.84,4.47,51.68,30.38,10.65,35,81,61,22,49,73,51.28,16.03,25.09,64.87,27.81,12.77,2,3,5),('Tai Tuivasa','Heavyweight','',NULL,10,33,190,194,'/fighters_img/tai_tuivasa.png',11,1,0,55.01,59.73,5.57,1.39,58.16,44.89,6.03,59,27,39,88,52,24,46.43,28.33,12.08,60.76,28.61,10.63,6,4,1),('Tatsuro Taira','Flyweight','',NULL,5,27,181,197,'/fighters_img/tatsuro_taira.png',10,0,0,41.61,43.16,5.13,1.21,31.12,56.82,14.16,63,21,39,73,63,60,57.88,11.35,16.68,61.79,15.18,15.21,5,5,3),('Tom Aspinall','Heavyweight','',NULL,1,25,190,190,'/fighters_img/tom_aspinall.png',22,3,1,57.4,29.77,3.07,4.79,36.91,52.4,14.62,29,69,27,59,71,23,63.67,20.08,27.36,64.69,29.95,22.45,1,7,2),('Umar Nurmagomedov','Bantamweight','',NULL,3,31,195,190,'/fighters_img/umar_nurmagomedov.png',24,3,2,53.38,50.08,2.79,4.11,39.42,57.69,14.77,66,85,88,89,23,89,54.46,28.87,27.74,60.15,22.63,26.28,7,3,1),('Usman Nurmagomedov','Lightweight','',NULL,7,30,181,191,'/fighters_img/usman_nurmagomedov.png',6,2,2,34.8,45.07,3.29,0.11,31.03,48.05,11.91,80,50,58,54,70,24,43.41,23.87,25.11,56.76,18.17,13.76,1,5,5),('Volkan Oezdemir','Light Heavyweight','',NULL,8,30,180,189,'/fighters_img/volkan_oezdemir.png',15,4,0,43.66,54.87,2.28,2.66,59,58.43,5.71,39,33,59,36,61,21,69.99,17.09,16.97,68.29,13.08,14.24,5,3,4),('Yair Rodriguez','Featherweight','',NULL,3,31,186,186,'/fighters_img/yair_rodriguez.png',22,4,1,49.24,48.39,3.7,3.2,54.29,30.8,10.63,50,27,85,27,79,49,43.9,10.95,13.43,55.83,23.36,25.82,10,10,2);
/*!40000 ALTER TABLE `fighter_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `next_events`
--

DROP TABLE IF EXISTS `next_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `next_events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `fighter1_name` varchar(100) DEFAULT NULL,
  `fighter2_name` varchar(100) DEFAULT NULL,
  `fighter1_win_prob` float DEFAULT NULL,
  `fighter2_win_prob` float DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `next_events`
--

LOCK TABLES `next_events` WRITE;
/*!40000 ALTER TABLE `next_events` DISABLE KEYS */;
INSERT INTO `next_events` VALUES (1,'Jon Jones','Tom Aspinall',0.64,0.36),(2,'Magomed Ankalaev','Alex Pereira',0.59,0.41),(3,'Dricus Du Plessis','Khamzat Chimaev',0.66,0.34),(4,'Jack Della Maddalena','Belal Muhammad',0.58,0.42),(5,'Islam Makhachev','Charles Oliveira',0.58,0.42);
/*!40000 ALTER TABLE `next_events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-14 10:17:04
