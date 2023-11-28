CREATE DATABASE  IF NOT EXISTS `petsitter` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `petsitter`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: petsitter
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `stateId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Aguascalientes',9),(2,'Cancún',3),(3,'Celaya',2),(4,'Chetumal',6),(5,'Chihuahua',4),(6,'Ciudad de México',7),(7,'Colima',9),(8,'Córdoba',7),(9,'Acatzingo',7),(10,'Apodaca',10),(11,'Comitán',3),(12,'Cholula',4),(13,'Iguala',1),(14,'Jiutepec',1),(15,'Linares',1),(16,'Nogales',2),(17,'Piedras Negras',8),(18,'San Juan del Río',9),(19,'Silao',8),(20,'Tehuacán',1),(21,'Teziutlán',10),(22,'Tizayuca',8),(23,'ZamoraCuernavaca',10),(24,'Culiacán',6),(25,'Durango',3),(26,'Ensenada',7),(27,'Guadalajara',6),(28,'Hermosillo',2),(29,'La Paz',9),(30,'León',6),(31,'Los Mochis',8),(32,'Mazatlán',7),(33,'Mérida',8),(34,'Mexicali',2),(35,'Monterrey',1),(36,'Morelia',6),(37,'Nuevo Laredo',5),(38,'Oaxaca de Juárez',10),(39,'Pachuca',1),(40,'Puebla',1),(41,'Puerto Vallarta',9),(42,'Querétaro',7),(43,'Reynosa',10),(44,'Saltillo',4),(45,'San Cristóbal de las Casas',4),(46,'San Luis Potosí',7),(47,'Tampico',9),(48,'Tijuana',2),(49,'Toluca',4),(50,'Torreón',6),(51,'Tuxtla Gutiérrez',6),(52,'Uruapan',4),(53,'Veracruz',4),(54,'Villahermosa',8),(55,'Xalapa',8),(56,'Zacatecas',4),(57,'Acapulco',6),(58,'Aguascalientes',4),(59,'Campeche',6),(60,'Cancún',5),(61,'Celaya',5),(62,'Chetumal',9),(63,'Chihuahua',8),(64,'Ciudad de México',2),(65,'Colima',6),(66,'Córdoba',3),(67,'Cuernavaca',8),(68,'Culiacán',5),(69,'Durango',2),(70,'Ensenada',5),(71,'Guadalajara',2),(72,'Hermosillo',5),(73,'La Paz',8),(74,'León',1),(75,'Los Mochis',3),(76,'Mazatlán',6),(77,'Mérida',8),(78,'Mexicali',2),(79,'Monterrey',4),(80,'Morelia',8),(81,'Nuevo Laredo',6),(82,'Oaxaca de Juárez',3),(83,'Pachuca',4),(84,'Puebla',6),(85,'Puerto Vallarta',2),(86,'Querétaro',7),(87,'Reynosa',1),(88,'Saltillo',6),(89,'San Cristóbal de las Casas',4),(90,'San Luis Potosí',8),(91,'Tampico',9),(92,'Tijuana',8),(93,'Toluca',8),(94,'Torreón',8),(95,'Tuxtla Gutiérrez',9),(96,'Uruapan',8),(97,'Veracruz',7),(98,'Villahermosa',10),(99,'Xalapa',7),(100,'Zacatecas',8);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petscan`
--

DROP TABLE IF EXISTS `petscan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `petscan` (
  `id` varchar(120) NOT NULL,
  `sitterId` varchar(128) NOT NULL,
  `petTypeId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petscan`
--

LOCK TABLES `petscan` WRITE;
/*!40000 ALTER TABLE `petscan` DISABLE KEYS */;
INSERT INTO `petscan` VALUES ('04QIT3ZXKUL4','mJ5i4OJU',1420404),('1DN6UKY17VAV','wQWiXbpj',971330),('1HMA2CEGWQXQ','mJ5i4OJU',971330),('2Z213UITMFNS','pWk6jPAW',153648),('8A5KS2GN8D4X','pWk6jPAW',2356239),('DAVGLZH1AS9Z','NDnhowOZ',1775543),('DCS4ZC4V3AI5','wQWiXbpj',1420404),('K8P98HLBQW8W','NDnhowOZ',2356239),('RSD6E8RTPNJ5','pWk6jPAW',1420404),('TMG6OL934D57','wQWiXbpj',2356239);
/*!40000 ALTER TABLE `petscan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petsitter`
--

DROP TABLE IF EXISTS `petsitter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `petsitter` (
  `id` varchar(128) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `photoURL` varchar(200) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `ciudadId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petsitter`
--

LOCK TABLES `petsitter` WRITE;
/*!40000 ALTER TABLE `petsitter` DISABLE KEYS */;
INSERT INTO `petsitter` VALUES ('mJ5i4OJU','Anni','Hakala','anni.hakala@example.com','04-439-929','https://randomuser.me/api/portraits/women/62.jpg','2017-12-30',79),('NDnhowOZ','Jelena','Gautier','jelena.gautier@example.com','075 715 76 43','https://randomuser.me/api/portraits/women/6.jpg','2011-10-30',53),('pWk6jPAW','Colin','Weaver','colin.weaver@example.com','015242 25126','https://randomuser.me/api/portraits/men/6.jpg','2017-10-11',12),('wQWiXbpj','Ilona','Fournier','ilona.fournier@example.com','076 207 36 90','https://randomuser.me/api/portraits/women/43.jpg','2006-10-19',60);
/*!40000 ALTER TABLE `petsitter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petstype`
--

DROP TABLE IF EXISTS `petstype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `petstype` (
  `id` int NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petstype`
--

LOCK TABLES `petstype` WRITE;
/*!40000 ALTER TABLE `petstype` DISABLE KEYS */;
INSERT INTO `petstype` VALUES (153648,'Exóticos'),(971330,'Reptiles'),(1298038,'Aves'),(1420404,'Perros'),(1775543,'Gatos'),(2356239,'Serpientes');
/*!40000 ALTER TABLE `petstype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `id` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Veracruz'),(2,'Nuevo León'),(3,'Tabasco'),(4,'Baja California Sur'),(5,'San Luis Potosí'),(6,'Jalisco'),(7,'Coahuila'),(8,'Morelos'),(9,'Guanajuato'),(10,'Tlaxcala');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(128) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellidos` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `Telefono` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('0Z33E6KC5DDO','Daniel','Perez','p@p.p','asdadsa','yumyum','23123123'),('5UBAB4EBTCM2','Daniel Armando','Perez','prueba@prueba.com','goliat96','Francisco Medina Mena #104','goliat96'),('66935CE676I7','Daniel','Perez','dsfsd@asdfas.as','asdasda','dsfds','34231534'),('KJQAU7NV53KU','Francisco','Ramirez','asda@adas.as','asfdasda','sadfasa','1234347852');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'petsitter'
--

--
-- Dumping routines for database 'petsitter'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-27 22:42:04
