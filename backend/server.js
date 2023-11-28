const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});