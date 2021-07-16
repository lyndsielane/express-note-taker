const notes = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notes))
    app.post('/api/notes', (req, res) => {
        const noteId = uuidv4();
        req.body.id = noteId;
        notes.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
            if (err) {
                console.error(err);
                return;
            }
        });
        return res.json(req.body);
    });

    app.delete('/api/notes/:id', (req, res) => {
        notes.forEach((note, i) => {
            if (note.id === req.params.id) {
                notes.splice(i, 1);
                return;
            }
        })
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
            if (err) {
                console.error(err);
                return;
            }
        });

        return res.JSON();
    });
}