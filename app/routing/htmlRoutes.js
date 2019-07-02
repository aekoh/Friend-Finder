//  code will allow me to work with file and directory paths
var path = require("path");

//  This GET will request data from the /survey file
module.exports =  function(app) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });


//  This will lead to the home.html file which displays the home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
  
};