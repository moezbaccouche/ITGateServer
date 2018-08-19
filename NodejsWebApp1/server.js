var express = require('express');
var app = express();

var article = require('./root/Article');
app.use('/article', article);

var articleType = require('./root/ArticleType');
app.use('/articleType', articleType);

var store = require('./root/Store');
app.use('/store', store);





app.listen(8888, function (req, res) {
    console.log('Server is running...');
});

app.get("/home", function (req, res) {
    res.redirect("https://www.youtube.com");
});