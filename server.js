var express = require("express");
var path = require("path")

var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'app/public')))


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
//  "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// I am linking in my html and api routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
