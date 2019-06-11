var express = require("express");


var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
//  "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
