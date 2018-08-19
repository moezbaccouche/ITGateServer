var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var conn = require('./connection');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/getAllStores', function (req, res) {

    conn.getConnection().query("SELECT storeTitle FROM store", function (err, result) {

        if (err) {
            res.send("An eror has occured : " + err);
            console.log("An error has occured : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});



module.exports = router;