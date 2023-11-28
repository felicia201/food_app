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