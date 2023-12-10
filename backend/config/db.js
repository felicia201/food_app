//installer mysql via : npm install mysql
// const mysql = require('mysql')
//     //installer dotenv via : npm dotenv
// require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

// // Utilisation des variables
// const dbHost = process.env.DB_HOST;
// const dbUser = process.env.DB_USER;
// const dbPassword = process.env.DB_PASSWORD;
// const dbName = process.env.DB_NAME;

// const db = mysql.createConnection({
//     host: dbHost,
//     user: dbUser,
//     password: dbPassword,
//     database: dbName
// });


// db.connect(err => {
//     if (err) {
//         console.error('Erreur de connexion à la base de données :', err);
//     } else {
//         console.log('Connecté à la base de données MySQL');
//     }
// });

// db.connect();

// module.exports = db;

// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miam_map'
});

module.exports = db;
