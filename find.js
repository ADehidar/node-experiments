var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/fruits";

MongoClient.connect(url,function(err,db){
  if(err){
    console.log('Failed to connect to Client');

  }
  else {
    console.log('Connected to Client');

    var collection = db.collection('apples');

    collection.find().toArray(function(err,res){

      if(err){
        console.log("Failed to find: "+err);
      }
      else if (res.length) {
        console.log(res.length+" Matches found");

      }
      else {
        console.log("No Matches found");
      }
      db.close();
    });


  }
});
