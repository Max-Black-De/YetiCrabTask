var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run
        (
            `CREATE TABLE zayavka (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number_order INTEGER, 
            data_time text, 
            client_name text,
            carrier_name text,
            carrier_phone INTEGER,
            comment_order text,
            ati_code INTEGER
            )`,
            (err) => {
            if (err) {
                // Table already created
            }
            // else{
            //     // Table just created, creating some rows
            //     var insert =
            //     'INSERT INTO zayavka (number_order, data_time, client_name, carrier_name, carrier_phone, comment_order,ati_code) VALUES (?,?,?,?,?,?,?)'
            //     db.run(insert, ["123","16.07.2010","OOO parovoz", "Ivanov", "891225", "bokovaya", 12345])            
            // }
        });  
    }
});


module.exports = db