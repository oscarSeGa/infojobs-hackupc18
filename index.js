// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

//Oauth2
var passport = require('passport');
require('./server/passport')(passport); //pass passport for configuration

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static('./dist/infojobs-hackupc'));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/infojobs-hackupc/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
/*const port = process.env.PORT || 8000;
app.set('port', port);*/

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));

server.listen(process.env.PORT || 8000, "0.0.0.0", function() {
    console.log("App is running on port " + (process.env.PORT || 8000));
});
