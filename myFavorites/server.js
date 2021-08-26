// Require dependencies
const http= require('http');
var fs = require("fs");
const PORT= 8080;


var server = http.createServer(handleRequest);

// Set our port to 8080

  // Capture the url the request is made to
//create a function which handles incoming requests and sends responses
function handleRequest(req, res){

    //capture the URL the request is made to 

var path = req.url;

    //console.log('current path, path')
    //Depending on the URL, display a different HTML file

    switch (path) {
       case "/framework": return fs.readFile(__dirname + "/framework.html",function(err,data){
           if  (err) throw err;
           res.writeHead(200,{
               "content-type":"text/html"})
               res.end(data)
           });
        

        case "/food": return fs.readFile(__dirname + "/food.html",function(err,data){
            if  (err) throw err;
            res.writeHead(200,{
                "content-type":"text/html"})
                res.end(data)
            });
         
         case "/movies": return fs.readFile(__dirname + "/movies.html",function(err,data){
            if  (err) throw err;
            res.writeHead(200,{
                "content-type":"text/html"})
                res.end(data)
            });
        

         case "/": return fs.readFile(__dirname + "/index.html",function(err,data){
            if  (err) throw err;
            res.writeHead(200,{
                "content-type":"text/html"})
                res.end(data)
            });
         }

        }
    
               


  // When we visit different urls, read and respond with different files

    // default to rendering index.html, if none of above cases are hit


// Starts our server.
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });