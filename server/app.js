var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 5000;
//const routes = require('./routes/routes.js');
const db = require('./database/db.js');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
  }));
var userSchema = require("./database/userSchema.js");


app.listen(PORT,()=>console.log(`listening on ${PORT}`));

app.get("/",function(req,res){
    
    res.send("yo wuddup");
}); 

app.get("/getStuff",function(req,res){
    res.send({stuff : "myStuff"});
}); 


app.get("/addShitToDatabase",function(req,res){
    var newUser = new userSchema();
    newUser.username = "Bob";
    newUser.score = "12";
    newUser.save(function(err,data){
        if(err){console.log(err);}
        console.log("success!");
    });
}); 
