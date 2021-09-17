//First step - Dependencies - what you need to require/import//
const express = require("express");
const app = express();
const path = require("path");


//Sets up the Express App

var PORT = 3000;
//PORT is always capitalized 

//Sets up the Express app to handle data parsing
//for sending POST requests

app.use(express.urlencoded({extended:true}));
app.use(express.json());

/// Movie Chracters (DATA) -- this is the data we are pulling from for the search and list button functions

let characters = [
    {
        routeName: "harrypotter",
        name: "HarryPotter",
        role: "wizard",
        superPower: "magic"
    },

    {
        routeName: "reginageorge",
        name: "ReginaGeorge",
        role: "meanGirl",
        superPower: "popular"
    },
    {
        routeName: "batman",
        name: "Batman",
        role: "hero",
        superPower: "highTechGear"
    },
    {
        routeName: "sully",
        name: "Sully",
        role: "monster",
        superPower: "scary"
    },

    {
        routeName: "scoobydoo",
        name: "ScoobyDoo",
        role: "dog",
        superPower: "mysterySolver"
    },


];

//Routes
//Basic route that sends the user first to the HTML Pages 
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"views.html"))
});

app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname, "add.html"))
})

//Displays all characters - when you hit see all, it will show all of the data
app.get("/api/characters", function (req, res){
    res.json(characters);
});

//this variable (below) requests (req) the paramaters (.params) of the characters (.characters) object
// Grab the selected parameter
// Goes through the array for the Characters
// : before our route to target an array
app.get('/api/:characters', function(req, res){
    var chosen = req.params.characters;
    if(chosen){
        console.log(chosen);
        for (var i=0; i <characters.length; i++){
            if (chosen == characters[i].routeName){
                res.json(characters[i]);
                return;
            }
        }
        res.json(false);
        
    } else {
        res.json(characters)
    }
})

//.post allows you to add something new, post something new to the website - like an input
app.post("/api/chracters", function(req,res){
    var newCharacter =req.body;
    console.log(newCharacter)
    characters.push(newCharacter);
    //.push will add your new character to the bottom of array in json format
    res.json(newCharacter);
});


//starts the server to begin listening for requests

app.listen(PORT, function() {
 console.log("App is listening on port: " + PORT);
}) 
