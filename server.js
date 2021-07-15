const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.send('hello world')
});

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));