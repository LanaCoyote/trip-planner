var express = require('express'),
    sass = require('node-sass-middleware'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( sass( {
  src: __dirname + '/assets',
  dest: __dirname + '/public',
  debug: true,
}));
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(err){
  console.log('Listening to port 3000');
});

app.get('/', function( req, res, next ) {
  res.render( 'layout' );
} );
