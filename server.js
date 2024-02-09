// server.js
const express = require('express');
const mongodb = require('mongodb');
const app = express();
app.use(express.json());

let db;

mongodb.MongoClient.connect('mongodb+srv://shuyaaaaa12:NvpoBuRp7MVPcAYA@cluster0.q2yycqx.mongodb.net/', function(err, client) {
    if(err) throw err;
    db = client.db('quizApp');
    app.listen(3000, () => console.log('Server is running on port 3000'));
});

app.post('/login', function(req, res) {
    const { username, password } = req.body;
    db.collection('users').findOne({ username, password }, function(err, user) {
        if(err) throw err;
        if(user) {
            // For simplicity, we're using the user's ID as the session token.
            // In a real application, you would want to generate a unique session token.
            res.json({ token: user._id });
        } else {
            res.status(401).json({ error: 'Invalid username or password.' });
        }
    });
});
