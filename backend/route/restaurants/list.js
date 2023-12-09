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

        //la route de récupération de la liste des restaurants 
        app.get('/', GetRequest);

        // Écoutez le port 3000
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
        });
    }
});


function GetRequest(req, res) {
    
    db.query('SELECT `name`, `description`, `address`, `avis` FROM `restaurants`', (err, result) => {
        if (err) {
            console.error('Erreur de requête SQL :', err);
            
            res.status(500).send('Erreur de requête SQL');
            return;
        }

        // les résultats au format JSON
        res.json(result);
    });
}
