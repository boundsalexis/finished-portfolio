
// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));



//include project objects


// var routes = require("./routes/html-routes.js")(app);


//routes 
//##############move to export
app.get('/', function(req,res){
    res.render("index");
});

app.get('/bio', function(req,res){
    res.render("bio");
});

app.get('/portfolio', function(req,res){
    res.render("portfolio");
});

app.get("*", function(req,res){
    res.render("index");
})

app.get('/portfolio/:project', function(req, res){
    switch(req.params.project){
        case 1:
            res.render("project", project1);
            break;
        case 2:
            res.render("project", project2);
            break;
        case 3:
            res.render("project", project3);
            break;
        case 4:
            res.render("project", project4);
            break;
    }
})




// Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });