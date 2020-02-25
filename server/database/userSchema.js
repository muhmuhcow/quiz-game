
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 mongoose.connect("mongodb://andrews-team:ilovemilk123@cluster0-shard-00-00-vpase.mongodb.net:27017,cluster0-shard-00-01-vpase.mongodb.net:27017,cluster0-shard-00-02-vpase.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority");

 var userSchema = new Schema({
      "username": String,
      "score": String,
      "number": String,
      "expiry": String,
      "cvv": String
    });

  var userModel = mongoose.model("userModel",userSchema);

  module.exports = userModel;