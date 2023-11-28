// Importez les modules nécessaires
const express = require('express');
const mysql = require('mysql');

// Créez une instance d'Express
const app = express();

// Configuration de la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miam_map'
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données MySQL');

        // Définir la route pour le filtre des restaurants
        app.get('/restaurants/filter/:budget/:menu/:cuisine/:horaire/:regime', filterRestaurants);
        app.get('/', (req, res) => {
            res.send('Bienvenue sur la page d\'accueil');
        });
        app.get('/restaurants/search/:query', searchRestaurants);
        

        // Écoutez le port 3001
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
        });
    }
});

function filterRestaurants(req, res) {
    // Récupérer les paramètres de la requête pour les filtres
    const budget = req.params.budget || 20; // Valeur par défaut
    const cuisine = req.params.cuisine || 'default';
    const regime = req.params.aliments || 'default';

    // Construire la requête SQL en fonction des filtres
    let sql = `SELECT * FROM menu WHERE price <= ${budget}`;

    if (cuisine !== 'default') {
        sql += ` AND menu_items = '${cuisine}'`;
    }


    if (regime !== 'default') {
        sql += ` AND  description = '${aliments}'`;
    }

    // Afficher la requête SQL dans la console
    console.log('Requête SQL générée:', sql);

    // Exécuter la requête SQL
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Erreur de requête SQL :', err);
            res.status(500).send('Erreur de requête SQL');
            return;
        }

        // Répondre avec les résultats au format JSON
        res.json(result);
    });
}


function searchRestaurants(req, res) {
    // Récupérer le paramètre de recherche
    const query = req.params.query;

    // Construire la requête SQL pour la recherche
    const searchSql = `SELECT * FROM menu WHERE menu_items LIKE '%${query}%' OR description LIKE '%${query}%'`;

    // Afficher la requête SQL dans la console
    console.log('Requête SQL de recherche générée:', searchSql);

    // Exécuter la requête SQL de recherche
    db.query(searchSql, (err, result) => {
        if (err) {
            console.error('Erreur de requête SQL de recherche :', err);
            res.status(500).send('Erreur de requête SQL de recherche');
            return;
        }

        // Répondre avec les résultats au format JSON
        res.json(result);
    });
}