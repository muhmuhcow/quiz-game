var db = require('mongodb').MongoClient;

 db.connect("mongodb://andrews-team:ilovemilk123@cluster0-shard-00-00-vpase.mongodb.net:27017,cluster0-shard-00-01-vpase.mongodb.net:27017,cluster0-shard-00-02-vpase.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser: true }, function(err, db) {
     if (err) throw err;
     console.log("Database connected!");
     db.close();
   });

  module.exports = db;