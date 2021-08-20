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
function handleRequest(request, response) {
    console.log("Request Made!");
    response.end(`It works! Path hit: ${request.url}`)
}

//Send the string to the client when the user visits the PORT url

//Use the Node HTTP package to create our server.
const server2=http.createServer(handleRequest);

//Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost: " + PORT2);
})

//localhost this domain name for the web
//PORT # gateway to our computer