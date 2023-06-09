
const express = require ("express");
const app = express ();

const pug = require ("pug");

const workingHours = require ("./middleWare/workHours")
app.use (express.static("public"));
app.set ("view engine", "pug");
app.set ("views", "views");

app.get( "/", workingHours, function (req, res) {
    res.render ("index", {title : "home"} )
})

app.get( "/services",workingHours, function (req, res) {
    res.render ("services", {title : "services"} )
})

app.get( "/contact",workingHours, function (req, res) {
    res.render ("contact", {title : "contact"} )
})

app.get( "/errorpage", function (req, res) {
    res.render ("error", {title : "error"} )
})









const PORT = 1234;
app.listen (PORT, error => {
    if (error) {console.log (error) } else 
    {console.log ("server is running ...")}
})