
/**
 * Module dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    core = require('./routes/core/'),
    helperDemo = require('./routes/helper-demo'),
    expressLayouts = require('express-ejs-layouts'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'sh1w31p@ssw0rd'}));
app.set('view engine', 'ejs');
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')));

app.use(app.router);

// development only
if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
    // TODO
}


/**
 * Routes
 */

// serve web pages
app.get('/', routes.index);

// JSON API
app.get ('/core/:base/:method', core);
app.post ('/core/:base/:method', core);
app.put ('/core/:base/:method', core);
app.delete ('/core/:base/:method', core);

//Helper Demos
app.get ('/helper-demo/:base/:method', helperDemo);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});