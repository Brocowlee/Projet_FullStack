-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 18 jan. 2023 à 16:27
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `fullstack_reddit`
--

-- --------------------------------------------------------

--
-- Structure de la table `aime`
--

DROP TABLE IF EXISTS `aime`;
CREATE TABLE IF NOT EXISTS `aime` (
  `id_utilisateur` int NOT NULL,
  `id_message` int NOT NULL,
  `avis` tinyint(1) NOT NULL,
  `reaction` int NOT NULL,
  PRIMARY KEY (`id_utilisateur`,`id_message`),
  KEY `FK_user_aime` (`id_utilisateur`),
  KEY `FK_message` (`id_message`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id_message` int NOT NULL AUTO_INCREMENT,
  `contenu_message` text NOT NULL,
  `date_message` date NOT NULL,
  `id_utilisateur` int NOT NULL,
  `id_post` int NOT NULL,
  `id_message_lien` int DEFAULT NULL,
  PRIMARY KEY (`id_message`),
  KEY `FK_message_user` (`id_utilisateur`),
  KEY `FK_message_post` (`id_post`),
  KEY `FK_message_message` (`id_message_lien`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id_post` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL,
  `contenu_post` text NOT NULL,
  `date_post` date NOT NULL,
  `id_thread` int NOT NULL,
  `id_utilisateur` int NOT NULL,
  PRIMARY KEY (`id_post`),
  KEY `FK_post_thread` (`id_thread`),
  KEY `FK_post_user` (`id_utilisateur`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `thread`
--

DROP TABLE IF EXISTS `thread`;
CREATE TABLE IF NOT EXISTS `thread` (
  `id_thread` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL,
  `description` varchar(255) NOT NULL,
  `limite_age` tinyint(1) NOT NULL,
  `date_thread` date NOT NULL,
  PRIMARY KEY (`id_thread`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `thread`
--

INSERT INTO `thread` (`id_thread`, `titre`, `description`, `limite_age`, `date_thread`) VALUES
(3, 'RocketLeague', 'les plays de fou!', 13, '0000-00-00'),
(17, 'Harry Potter', 'les films', 15, '2023-01-03');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(30) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `date_creation_compte` date NOT NULL,
  `mana` double DEFAULT '0',
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `pseudo`, `mdp`, `age`, `date_creation_compte`, `mana`, `admin`) VALUES
(6, 'vartox', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 21, '2023-01-01', 13, 1),
(7, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 13, '2023-01-01', 0, 1),
(9, 'benjo', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 21, '2023-01-03', 6, 0),
(10, 'arthuro', 'b75b74ff496e84c01de3985f0d5c1672ce8db7cbbc0ac3ffd3c5ad5812a12e55', 21, '2023-01-03', 26, 0),
(11, 'thomo', '45460044f32c0d34ee0206327d24652aef0b56ccfd69197fc671a496dcbadcff', 22, '2023-01-03', 16, 0);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur_thread`
--

DROP TABLE IF EXISTS `utilisateur_thread`;
CREATE TABLE IF NOT EXISTS `utilisateur_thread` (
  `id_utilisateur` int NOT NULL,
  `id_thread` int NOT NULL,
  `suivre` tinyint(1) NOT NULL,
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_utilisateur`,`id_thread`),
  KEY `FK_utilisateur_thread` (`id_utilisateur`),
  KEY `FK_thread` (`id_thread`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur_thread`
--

INSERT INTO `utilisateur_thread` (`id_utilisateur`, `id_thread`, `suivre`, `admin`) VALUES
(11, 17, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `vote`
--

DROP TABLE IF EXISTS `vote`;
CREATE TABLE IF NOT EXISTS `vote` (
  `id_utilisateur` int NOT NULL,
  `id_post` int NOT NULL,
  `avis` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_utilisateur`,`id_post`),
  KEY `FK_user_vote` (`id_utilisateur`),
  KEY `FK_post` (`id_post`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `aime`
--
ALTER TABLE `aime`
  ADD CONSTRAINT `FK_message` FOREIGN KEY (`id_message`) REFERENCES `message` (`id_message`),
  ADD CONSTRAINT `FK_user_aime` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id_utilisateur`);

--
-- Contraintes pour la table `utilisateur_thread`
--
ALTER TABLE `utilisateur_thread`
  ADD CONSTRAINT `FK_thread` FOREIGN KEY (`id_thread`) REFERENCES `thread` (`id_thread`),
  ADD CONSTRAINT `FK_utilisateur_thread` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id_utilisateur`);

--
-- Contraintes pour la table `vote`
--
ALTER TABLE `vote`
  ADD CONSTRAINT `FK_post` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`),
  ADD CONSTRAINT `FK_user_vote` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id_utilisateur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
