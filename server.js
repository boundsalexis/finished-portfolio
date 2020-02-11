
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
technology: ["Node JS ", " ES6 "," Charts JS ", " Bootstrap ", " Express ", " Propublica API ", " OpenSecrets API ", " HandleBars "],
deployed: true,
live: "https://mycandidates.herokuapp.com/",
repo: "https://github.com/boundsalexis/tinfoil-hat",
description: "I worked on a team with three people to create an app with real world application. In recent years voters have become more concerned with representative's campaign donors. This app allows the user to create an account and keeps track of representatives in their specified state. We have a comprehensive search field with multiple optional parameterss allowing for broad or narrow searches. From the search results the user is able to click on each representative and see their campaign donors. We used Node.js and Express to create our server, Bootstrap to style to frontend, and MySQL and Sequelize to manage our database.",
img:"/assets/political.png",
learning:["Using Git collaboratively, Sequelize"]
};
const project2 = {
name: "FitMe",
technology: [" Node JS  ", " HTML ", " FireBase ", " Yelp API "],
deployed: true,
description: "I worked on a team with three people to create an app for fitness enthusiasts in which they create and account and based on their responses during the sign up process we give them motivation, personalised workouts, personalised diet guidelines, and a list of the closets gyms to them.",
live:"https://skuttenkuler.github.io/FitME/",
repo: "https://github.com/boundsalexis/FitME",
img: "/assets/fitme.png"
};
const project3 = {
name: "Note Taker",
technology: [" Node JS ", " HTML ", " Express ", " Jquery ", " Pure CSS" ],
repo: "https://github.com/boundsalexis/note-taker",
deployed: true,
live:"https://mysterious-waters-03191.herokuapp.com/",
description: "This app allows the user to create, edit, and delete notes. Anyone with the link can add to the notes. The notes are saved in a makeshift database by writing and rewriting a file.",
img:"/assets/notetaker.png"
};
const project4 = {
name: "Cicky Game",
technology: ["React ", "Handlebars ", " OpenWeather API ", "Local Storage"],
deployed: true,
live:"https://boundsalexis.github.io/clicky-game/",
repo: "https://github.com/boundsalexis/Weather-Board",
description: "This is a memory game which utilizes React to track the state and keep the scores updating. Upon each click the clicked item is compared to an array holding all clicked items and if it is already in that array the user has lost. If the clicked item is not in the array it is added and the score is incremented.",
img:"/assets/losing.gif"
};
const project5= {
name: "Team Manager",
technology: ["Node JS ", " HTML ", " Jest "],
deployed: false,
repo: "https://github.com/boundsalexis/team-generator",
description: "This app allows you to add different types of employees to be added to your team for easy access to information relative to their role. Jest was used for testing. ",
img:"/assets/teamgenerator.png"
};
const project6 = {
name: "Content Management",
technology: ["Node JS ", "HTML", " Jest "],
deployed: false,
repo: "https://github.com/boundsalexis/content-management-system",
description: "This command line interface which functions as a directory for a store. It keeps track of different, departments, roles, employees and managers. The user is able to create, update, and delete each item in each category. Jest was used for testing.",
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