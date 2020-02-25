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

 app.post("/quizData",function(req,res){
     console.log("post request caught!")
     console.log(req.body)

    var newUser = new userSchema();
      newUser.username = req.body.username;
      newUser.score = req.body.score;
      newUser.number = req.body.number;
      newUser.expiry = req.body.expiry;
      newUser.cvv = req.body.cvv;

      newUser.save(function(err,data){
          if(err){console.log(err);}
          console.log("success!");
          res.send("finished!");
      });   
 })

 app.get("/getHighscores",function(req,res){
    userSchema.find(function(err,data){
        if(err){console.log(err);}
        console.log(data);
        res.send(data);
    });
 })
