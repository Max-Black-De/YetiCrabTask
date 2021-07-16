const express = require('express');
const app = express();
const mysql = require('mysql');
// const bodyParser = require('bodyParser');
const cors = require('cors');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Black_Devil_!985',
    database: 'Max_CargoManagement'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection.connect((err) => {
    if (!err) {
        console.log("SUCCESS");
    }
});

app.get('/api/getapp', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_CargoManagement.zayavka"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insertapp', (req, res) => {
    var zayavka = req.body.zayavka;
    var sqlInsert = 
    "INSERT INTO (atiCode) VALUES (?)";
    connection.query(sqlInsert, [zayavka], (err, result) => {
        res.send(result);
    })
})

app.delete('api/deleteapp', (req, res) => {
    const sqlDelete = "DELETE FROM * zayavka"
    connection.query(sqlDelete, (err, result) => {
        console.log("result");
    });
});

connection.query('SELECT id, carrierName FROM zayavka', 
    (err, data) => {
        if (!err) {
            console.log(data);
        }
});

app.listen(3001, () => {
    console.log('good')
})