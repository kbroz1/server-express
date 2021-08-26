//Require or import the HTTP modulee
//communication between the server and the client


const http= require('http');

//define a port to listen for incoming requests
const PORT= 7000;
//PORT is always in all caps

//Create a generic function to handle requestsand responses
//Pass the handleRequest function to empower it wiith functionality. 
function handleRequest(request, response) {
    console.log("Request Made!");
    response.end(`It works! Path hit: ${request.url}`)
}

//Send the string to the client when the user visits the PORT url

//Use the Node HTTP package to create our server.
const server=http.createServer(handleRequest);

//Start our server so that it can begin listening to client requests.
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
})

//localhost this domain name for the web
//PORT # gateway to our computer

//Require or import the HTTP modulee
//communication between the server and the client


//define a port to listen for incoming requests
const PORT2= 7500;
//PORT is always in all caps

//Create a generic function to handle requestsand responses
//Pass the handleRequest function to empower it wiith functionality. 
function handleRequestTwo(request, response) {
    console.log("Request Made!");
    response.end(`It works! Path hit: ${request.url}`)
}

//Send the string to the client when the user visits the PORT url

//Use the Node HTTP package to create our server.
const server2=http.createServer(handleRequestTwo);

//Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost: " + PORT2);
})

//localhost this domain name for the web
//PORT # gateway to our computer


//April's code:
//I like the way she organized the variables
// // We require/import the HTTP module
// var http = require("http");

// // =====================================================================

// // Then define the ports we want to listen to
// var PORTONE = 7000;
// var PORTTWO = 7500;

// // =====================================================================

// // We need two different functions to handle requests, one for each server.
// function handleRequestOne(request, response) {
//   response.end("To err is human, but to really foul things up you need a computer.");
// }

// function handleRequestTwo(request, response) {
//   response.end("Never trust a computer you can't throw out a window.");
// }

// // =====================================================================

// // Create our servers
// var serverOne = http.createServer(handleRequestOne);
// var serverTwo = http.createServer(handleRequestTwo);

// // =====================================================================

// // Starting our servers
// serverOne.listen(PORTONE, function() {

//   // Callback triggered when server is successfully listening. Hurray!
//   console.log("Server listening on: http://localhost:" + PORTONE);
// });

// serverTwo.listen(PORTTWO, function() {

//   // Callback triggered when server is successfully listening. Hurray!
//   console.log("Server listening on: http://localhost:" + PORTTWO);
// });
