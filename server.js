
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


// cvf//include project objects
const project1 = {
name: "Election Year",
technology: ["Node JS ", " Charts JS ", "Bootstrap", ],
deployed: true,
live: "https://mycandidates.herokuapp.com/",
repo: "https://github.com/boundsalexis/tinfoil-hat",
description: "Get Real Detailed here",
img:"/assets/political.png"
};
const project2 = {
name: "FitMe",
technology: ["Node JS  ", "HTML"],
deployed: true,
live:"https://skuttenkuler.github.io/FitME/",
repo: "https://github.com/boundsalexis/FitME",
img: "/assets/fitme.png"
};
const project3 = {
name: "Note Taker",
technology: ["Node JS ", "HTML"],
repo: "https://github.com/boundsalexis/note-taker",
deployed: true,
live:"https://mysterious-waters-03191.herokuapp.com/",
description: "Get Real Detailed here",
img:"/assets/notetaker.png"
};
const project4 = {
name: "Weather Board",
technology: ["Node JS ", "HTML"],
deployed: false,
repo: "https://github.com/boundsalexis/Weather-Board",
description: "Get Real Detailed here",
img:"/assets/weatherboard.png"
};
const project5= {
name: "Team Manager",
technology: ["Node JS ", "HTML"],
deployed: false,
repo: "https://github.com/boundsalexis/team-generator",
description: "Get Real Detailed here",
img:"/assets/teamgenerator.png"
};
const project6 = {
name: "Content Management",
technology: ["Node JS ", "HTML"],
deployed: false,
repo: "https://github.com/boundsalexis/content-management-system",
description: "Get Real Detailed here",
img: "/assets/contentmanagemen.png"
};

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

app.get("/:anythingelse", function(req,res){
    res.render("index");
});

app.get('/portfolio/:project', function(req, res){
    console.log(req.params.project);
    switch(req.params.project){
        case '1':
            res.render("project", project1);
            break;
        case '2':
            res.render("project", project2);
            break;
        case '3':
            res.render("project", project3);
            break;
        case '4':
            res.render("project", project4);
            break;
        case '5':
            res.render("project", project5);
            break;
        case '6':
            res.render("project", project6);
            break;   
    }
});




// Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });