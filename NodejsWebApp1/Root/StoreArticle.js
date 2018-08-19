var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var conn = require('./connection');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

