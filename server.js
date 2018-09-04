var express = require('express');
//var mongoose = require('mongoose');

require('./models/user');
var routerUser = require('./routes/users');

//mongoose.connect('mongodb://localhost:27017/blog');
var app = express();

//Роутинг
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    next();
    });

app.use(express.static(__dirname + '/dist'));

//Наши запросы
app.use('/api/users', routerUser);

app.use(function (req, res, next) {
    var err = new Error('Page not found!');
    err.status = 404;
    next(next);
});

app.use(function (err, req, res, next) {
   res.status(err.status || 500);
   res.json({
       message: err.message,
       error: err
   });
});

app.listen(8082, function () {
    console.log('Сервер запущен!');
});