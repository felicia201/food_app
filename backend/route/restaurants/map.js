// routes.js
const express = require('express');
const db = require('../../config/db');

const router = express.Router();

router.get('/restaurants', (req, res) => {
    const sql = 'SELECT * FROM restaurants';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des restaurants :', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.json(results);
        }
    });
});

router.get('/restaurants/:latitude/:longitude', (req, res) => {
    const { latitude, longitude } = req.params;
    const sql = `
        SELECT * FROM restaurants 
        WHERE ACOS(SIN(RADIANS(latitude)) * SIN(RADIANS(?)) +
            COS(RADIANS(latitude)) * COS(RADIANS(?)) * COS(RADIANS(longitude) - RADIANS(?))) * 6371 <= 10`;

    console.log("SQL Query:", sql);

    db.query(sql, [latitude, latitude, longitude], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des restaurants à proximité :', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.json(results);
        }
    });
});

module.exports = router;


