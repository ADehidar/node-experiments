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
    
    var doc1  = {'name' : 'Green Apple','Color' : 'Green'};
    var doc2 = {'name' : 'Red Apple','Color' : 'Red'};

    collection.insert([doc1,doc2],function(err, response){

      if(err){
        console.log('Failed to insert in Database');
      }
      else {
        console.log(response.insertedCount);
      }
      db.close();
    });
  }
});
