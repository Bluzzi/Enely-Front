const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const convertSass = require("sass-folder-converter");

// Convert SASS to CSS :
convertSass(__dirname + "/public/sass/", __dirname + "/public/css/");

// Create express instance :
global.server = express();

// Setup the logger :
server.use(require("morgan")("dev"));

// Define public folder : 
server.use(express.static(__dirname + "/public"));

// Setup view engine :
server.set("view engine", "ejs");

// Set view folder :
server.set("views", __dirname + "/views");

// Setup sessions and cookies :
server.use(require("cookie-parser")());

server.use(require("express-session")({
    secret: "0e47c47c-bc31-45ef-bc76-ba3b3158765e",
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false // set in true if the website use https 
    }
}));

// Add body parser middleware for get body content (for post method) :
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routes and 404 error :
fs.readdirSync(__dirname + "/routes/").forEach(fileName => require("./routes/" + fileName));

server.get("*", (request, response) => response.redirect("/"));

// Listen port :
server.listen(3001);
