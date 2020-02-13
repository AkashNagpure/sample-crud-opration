
const mongoose = require('mongoose');

// Construct the Mongo URL
mongoConnUrl = "mongodb://localhost:27017/studentDetails";

// Connect to MongoDB
mongoose.connect(mongoConnUrl, {
   useUnifiedTopology: true,
   useCreateIndex: true,
   useNewUrlParser: true,
   dbName: "studentDetails"
 });

// When connected
mongoose.connection.on('connected', function() {
   console.log('Mongoose default connection open on ' + mongoConnUrl);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
   console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
   console.log('Mongoose default connection disconnected');
});
 
module.exports = { mongoose };


