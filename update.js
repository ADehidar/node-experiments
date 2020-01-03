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



    collection.update({'name' : 'Green Apple'},{$set: {'color':'black'}},function(err, response){

      if(err){
        console.log('Failed to insert in Database');
      }
      else {
        console.log('Updated Succesfully');
      }
      db.close();
    });
  }
});
