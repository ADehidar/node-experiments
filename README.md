# Node_experiments
To install mongoDB on MAC.

1. Download the tar file for mac
2. Untar the file
3. sudo mv mongodb-osx-x86_64-2.2.3 /usr/local/mongodb

By default, MongoDB write/store data into the /data/db folder, you need to create this folder manually and assign proper permission.

4. sudo mkdir -p /data/db
5. find userid through "whoami"
6. sudo chown <whoami> /data/db
  
Add mongodb/bin to $PATH

7. cd /Users/<userID>
8. touch .bash_profile
9. vim .bash_profile
10. export MONGO_PATH=/usr/local/mongodb
11. export PATH=$PATH:$MONGO_PATH/bin
  
  
To Run this project we need to install mongoDB driver

1. npm install mongodb@2.2.33 --save 
** Use older version of driver as latest version will give error

To start mongoDB - "mongod"

To open query terminal - "mongo"

To view tables

1. show dbs
2. use fruits
3. db.<collection_name>.find.pretty()


  
To Drop a table

db.<collection_name>.drop()
