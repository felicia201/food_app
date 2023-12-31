// les modules nécessaires
const express = require('express');
const mysql = require('mysql');


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

        // Route de la recherche
        app.get('/restaurants/search/:query', searchRestaurants);

        // Écoutez le port 3000
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
        });
    }
});


function searchRestaurants(req, res) {
    const query = req.params.query;

    // requêtes sql
    const searchSql = `
    SELECT * 
    FROM restaurants
    WHERE name LIKE ? OR description LIKE ? OR menu_item LIKE ?
`;

// Utilisation du paramètre de recherche pour chaque condition
const params = [`%${query}%`, `%${query}%`, `%${query}%`];


    // Afficher la requête SQL de recherche
    console.log('Requête SQL de recherche générée:', searchSql);

    // Exécuter la requête SQL de recherche 
    db.query(searchSql, params, (err, result) => {
        if (err) {
            console.error('Erreur de requête SQL de recherche :', err);
            res.status(500).send('Erreur de requête SQL de recherche');
            return;
        }

        // les résultats en JSON
        res.json(result);
    });
}
