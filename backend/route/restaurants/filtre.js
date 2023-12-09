// Modules nécessaires
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


        // Écoutez le port 3000
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
        });
    }
});

// joel voici la route du filre 
app.get('/api/restaurants', (req, res) => {
    // Récupérez les paramètres de requête
    const { category, regim, openingTime, closingTime } = req.query;
  
    //les conditions du filtre 
    const filterConditions = [];
    
    if (category) {
      filterConditions.push(`category = '${category}'`);
    }
  
    if (regim) {
      filterConditions.push(`regim = '${regim}'`);
    }
  
    if (openingTime) {
      filterConditions.push(`opening_time <= '${openingTime}'`);
    }
  
    if (closingTime) {
      filterConditions.push(`closing_time >= '${closingTime}'`);
    }
  
    //la requête SQL avec les conditions de filtre
    let sqlQuery = 'SELECT * FROM restaurants';
  
    if (filterConditions.length > 0) {
      sqlQuery += ` WHERE ${filterConditions.join(' AND ')}`;
    }
  
    // Requête SQL
    db.query(sqlQuery, (error, results, fields) => {
      if (error) {
        return res.status(500).json({ error: 'Erreur lors de l\'exécution de la requête SQL.' });
      }
  
      //les résultats en JSON
      res.json(results);
    });
  });
  