var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes'),
    model = require('./models');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use("/bootstrap", express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use("/jquery", express.static(__dirname + '/node_modules/jquery/dist'));



app.listen(3000, function(err){
  console.log('Listening to port 3000');
});

app.use('/', routes);
