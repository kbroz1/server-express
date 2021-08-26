const http= require("http");
const fs = require("fs");
const express = require('express')

var PORT=8080;

var server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
//callback triggered when server is successfully listening, Hooray!
console.log("server listening on: http://localhost:" + PORT) + "Hooray!";

});

//create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    //capture the URL the request is made to 
    var path = req.url;

    console.log('current path, path')
    //Depending on the URL, display a different HTML file

    switch (path) {
        case "/":
            return displayRoot(res);

        case "/portfolio":
            return displayPortfolio(res);

        default:
            return display404(path,res);
    }
}

//when someone visits the http://localhost:8080" path, this function is run:

function displayRoot(res) {
    var home = "<html>" +
    "<body><h1>Hello</h1>" +
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";

    //Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document)
    res.writeHead(200, { "Content-Type": "text/html:"})

    //End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(home);
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(res) {
  var myHTML = "<html>" +
    "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, res) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}
