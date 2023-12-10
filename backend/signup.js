const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miam_map'
});

app.post('/register', (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = { username: req.body.username, password: password };

    db.query('INSERT INTO users SET ?', user, (error, results) => {
        if (error) throw error;
        res.send('User registered successfully!');
    });
});

app.post('/login', (req, res) => {
    db.query('SELECT * FROM users WHERE username = ?', [req.body.username], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            const comparison = bcrypt.compareSync(req.body.password, results[0].password);
            if (comparison) {
                res.send('Logged in successfully!');
            } else {
                res.send('Incorrect username and/or password!');
            }
        } else {
            res.send('Incorrect username and/or password!');
        }
    });
});