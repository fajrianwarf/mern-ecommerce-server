const mongoose = require("mongoose");
const { dbAtlasUserName, dbAtlasPass, dbAtlasCluster, dbAtlasName, dbUser, dbPass, dbName } = require('../app/config');

const urlAtlas = `mongodb+srv://${dbAtlasUserName}:${dbAtlasPass}@${dbAtlasCluster}.fhypt.mongodb.net/${dbAtlasName}?retryWrites=true&w=majority`;
const urlLocal = `mongodb://${dbUser}:${dbPass}@localhost:27017/${dbName}?authSource=admin`;
let connectionDatabase = urlLocal;

// const url2 = 'mongodb+srv://fajrianwarf:<password>@ecommerce-server.fhypt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// console.log(url);

mongoose.connect(connectionDatabase, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('open', () => {
    if(connectionDatabase !== urlLocal) {
        console.log('connected to the mongodb atlas');
    } else {
        console.log('Connected to the mongodb local');
    }
})

module.exports = db;