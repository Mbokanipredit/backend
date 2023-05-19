const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'your request is succesfull'})
});

module.exports = app;