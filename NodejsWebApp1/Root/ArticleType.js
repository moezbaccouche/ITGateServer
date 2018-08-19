var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var conn = require('./connection');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/getAllArticleTypes', function (req, res) {

    conn.getConnection().query("SELECT articleTypeTitle FROM articletype", function (err, result) {

        if (err) {
            res.send("An error has occured : " + err);
            console.log("An error has occured : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});

router.get('/getTypeCodeByTitle/:title', function (req, res) {

    var title = req.params.title;

    conn.getConnection().query("SELECT articleTypeCode FROM articletype WHERE (articleTypeTitle = '" + title + "')", function (err, result) {
        if (err) {
            res.send("An error has occured : " + err);
            console.log("An error has occured : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});

module.exports = router;