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

// Routes and 404 error :
fs.readdirSync(__dirname + "/routes/").forEach(fileName => require("./routes/" + fileName));

server.get("*", (request, response) => response.redirect("/"));

// Listen port :
server.listen(3001);
