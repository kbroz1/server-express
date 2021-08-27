//You need to define an app variable for express
const express = require('express');
//in place of the http variable that you would use for a node path
const app = express();
const path = require("path");

//setting up the express App 

var PORT=8080;

//Setting up the Express app to handle data parsing for sending POST requests
//app.use = tells app to use the following info
app.use(express.urlencoded({extended:true}));
app.use(exprerss.json());

//routes
//Basic routes that send the user to the different html pages
app.get("/", function (req,res){
  res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/contact", function (req,res){
  res.sendFile(path.join(__dirname, "contact.html"))
});

app.get("/projects", function (req,res){
  res.sendFile(path.join(__dirname, "projects.html"))
});

//starts the server to begin listening for requests
app.listen(PORT, function(){
  console.log("App is listening: "  + PORT)
});