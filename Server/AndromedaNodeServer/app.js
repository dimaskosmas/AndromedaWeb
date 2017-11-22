'use strict';
var debug = require('debug');
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = require('./routes/index.ejs');
//var users = require('./routes/users');


var passport = require('passport');
var flash = require('connect-flash');
//
//

var Sequelize = require('sequelize');
var models = require('./models');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');   //set view engine to ejs;;;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));         //log every request to the console
app.use(bodyParser.json());     //get information from json
app.use(bodyParser.urlencoded({ extended: false }));//get information from url
app.use(cookieParser());        //read cookies needed for auth
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', routes);
//app.use('/users', users);

//required for passport
app.use(session({ 
    secret: 'firstsessionsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
})); //session secret
app.use(passport.initialize());
app.use(passport.session());        //for persistend login sesssions
app.use(flash());                   //use connect flash  for flash messages stores in session

require('./routes/routes.js')(app, passport);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

function startApp(){
    var server = app.listen(app.get('port'), function () {
                    console.log(server.address().port);
                    debug('Express server listening on port ' + server.address().port);
                });
}

models.sequelize.sync()
    .then(startApp)
    .catch(function (e) {
        throw new Error(e);
});
var usersController = require('./controllers/usersController');
app.get('/users', usersController.get);

//User repository introduction


//database andromeda
//password andromeda
//host -> 192.0.3.205
//port -> 3306