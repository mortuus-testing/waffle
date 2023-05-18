require('dotenv').config();
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/api', (req, res) => {
    res.json({
        msg: 'Hello world!',
    });
});

app.listen(port, () => {
    console.log(`🚀 Server up and running on port ${port}`);
});
