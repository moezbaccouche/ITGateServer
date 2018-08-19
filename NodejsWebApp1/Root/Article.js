var express = require('express');
var bodyParser = require('body-parser');
var conn = require('./connection');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/getAllArticles', function (req, res) {

    conn.getConnection().query("SELECT * FROM article", function (err, result) {

        if (err) {
            res.send("An error has occured : " + err);
            console.log("Error : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});

router.get('/getArticleByBarcode/:barcode', function (req, res) {

    var barcode = req.params.barcode;

    conn.getConnection().query("SELECT * FROM article a, storeArticle sa, store s WHERE (a.barcodeArticle = '" + barcode + "' && a.id_article = sa.id_article && sa.store_id = s.store_id)", function (err, result) {

        if (err) {
            res.send("An error has occured : " + err);
            console.log("Error : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });

  
});


router.get('/getArticleByDesignation/:designation', function (req, res) {

    var designation = req.params.designation;

    conn.getConnection().query("SELECT * FROM article WHERE (designationArticle = '" + designation + "')", function (err, result) {

        if (err) {
            res.send("An error has occured : " + err);
            console.log("Error : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});


router.get('/getArticleByCode/:code', function (req, res) {

    var code = req.params.code;

    conn.getConnection().query("SELECT * FROM article WHERE (codeArticle = '" + code + "')", function (err, result) {

        if (err) {
            res.send("An error has occured : " + err);
            console.log("Error : " + err);
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});









module.exports = router;