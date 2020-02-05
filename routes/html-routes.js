// var path = require("path");

var express = require("express");
var app = express.Router();

// app.get('/', function(req,res){
//     res.render("index");
// });
module.exports = function(app) {
    app.get('/', function(req,res){
        res.render("index");
    });

    // app.get("/bio", function(req,res){
    //     res.sendFile(path.join(__dirname,"../public/bio.html"))
    // });

    // app.get("/portfolio",function(req,res){
    //     res.sendFile(path.join(__dirname,"../public/portfolio.html"))
    // });
}



/// unused file
//learn how to export