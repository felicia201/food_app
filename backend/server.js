const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurant'
});


db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

app.get('/restaurants', (req, res) => {
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


app.get('/restaurants/:latitude/:longitude', (req, res) => {
  const { latitude, longitude } = req.params;
  const sql = `SELECT * FROM restaurants WHERE 
            ACOS(SIN(RADIANS(latitude)) * SIN(RADIANS(${latitude})) +
            COS(RADIANS(latitude)) * COS(RADIANS(${latitude})) * COS(RADIANS(${longitude}) - RADIANS(longitude))) * 6371 <= 10`;

console.log("SQL Query:", sql);

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des restaurants à proximité :', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.json(results);
    }
  });
});



const port = process.env.PORT || 3001;


app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
