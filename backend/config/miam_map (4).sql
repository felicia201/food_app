-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 07 déc. 2023 à 03:43
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `miam_map`
--
CREATE DATABASE IF NOT EXISTS miam_map DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE miam_map;

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `avis` varchar(255) NOT NULL,
  `price` float(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`menu_id`, `restaurant_id`, `name`, `description`, `avis`, `price`) VALUES
(1, 1, 'Beef master suprem', 'Steak de bœuf frais, bacon de dinde, cheddar, salade, tomate, oignon, sauce maison ', '4/5', 12),
(2, 2, 'Curry rouge', 'Une succulente recette thaï au curry rouge à base de piments, citronnelle, ail cuisinée dans une sauce au parfum subtil et suave du lait de coco et poulet ou crevettes ou bœuf.', '5/5', 13),
(3, 3, 'midi 14 pièce', '6 saumon avocat cheese\r\n6 saumon avocat frais\r\n2 sushi saumon cheese', '4/5', 18),
(4, 1, 'Carbonara', 'crème fraiche, lardon, œuf, oignon', '4/5', 13),
(5, 1, 'Buffalo', '3 steak, cheddar, Boursin, jambon de dinde,  ', '4/5', 10),
(6, 1, 'Veggie', 'steak vegan, champignon, tomate, salade, oignon caramélisé', '2/5', 11),
(7, 4, 'Quiche', 'thon, saumon épinard, chèvre, dinde fromage', '4/5', 3),
(8, 4, 'sandwich', 'poulet fromage, poulet mariné, thon, mozzarella tomate', '2/5', 5),
(9, 4, 'croque-monsieur', 'jambon de dinde, saumon', '4/5', 4),
(10, 4, 'pizza', 'poulet, thon, dinde, saumon, fromage', '5/5', 4),
(11, 3, 'Donburi saumon', 'riz,vinaigre,poivrons oignon rouge,sésame, ciboulette, coriandre', '4/5', 10),
(12, 3, 'Yakitori 5 pièce', 'Bœuf, fromage, boulette de poulet', '4,5/5', 7),
(13, 3, 'California summer roll', 'Californie crevette tempura sauce curry', '4/5', 13),
(14, 2, 'Chicken satay🥜', 'Brochettes de poulet mariné nappé de notre sauce cacahuète onctueuse maison et servi avec du riz sauté.', '3/5', 12),
(15, 2, 'Seua lang haï (Tigre qui pleure)🐅', 'Le tigre qui pleure est l\'un des grands classiques de la cuisine thaïlandaise. C\'est un faux-filet de bœuf mariné et grillé, servi avec du riz et une sauce pimentée et parfumée de coriandre fraîche.', 'Populaire', 15),
(16, 2, 'Bo bun', 'le bo bun est un plat complet regroupant à la fois de la viande de bœuf,poulet ou crevettes des crudités (salade, carottes, germes de soja, concombre...), des nems, des cacahuètes et le tout servi avec une sauce au soja et au nuoc-mâm.', 'populaire', 11),
(17, 0, 'Mozzarella fritta', 'Petite friture de Mozzarella di bufala panée ', '5/5', 5),
(18, 0, 'Pizza Regina', 'Sauce tomate au basilic frais, mozzarella, jambon blanc, champignons frais, origan ', '4/5', 15),
(19, 0, 'Mafaldine cèpes & foie gras', 'Tagliatelle ondulées cuisinées avec un mélange de cèpes, girolles et pleurotes, escalope de foie gras de canard poêlée, fleur de sel ', 'POPULAIRE', 18),
(20, 0, 'Giganti Pollo & Asparagi', 'Pâtes farcies à l’asperge à la sauce crémée, émincé de poulet rôti et asperges vertes ', '5/5', 22);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `reservation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `schedule_reservation` varchar(255) NOT NULL,
  `reservation_number` varchar(255) NOT NULL,
  `reservation_statue` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `restaurants`
--

CREATE TABLE `restaurants` (
  `restaurant_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `opening_time` time NOT NULL,
  `closing_time` time NOT NULL,
  `regim` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `avis` varchar(255) NOT NULL,
  `menu_item` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `restaurants`
--

INSERT INTO `restaurants` (`restaurant_id`, `name`, `description`, `address`, `opening_time`, `closing_time`, `regim`, `category`, `picture`, `avis`, `menu_item`) VALUES
(0, 'Le colisée', 'Une boulette de viande pour tous', '35 Rue du Capitaine Drey\r\n93100 Montreuil', '11:00:00', '22:00:00', 'végétariens\r\ncacher', 'Italien', '', '4/5', 'pates\r\nboulette de viande\r\npizza\r\ncalzone'),
(1, 'Beef Master', 'Notre Restaurant. Brasserie, Bar à salade, burger, pâte et bien plus encore !', '7 RUE DE VALMY, 93100 MONTREUIL', '11:00:00', '00:00:00', 'Halal, Végétariens', 'fast-food', 'beefmaster.png', '4/5', 'Burger\r\npates\r\nsandwich\r\ncrêpe\r\npizza\r\ntiramisu\r\ngauffre'),
(2, 'Agate Thai', 'DÉCOUVREZ LA STREET-FOOD THAÏLANDAISE AVEC AGATE THAÏ 🥢 ET MANGEZ DANS UN VRAI TUC TUC!', '35 Rue du Capitaine Dreyfus\r\n93100 Montreuil', '11:45:00', '23:30:00', 'Halal, Végétariens, Sans gluten', 'Thailandais', 'agate.jpeg', '3/5', 'padthai\r\nbobun\r\ncrevette\r\nriz \r\nnouilles'),
(3, 'Rever Sushi', 'Le Goût Qui Vous Fait Vous Sentir Génial\r\n', '254 Boulevard Voltaire, Paris, 75011', '11:00:00', '22:00:00', 'Végétariens, Végétaliens, Sans gluten', 'japonais', 'sushi.jpg', '3,5/5', 'sushi\r\nsaumon\r\nriz\r\ncrevette\r\nsoupe miso'),
(4, 'Le César', 'Viennoiseries, Pains, Produits frais à votre disposition ! ', 'place jean jaurès, 93100 montreuil', '08:00:00', '22:00:00', 'halal, végétarien', 'Boulangerie', '', '4/5', 'baguette\r\nsandwich\r\nquiche\r\ncroque-monsieur\r\npizza');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `restaurant_id` (`restaurant_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `reservation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`restaurant_id`);

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`restaurant_id`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
