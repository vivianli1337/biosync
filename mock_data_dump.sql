-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: PATIENTS
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Bank`
--

DROP TABLE IF EXISTS `Bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bank` (
  `Bank_ID` int NOT NULL AUTO_INCREMENT,
  `Bank_Name` varchar(255) NOT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `Blood_Type` varchar(10) DEFAULT NULL,
  `Organ_Type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Bank_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bank`
--

LOCK TABLES `Bank` WRITE;
/*!40000 ALTER TABLE `Bank` DISABLE KEYS */;
INSERT INTO `Bank` VALUES (1,'Central Blood Bank','123 Main St','O+','Kidney'),(2,'Eastside Organ Bank','456 Elm St','AB-','Liver'),(3,'Central Blood Bank','New York',NULL,NULL),(4,'Regional Organ Bank','California',NULL,NULL),(5,'National Tissue Reserve','Texas',NULL,NULL),(6,'City Blood Center','Florida',NULL,NULL),(7,'State Organ Network','Illinois',NULL,NULL),(8,'Community Blood Services','Washington',NULL,NULL),(9,'Metro Blood Foundation','Georgia',NULL,NULL),(10,'Urban Organ Link','Arizona',NULL,NULL),(11,'Rural Tissue Network','Nevada',NULL,NULL),(12,'Area Blood Collective','Ohio',NULL,NULL);
/*!40000 ALTER TABLE `Bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Blood_Inventory`
--

DROP TABLE IF EXISTS `Blood_Inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Blood_Inventory` (
  `Item_ID` int NOT NULL AUTO_INCREMENT,
  `Blood_Type` varchar(10) DEFAULT NULL,
  `Units_Available` int DEFAULT NULL,
  `Arrival_Date` date DEFAULT NULL,
  `Expiration_Date` date DEFAULT NULL,
  `Bank_ID` int DEFAULT NULL,
  PRIMARY KEY (`Item_ID`),
  KEY `Bank_ID` (`Bank_ID`),
  CONSTRAINT `blood_inventory_ibfk_1` FOREIGN KEY (`Bank_ID`) REFERENCES `Bank` (`Bank_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blood_Inventory`
--

LOCK TABLES `Blood_Inventory` WRITE;
/*!40000 ALTER TABLE `Blood_Inventory` DISABLE KEYS */;
INSERT INTO `Blood_Inventory` VALUES (1,'O+',100,'2024-01-01','2024-06-01',1),(2,'AB-',50,'2024-02-01','2024-07-01',2),(3,'A+',100,'2023-01-01','2023-06-01',1),(4,'O-',200,'2023-02-01','2023-07-01',2),(5,'B+',150,'2023-03-01','2023-08-01',3),(6,'AB-',120,'2023-04-01','2023-09-01',4),(7,'A-',130,'2023-05-01','2023-10-01',5),(8,'O+',180,'2023-06-01','2023-11-01',6),(9,'B-',160,'2023-07-01','2023-12-01',7),(10,'AB+',140,'2023-08-01','2024-01-01',8),(11,'A+',110,'2023-09-01','2024-02-01',9),(12,'O-',170,'2023-10-01','2024-03-01',10);
/*!40000 ALTER TABLE `Blood_Inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Conditions`
--

DROP TABLE IF EXISTS `Conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Conditions` (
  `Condition_ID` int NOT NULL AUTO_INCREMENT,
  `Condition_Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Condition_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Conditions`
--

LOCK TABLES `Conditions` WRITE;
/*!40000 ALTER TABLE `Conditions` DISABLE KEYS */;
INSERT INTO `Conditions` VALUES (1,'Diabetes'),(2,'Hypertension');
/*!40000 ALTER TABLE `Conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hospitals`
--

DROP TABLE IF EXISTS `Hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hospitals` (
  `Hospital_ID` int NOT NULL AUTO_INCREMENT,
  `Hospital_Name` varchar(255) NOT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `Contact_Details` varchar(255) DEFAULT NULL,
  `Capacity_Info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Hospital_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hospitals`
--

LOCK TABLES `Hospitals` WRITE;
/*!40000 ALTER TABLE `Hospitals` DISABLE KEYS */;
INSERT INTO `Hospitals` VALUES (1,'General Hospital','123 Main St','555-1234','500 beds'),(2,'General Hospital',NULL,'555-0100','500'),(3,'City Hospital',NULL,'555-0101','450'),(4,'Regional Medical Center',NULL,'555-0102','600'),(5,'Downtown Health Clinic',NULL,'555-0103','300'),(6,'Suburban Hospital',NULL,'555-0104','400'),(7,'Lakeside Clinic',NULL,'555-0105','350'),(8,'Eastside Hospital',NULL,'555-0106','370'),(9,'Westend Hospital',NULL,'555-0107','490'),(10,'Northgate Hospital',NULL,'555-0108','500'),(11,'Southwell Hospital',NULL,'555-0109','450');
/*!40000 ALTER TABLE `Hospitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Organ_Inventory`
--

DROP TABLE IF EXISTS `Organ_Inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Organ_Inventory` (
  `Item_ID` int NOT NULL AUTO_INCREMENT,
  `Organ_Type` varchar(50) DEFAULT NULL,
  `Units_Available` int DEFAULT NULL,
  `Arrival_Date` date DEFAULT NULL,
  `Expiration_Date` date DEFAULT NULL,
  `Bank_ID` int DEFAULT NULL,
  PRIMARY KEY (`Item_ID`),
  KEY `Bank_ID` (`Bank_ID`),
  CONSTRAINT `organ_inventory_ibfk_1` FOREIGN KEY (`Bank_ID`) REFERENCES `Bank` (`Bank_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Organ_Inventory`
--

LOCK TABLES `Organ_Inventory` WRITE;
/*!40000 ALTER TABLE `Organ_Inventory` DISABLE KEYS */;
INSERT INTO `Organ_Inventory` VALUES (1,'Heart',5,'2024-10-15','2024-12-15',1),(2,'Kidney',10,'2024-10-16','2024-12-16',1),(3,'Liver',3,'2024-10-17','2024-12-17',1),(4,'Heart',10,'2023-01-10','2023-01-20',1),(5,'Kidney',20,'2023-02-15','2023-03-01',2),(6,'Liver',5,'2023-03-20','2023-04-05',3),(7,'Pancreas',3,'2023-04-25','2023-05-10',4),(8,'Lung',8,'2023-05-30','2023-06-15',5),(9,'Heart',6,'2023-06-18','2023-07-02',6),(10,'Kidney',15,'2023-07-21','2023-08-05',7),(11,'Liver',7,'2023-08-28','2023-09-12',8),(12,'Pancreas',4,'2023-09-30','2023-10-15',9),(13,'Lung',9,'2023-10-20','2023-11-04',10);
/*!40000 ALTER TABLE `Organ_Inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patient_Hospital_Visits`
--

DROP TABLE IF EXISTS `Patient_Hospital_Visits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Patient_Hospital_Visits` (
  `Visit_ID` int NOT NULL AUTO_INCREMENT,
  `Patient_ID` int NOT NULL,
  `Hospital_ID` int NOT NULL,
  `Visit_Date` date DEFAULT NULL,
  `Purpose` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Visit_ID`),
  KEY `Patient_ID` (`Patient_ID`),
  KEY `Hospital_ID` (`Hospital_ID`),
  CONSTRAINT `patient_hospital_visits_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `Patients` (`Patient_ID`),
  CONSTRAINT `patient_hospital_visits_ibfk_2` FOREIGN KEY (`Hospital_ID`) REFERENCES `Hospitals` (`Hospital_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patient_Hospital_Visits`
--

LOCK TABLES `Patient_Hospital_Visits` WRITE;
/*!40000 ALTER TABLE `Patient_Hospital_Visits` DISABLE KEYS */;
INSERT INTO `Patient_Hospital_Visits` VALUES (3,1,1,'2024-10-12','Routine Checkup');
/*!40000 ALTER TABLE `Patient_Hospital_Visits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patient_Needs`
--

DROP TABLE IF EXISTS `Patient_Needs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Patient_Needs` (
  `Need_ID` int NOT NULL AUTO_INCREMENT,
  `Need_Type` varchar(255) NOT NULL,
  `Blood_Type` varchar(10) DEFAULT NULL,
  `Organ_Type` varchar(255) DEFAULT NULL,
  `Urgency_Level` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Patient_ID` int NOT NULL,
  PRIMARY KEY (`Need_ID`),
  KEY `Patient_ID` (`Patient_ID`),
  CONSTRAINT `patient_needs_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `Patients` (`Patient_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patient_Needs`
--

LOCK TABLES `Patient_Needs` WRITE;
/*!40000 ALTER TABLE `Patient_Needs` DISABLE KEYS */;
INSERT INTO `Patient_Needs` VALUES (1,'Surgical Procedure','O+',NULL,'High','Scheduled',1),(12,'Blood','A+',NULL,'High','Pending',1),(13,'Blood','O-',NULL,'Medium','Pending',2),(14,'Organ',NULL,'Heart','Critical','Pending',3),(15,'Tissue',NULL,'Skin','Low','Pending',4),(16,'Blood','AB+',NULL,'High','Pending',5),(17,'Blood','B-',NULL,'Medium','Pending',6),(18,'Organ',NULL,'Kidney','Critical','Pending',7),(19,'Tissue',NULL,'Bone','Low','Pending',8),(20,'Blood','A-',NULL,'High','Pending',9),(21,'Blood','O+',NULL,'Medium','Pending',10),(22,'Blood','A+',NULL,'High','Pending',1),(23,'Blood','O-',NULL,'Medium','Pending',2),(24,'Organ',NULL,'Heart','Critical','Pending',3),(25,'Tissue',NULL,'Skin','Low','Pending',4),(26,'Blood','AB+',NULL,'High','Pending',5),(27,'Blood','B-',NULL,'Medium','Pending',6),(28,'Organ',NULL,'Kidney','Critical','Pending',7),(29,'Tissue',NULL,'Bone','Low','Pending',8),(30,'Blood','A-',NULL,'High','Pending',9),(31,'Blood','O+',NULL,'Medium','Pending',10);
/*!40000 ALTER TABLE `Patient_Needs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patients`
--

DROP TABLE IF EXISTS `Patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Patients` (
  `Patient_ID` int NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Blood_Type` varchar(10) DEFAULT NULL,
  `Medical_Urgency` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Patient_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patients`
--

LOCK TABLES `Patients` WRITE;
/*!40000 ALTER TABLE `Patients` DISABLE KEYS */;
INSERT INTO `Patients` VALUES (1,'Jane','Doe','O+','Medium'),(2,'John','Doe','A+','Low'),(3,'Jane','Doe','O-','Medium'),(4,'Jim','Beam','A-','High'),(5,'Jill','Valentine','AB+','Critical'),(6,'Jack','Sparrow','B-','Low'),(7,'Jessie','James','AB-','Medium'),(8,'Walter','White','O+','High'),(9,'Skyler','White','A-','Low'),(10,'Hank','Schrader','B+','Medium'),(11,'Marie','Schrader','AB+','High');
/*!40000 ALTER TABLE `Patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patients_Conditions`
--

DROP TABLE IF EXISTS `Patients_Conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Patients_Conditions` (
  `Patient_ID` int NOT NULL,
  `Condition_ID` int NOT NULL,
  PRIMARY KEY (`Patient_ID`,`Condition_ID`),
  KEY `Condition_ID` (`Condition_ID`),
  CONSTRAINT `patients_conditions_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `Patients` (`Patient_ID`),
  CONSTRAINT `patients_conditions_ibfk_2` FOREIGN KEY (`Condition_ID`) REFERENCES `Conditions` (`Condition_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patients_Conditions`
--

LOCK TABLES `Patients_Conditions` WRITE;
/*!40000 ALTER TABLE `Patients_Conditions` DISABLE KEYS */;
/*!40000 ALTER TABLE `Patients_Conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Schedule`
--

DROP TABLE IF EXISTS `Schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Schedule` (
  `Schedule_ID` int NOT NULL AUTO_INCREMENT,
  `Event_Name` varchar(255) DEFAULT NULL,
  `Event_Date` date DEFAULT NULL,
  `Event_Time` time DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Hospital_ID` int DEFAULT NULL,
  PRIMARY KEY (`Schedule_ID`),
  KEY `Hospital_ID` (`Hospital_ID`),
  CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`Hospital_ID`) REFERENCES `Hospitals` (`Hospital_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Schedule`
--

LOCK TABLES `Schedule` WRITE;
/*!40000 ALTER TABLE `Schedule` DISABLE KEYS */;
INSERT INTO `Schedule` VALUES (1,'Annual Health Fair','2024-05-15','09:00:00','Main Conference Room','Scheduled',1);
/*!40000 ALTER TABLE `Schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ThirdParty_Transport`
--

DROP TABLE IF EXISTS `ThirdParty_Transport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ThirdParty_Transport` (
  `Transport_ID` int NOT NULL AUTO_INCREMENT,
  `Company_Name` varchar(255) DEFAULT NULL,
  `Contact_Info` varchar(255) DEFAULT NULL,
  `Transport_Type` varchar(50) DEFAULT NULL,
  `Tracking_Info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Transport_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ThirdParty_Transport`
--

LOCK TABLES `ThirdParty_Transport` WRITE;
/*!40000 ALTER TABLE `ThirdParty_Transport` DISABLE KEYS */;
INSERT INTO `ThirdParty_Transport` VALUES (1,'FastTrack Logistics','contact@fasttracklogistics.com','Ground','Track123XYZ'),(2,'FastTrack Logistics','contact@fasttrack.com','Ground','FT1234XYZ'),(3,'QuickShip Solutions','support@quickship.com','Air','QS5678ABC'),(4,'SecureTrans Co','info@securetrans.com','Ground','ST9012DEF'),(5,'Priority Dispatch','dispatch@priority.com','Air','PD3456GHI'),(6,'Express Moves','express@moves.com','Ground','EM7890JKL'),(7,'Global Transporters','global@transporters.com','Air','GT1234MNO'),(8,'Speedy Delivery','delivery@speedy.com','Ground','SD5678PQR'),(9,'Relay Shipping','relay@shipping.com','Air','RS9012STU'),(10,'Orbit Couriers','orbit@couriers.com','Ground','OC3456VWX'),(11,'ZoomLine Transport','zoom@zoomline.com','Air','ZL7890YZA');
/*!40000 ALTER TABLE `ThirdParty_Transport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tissue_Inventory`
--

DROP TABLE IF EXISTS `Tissue_Inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tissue_Inventory` (
  `Item_ID` int NOT NULL AUTO_INCREMENT,
  `Tissue_Type` varchar(50) DEFAULT NULL,
  `Units_Available` int DEFAULT NULL,
  `Arrival_Date` date DEFAULT NULL,
  `Expiration_Date` date DEFAULT NULL,
  `Bank_ID` int DEFAULT NULL,
  PRIMARY KEY (`Item_ID`),
  KEY `Bank_ID` (`Bank_ID`),
  CONSTRAINT `tissue_inventory_ibfk_1` FOREIGN KEY (`Bank_ID`) REFERENCES `Bank` (`Bank_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tissue_Inventory`
--

LOCK TABLES `Tissue_Inventory` WRITE;
/*!40000 ALTER TABLE `Tissue_Inventory` DISABLE KEYS */;
INSERT INTO `Tissue_Inventory` VALUES (1,'Skin',20,'2024-10-15','2025-01-15',1),(2,'Bone Marrow',15,'2024-10-16','2025-01-16',1),(3,'Cornea',8,'2024-10-17','2025-01-17',1),(4,'Skin',500,'2023-01-05','2023-07-05',1),(5,'Bone',300,'2023-02-10','2023-08-10',2),(6,'Heart Valves',150,'2023-03-15','2023-09-15',3),(7,'Tendons',250,'2023-04-20','2023-10-20',4),(8,'Corneas',350,'2023-05-25','2023-11-25',5),(9,'Skin',450,'2023-06-30','2023-12-30',6),(10,'Bone',280,'2023-07-05','2024-01-05',7),(11,'Heart Valves',120,'2023-08-10','2024-02-10',8),(12,'Tendons',260,'2023-09-15','2024-03-15',9),(13,'Corneas',360,'2023-10-20','2024-04-20',10);
/*!40000 ALTER TABLE `Tissue_Inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Transfer_Inventory`
--

DROP TABLE IF EXISTS `Transfer_Inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Transfer_Inventory` (
  `Transfer_ID` int NOT NULL AUTO_INCREMENT,
  `Item_ID` int NOT NULL,
  `Quantity` int DEFAULT NULL,
  PRIMARY KEY (`Transfer_ID`),
  KEY `Item_ID` (`Item_ID`),
  CONSTRAINT `transfer_inventory_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `Blood_Inventory` (`Item_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transfer_Inventory`
--

LOCK TABLES `Transfer_Inventory` WRITE;
/*!40000 ALTER TABLE `Transfer_Inventory` DISABLE KEYS */;
INSERT INTO `Transfer_Inventory` VALUES (1,1,10),(2,2,5),(3,1,2),(4,2,3),(5,3,1),(6,4,5),(7,5,2),(8,6,3),(9,7,1),(10,8,4),(11,9,2),(12,10,3);
/*!40000 ALTER TABLE `Transfer_Inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Transfer_Request`
--

DROP TABLE IF EXISTS `Transfer_Request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Transfer_Request` (
  `Request_ID` int NOT NULL AUTO_INCREMENT,
  `Type` varchar(50) DEFAULT NULL,
  `DeliveryRoute` varchar(255) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `Need_ID` int DEFAULT NULL,
  `Hospital_ID` int DEFAULT NULL,
  PRIMARY KEY (`Request_ID`),
  KEY `Need_ID` (`Need_ID`),
  KEY `Hospital_ID` (`Hospital_ID`),
  CONSTRAINT `transfer_request_ibfk_1` FOREIGN KEY (`Need_ID`) REFERENCES `Patient_Needs` (`Need_ID`),
  CONSTRAINT `transfer_request_ibfk_2` FOREIGN KEY (`Hospital_ID`) REFERENCES `Hospitals` (`Hospital_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transfer_Request`
--

LOCK TABLES `Transfer_Request` WRITE;
/*!40000 ALTER TABLE `Transfer_Request` DISABLE KEYS */;
INSERT INTO `Transfer_Request` VALUES (1,'Blood Transfer','Local Route 101','Pending','2024-10-12',1,1),(52,'Urgent','Route 101','In Progress','2023-01-01',1,1),(53,'Standard','Route 202','Completed','2023-01-02',12,2),(54,'Emergency','Route 303','Delayed','2023-01-03',22,3),(55,'Routine','Route 404','In Progress','2023-01-04',13,4),(56,'Urgent','Route 505','Completed','2023-01-05',23,5),(57,'Standard','Route 606','Delayed','2023-01-06',14,6),(58,'Emergency','Route 707','In Progress','2023-01-07',24,7),(59,'Routine','Route 808','Completed','2023-01-08',15,8),(60,'Urgent','Route 909','Delayed','2023-01-09',25,9),(61,'Standard','Route 1010','In Progress','2023-01-10',16,10);
/*!40000 ALTER TABLE `Transfer_Request` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-12 23:21:42
