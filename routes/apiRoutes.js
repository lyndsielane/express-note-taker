const notes = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notes))
    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
            if (err) {
                console.error(err)
                return
            }
        })
        return res.json(req.body);
    })
}