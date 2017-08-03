/**
* Main server.
* Creates the server and setup the rest API with DATABASE.
* @version 1.0.0
* @author Ole Martin Skaug
*/

/**********************
* DEPENDENCIES
**********************/

// Express setup
express           = require( 'express' );
app               = express();
var http          = require( 'http' ).createServer(app);

/**
* Set the port so it is available thorugh the environment variable.
* This is required if you are going to deploy the app on Heroku
*/
app.set('port', 3000 );
app.get('/', function(req,res) {
  res.sendfile('index.html');
});

/**
* Set up the listener on the port assign by heroku.
*/
http.listen( app.get('port'), function() {
  console.log( 'server is running...' );
} );
