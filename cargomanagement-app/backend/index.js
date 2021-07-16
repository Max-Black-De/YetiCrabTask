// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var bodyParser = require("express");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/api/orders", (req, res, next) => {
    var sql = "select * from zayavka"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            rows
        })
    });
});

app.get("/api/order/:id", (req, res, next) => {
    var sql = "select * from zayavka where id = ?"
    var params = [req.params.id]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.post("/api/order/", (req, res, next) => {
    var errors=[]
    if (!req.body.number_order){
        errors.push("No number_order specified");
    }
    if (!req.body.data_time){
        errors.push("No data_time specified");
    }
    if (!req.body.client_name){
        errors.push("No client_name specified");
    }
    if (!req.body.carrier_name){
        errors.push("No carrier_name specified");
    }
    if (!req.body.carrier_phone){
        errors.push("No carrier_phone specified");
    }
    if (!req.body.comment_order){
        errors.push("No comment_order specified");
    }
    if (!req.body.ati_code){
        errors.push("No ati_code specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        number_order: req.body.number_order,
        data_time: req.body.data_time,
        client_name: req.body.client_name,
        carrier_name: req.body.carrier_name,
        carrier_phone: req.body.carrier_phone,
        comment_order: req.body.comment_order,
        ati_code: req.body.ati_code
    }
    var sql =
    'INSERT INTO zayavka(number_order, data_time, client_name, carrier_name, carrier_phone, comment_order,ati_code) VALUES (?,?,?,?,?,?,?)'

    var params =[data.number_order,
                data.data_time,
                data.client_name,
                data.carrier_name,
                data.carrier_phone,
                data.comment_order,
                data.ati_code]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

app.patch("/api/order/:id", (req, res, next) => {
    var data = {
    number_order: req.body.number_order,
    data_time: req.body.data_time,
    client_name: req.body.client_name,
    carrier_name: req.body.carrier_name,
    carrier_phone: req.body.carrier_phone,
    comment_order: req.body.comment_order,
    ati_code: req.body.ati_code
}
    db.run(
        `UPDATE zayavka set
        number_order = COALESCE(?,number_order),
        data_time = COALESCE(?,data_time),
        client_name = COALESCE(?,client_name),
        carrier_name = COALESCE(?,carrier_name),
        carrier_phone = COALESCE(?,carrier_phone),
        comment_order = COALESCE(?,comment_order),
        ati_code = COALESCE(?,ati_code)
        WHERE id = ?`,
        [data.number_order,
            data.data_time,
            data.client_name,
            data.carrier_name,
            data.carrier_phone,
            data.comment_order,
            data.ati_code,
            req.params.id],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
        });
})

app.delete("/api/order/:id", (req, res, next) => {
    db.run(
        'DELETE FROM zayavka WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});