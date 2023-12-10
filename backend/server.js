// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const cors = require('cors');

// app.use(cors());

// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'food_app'
// });

// app.post('/register', (req, res) => {
//     const password = bcrypt.hashSync(req.body.password, 10);
//     const user = { username: req.body.username, password: password };

//     db.query('INSERT INTO users SET ?', user, (error, results) => {
//         if (error) throw error;
//         res.send('User registered successfully!');
//     });
// });

// app.post('/login', (req, res) => {
//     db.query('SELECT * FROM users WHERE username = ?', [req.body.username], (error, results) => {
//         if (error) throw error;

//         if (results.length > 0) {
//             const comparison = bcrypt.compareSync(req.body.password, results[0].password);
//             if (comparison) {
//                 res.send('Logged in successfully!');
//             } else {
//                 res.send('Incorrect username and/or password!');
//             }
//         } else {
//             res.send('Incorrect username and/or password!');
//         }
//     });
// });

// const port = process.env.PORT || 3001;

// app.listen(port, () => {
//     console.log(`Serveur en cours d'exécution sur le port ${port}`);
// });

// routes.js

// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./route/restaurants/map');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connexion à la base de données réussie');
    }
});

app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
});
