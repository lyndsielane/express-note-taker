const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const PORT = 3000;

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));