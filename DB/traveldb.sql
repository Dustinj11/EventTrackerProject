-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema traveldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `traveldb` ;

-- -----------------------------------------------------
-- Schema traveldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `traveldb` DEFAULT CHARACTER SET utf8 ;
USE `traveldb` ;

-- -----------------------------------------------------
-- Table `location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `location` ;

CREATE TABLE IF NOT EXISTS `location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `notes` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS traveluser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'traveluser'@'localhost' IDENTIFIED BY 'traveluser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'traveluser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `location`
-- -----------------------------------------------------
START TRANSACTION;
USE `traveldb`;
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (1, 'Germany', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (2, 'Italy', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (3, 'Croatia', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (4, 'Turkey', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (5, 'Greece', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (6, 'Belgium', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (7, 'Netherlands', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (8, 'Afghanistan', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (9, 'California', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (10, 'Colorado', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (11, 'Arizona', NULL, NULL, NULL, NULL);
INSERT INTO `location` (`id`, `name`, `country`, `state`, `city`, `notes`) VALUES (12, 'Florida', NULL, NULL, NULL, NULL);

COMMIT;

